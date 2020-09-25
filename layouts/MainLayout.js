import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Navbar
                className="is-transparent"
                style={{ backgroundColor: "transparent" }}
                brand={
                    <Navbar.Item href="/" className="has-text-weight-bold" active={false}>
                        Pokétwo
                    </Navbar.Item>
                }
            >
                <Navbar.Item href="/">Home</Navbar.Item>
                {/* <Navbar.Item href="/commands">Commands</Navbar.Item> */}
                <Navbar.Item href="/people">People</Navbar.Item>
                <Navbar.Item href="/store">Store</Navbar.Item>
                <a className="navbar-item" href="https://top.gg/bot/716390085896962058/vote">
                    Vote
                </a>
                <a className="navbar-item" href="https://github.com/oliver-ni/poketwo">
                    GitHub
                </a>
                <Navbar.Item>
                    <a href="https://invite.poketwo.net/" className="button has-shadow is-light is-rounded">
                        Add Pokétwo
                    </a>
                </Navbar.Item>
            </Navbar>

            {children}

            <div style={{ flexGrow: 1 }} />

            <Footer />
        </div>
    );
};

export default MainLayout;
