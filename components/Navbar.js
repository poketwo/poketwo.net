import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NavbarItem = ({ href, children, active, className, tag, ...props }) => {
    const router = useRouter();
    let Tag = tag ?? href ? "a" : "div";
    let Wrapper = href ? Link : React.Fragment;
    return (
        <Wrapper {...(href ? { href } : {})}>
            <Tag
                className={classNames({
                    "navbar-item": true,
                    "is-active": active ?? router.pathname === href,
                    [className]: !!className,
                })}
                {...props}
            >
                {children}
            </Tag>
        </Wrapper>
    );
};

const Navbar = ({ children, brand, className, ...props }) => {
    const [isActive, setisActive] = useState(false);

    return (
        <nav
            className={classNames({
                navbar: true,
                "is-dark": true,
                [className]: !!className,
            })}
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0 5px 25px" }}
            role="navigation"
            aria-label="main navigation"
            {...props}
        >
            <div className="container">
                <div className="navbar-brand" style={{ alignItems: "center" }}>
                    {brand}

                    <a
                        role="button"
                        className={classNames({
                            "navbar-burger burger": true,
                            "is-active": isActive,
                        })}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar"
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbar"
                    className={classNames({
                        "navbar-menu": true,
                        "is-active": isActive,
                    })}
                >
                    <div
                        className="navbar-end"
                        style={{ alignItems: "center" }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.Item = NavbarItem;

export default Navbar;
