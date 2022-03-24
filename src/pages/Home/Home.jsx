
import { max_lewis } from "../../assets";
  
import { Link } from "react-router-dom";
import { Category, Feature, Footer, Navbar, Teams, Review } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home(){
    return (
        <>
        
        <Navbar />
        <main className="home-container">
            <div className="banner-container">
                <img
                    className="banner-image"
                    src={max_lewis}
                    alt="banner-image" />
                <Link className="banner-text" to="/ProductListing">Shop Now<FontAwesomeIcon icon={faArrowRight}/></Link>
            </div>
            <Category />
            <Feature />
            <Teams />
            <Review />
        </main>
        <Footer />

        </>
    );
}