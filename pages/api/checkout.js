import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const prices = {
    5: "price_1HWYyLL49CplPi5yW32V7zf8",
    10: "price_1HWYyJL49CplPi5yrhmNrWMk",
    20: "price_1HWYyGL49CplPi5yW5y44i1v",
    40: "price_1HWYy7L49CplPi5ylvpVR9D0",
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
