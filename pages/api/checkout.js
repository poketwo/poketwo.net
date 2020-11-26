import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const test_prices = {
    5: "price_1HUMZhL49CplPi5yRUm7zcQg",
    10: "price_1HUMZtL49CplPi5yqY1uZhNq",
    20: "price_1HUMa8L49CplPi5yOZfAvYR3",
    40: "price_1HUMaKL49CplPi5yhEkvrg83",
};

const live_prices = {
    5: "price_1HWYyLL49CplPi5yW32V7zf8",
    10: "price_1HWYyJL49CplPi5yrhmNrWMk",
    20: "price_1HWYyGL49CplPi5yW5y44i1v",
    40: "price_1HWYy7L49CplPi5ylvpVR9D0",
};

const prices = process.env.BASE_URL.includes("localhost") ? test_prices : live_prices;

export default async (req, res) => {
    if (req.method === "POST") {
        const { amount, user } = req.body;

        if (!prices.hasOwnProperty(amount)) {
            res.status(400).end();
        }

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
            allow_promotion_codes=true,
            ...customer,
        });

        res.status(200).json({ id: session.id });
    } else {
        res.status(405).end();
    }
};
