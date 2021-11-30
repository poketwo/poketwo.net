const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
    [
        [
            optimizedImages,
            {
                responsive: {
                    adapter: require("responsive-loader/sharp"),
                },
            },
        ],
    ],
    {
        images: {
            domains: ["assets.poketwo.net", "cdn.discordapp.com", "i.imgur.com"],
        },
    }
);
