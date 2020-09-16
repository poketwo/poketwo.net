import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Navbar
                className="is-transparent"
                style={{ backgroundColor: "transparent" }}
                brand={
                    <Navbar.Item
                        href="/"
                        className="has-text-weight-bold"
                        active={false}
                    >
                        Pokétwo
                    </Navbar.Item>
                }
            >
                <Navbar.Item href="/">Home</Navbar.Item>
                <Navbar.Item href="/commands">Commands</Navbar.Item>
                <Navbar.Item href="/team">Team</Navbar.Item>
                <Navbar.Item href="/store">Store</Navbar.Item>
                <Navbar.Item>
                    <a
                        href="https://invite.poketwo.net/"
                        className="button has-shadow is-light is-rounded"
                    >
                        Add Pokétwo
                    </a>
                </Navbar.Item>
            </Navbar>

            {children}
        </div>
    );
};

export default MainLayout;
