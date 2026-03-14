import HomeStyles from "./Home.module.css";
import HeroImage from "../assets/images/online-store.png";
import { Link } from "react-router";
function Home() {
    return (
        <main className={HomeStyles.main}>
            <h1>Home</h1>
            <div className={HomeStyles["body-container"]}>
                <div className={HomeStyles["left-side-body"]}>
                    <img
                        src={HeroImage}
                        alt="online store"
                        className={HomeStyles.image}
                    />
                </div>
                <div className={HomeStyles["right-side-body"]}>
                    <h2 className={HomeStyles.welcome}>
                        Welcome to Shopaholic!
                    </h2>
                    <h3 className={HomeStyles["right-side-description"]}>
                        Here we beliave that everything you could ever want can
                        be ordered online! That is why we have made a selection
                        of the top most wanted and needed items for everyone and
                        put them in a catalog! Find the thing you need or
                        discover something new!
                    </h3>
                    <Link className={HomeStyles.link} to={"/shop"}>
                        Brouse Our Selection!
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
