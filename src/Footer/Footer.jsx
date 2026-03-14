import { Link } from "react-router";
import FooterStyles from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterStyles["footer"]}>
        <footer>
          <h1>Footer</h1>
          <div className={FooterStyles["content"]}>
            <div className={FooterStyles.contact}>
              <h2>Email: Shopaholic@gmail.com</h2>
              <h2>Phone: 555-555-555</h2>
              <h2>Address: Shopping Street 55</h2>
            </div>
            <Link className={FooterStyles.title}>Shopaholic</Link>
          </div>
        </footer>
      </div>
  )
}

export default Footer;
