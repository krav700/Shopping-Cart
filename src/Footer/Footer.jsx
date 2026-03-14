import { Link } from "react-router-dom";
import FooterStyles from "./Footer.module.css";

function Footer() {
    return (
        <div className={FooterStyles["footer"]}>
            <footer>
                <div className={FooterStyles["content"]}>
                    <div className={FooterStyles.contact}>
                        <h2>Shopaholic@gmail.com</h2>
                        <h2>555-555-555</h2>
                        <h2>Shopping Street 55</h2>
                    </div>
                    <Link className={FooterStyles.title}>Shopaholic</Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
