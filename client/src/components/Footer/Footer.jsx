import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

// import bg from ''

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img />
                        <a href="/">scekaMovies</a>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <a href="/">Home</a>
                        <a href="/">Contact us</a>
                        <a href="/">Terms of use</a>
                        <a href="/">About us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/">Live</a>
                        <a href="/">FAQ</a>
                        <a href="/">Premium</a>
                        <a href="/">Privacy Policy</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/">You must watch</a>
                        <a href="/">Recent release</a>
                        <a href="/">Top IMDB</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
