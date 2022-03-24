import { Category, Feature, Footer, Navbar, Teams, Review, Banner } from "../../components";
export default function Home(){
    return (
        <>
        
        <Navbar />
        <main className="home-container">
            <Banner />
            <Category />
            <Feature />
            <Teams />
            <Review />
        </main>
        <Footer />

        </>
    );
}