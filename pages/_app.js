import withGA from "next-ga";
import { DefaultSeo } from "next-seo";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import MainLayout from "../layouts/MainLayout";
import "../styles/main.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || MainLayout;
    const layoutProps = Component.layoutProps || {};

    return (
        <>
            <DefaultSeo
                title="Pokétwo"
                description="Catch, level, and evolve pokémon. Trade with friends. Battle with other players. Compete to catch 'em all."
            />
            <Layout {...layoutProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default withGA("G-FWKF67W9X5", Router)(App);
