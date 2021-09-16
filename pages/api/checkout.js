import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const EXTRA_PAYMENT_METHODS = {
    USD: ["wechat_pay"],
    EUR: ["sepa_debit", "bancontact", "eps", "giropay", "ideal", "p24", "sofort"],
    CAD: ["acss_debit"],
};

export default async (req, res) => {
    if (req.method === "POST") {
        const { user, price_id, currency } = req.body;

        const customers = await stripe.customers.list({
            email: user.email,
            limit: 1,
        });

        const customer = {};
        if (customers["data"].length === 0) {
            customer["customer_email"] = user.email;
        } else {
            customer["customer"] = customers["data"][0].id;
        }

        const extra_methods = EXTRA_PAYMENT_METHODS[currency] ?? [];

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card", ...extra_methods],
            payment_intent_data: { metadata: { ...user } },
            payment_method_options: {
                acss_debit: {
                    mandate_options: {
                        payment_schedule: "sporadic",
                        transaction_type: "personal",
                    },
                },
                wechat_pay: { client: "web" },
            },
            metadata: { ...user },
            line_items: [{ price: price_id, quantity: 1 }],
            success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/store`,
            allow_promotion_codes: true,
            ...customer,
        });

        res.status(200).json({ id: session.id });
    } else {
        res.status(405).end();
    }
};
