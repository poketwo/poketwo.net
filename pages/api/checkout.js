import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const prices = {
    5: "price_1HUMZhL49CplPi5yRUm7zcQg",
    10: "price_1HUMZtL49CplPi5yqY1uZhNq",
    20: "price_1HUMa8L49CplPi5yOZfAvYR3",
    40: "price_1HUMaKL49CplPi5yhEkvrg83",
};

export default async (req, res) => {
    if (req.method === "POST") {
        const { amount, user } = req.body;

        if (!prices.hasOwnProperty(amount)) {
            res.status(400).end();
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            payment_intent_data: {
                metadata: {
                    ...user,
                },
            },
            line_items: [
                {
                    price: prices[amount],
                    quantity: 1,
                },
            ],
            success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/store`,
            customer_email: user.email,
        });

        res.status(200).json({ id: session.id });
    } else {
        res.status(405).end();
    }
};
