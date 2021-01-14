import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { DefaultSeo } from "next-seo";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { pageview } from "../helpers/gtag";
import MainLayout from "../layouts/MainLayout";
import "../styles/main.scss";

config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || MainLayout;
    const layoutProps = Component.layoutProps || {};

    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", pageview);
        return () => router.events.off("routeChangeComplete", pageview);
    }, [router.events]);

    return (
        <>
            <DefaultSeo
                title="Pokétwo"
                description="Catch, level, and evolve pokémon. Trade with friends. Battle with other players. Compete to catch 'em all."
	        openGraph={{
                    site_name: 'Pokétwo',
		    type: 'website',
		    url: 'https://poketwo.net',
		    images: [
			{
			    url: 'https://poketwo.net/_next/image?url=%2Fassets%2Flogo.png&w=640&q=75',
			    width: 200,
			    height: 200,
			    alt: 'Pokétwo Logo'
			}
		    ]
		    
		    
	        }}
            />
            <Layout {...layoutProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
