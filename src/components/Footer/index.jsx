import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import s from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.copyright} >
                    <p>© 2024 - Riniel Santos</p>
                </div>

                <div className={s.icons} >
                    <a href="#"><FaFacebook /> </a>
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaYoutube /> </a>
                    <a href="#"> <FaLinkedin /> </a>
                    <a href="#"> <AiFillInstagram /> </a>
                </div>
            </div>
        </footer>
    )
}