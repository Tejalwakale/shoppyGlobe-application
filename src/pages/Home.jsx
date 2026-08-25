// Import ProductList component to display all products
import ProductList from "../components/ProductList";

function Home() {
    return (
        <main className="home">

            {/* Hero section with welcome message */}
            <section className="hero">
                <div className="hero-content">
                    {/* Small welcome heading */}
                    <p className="hero-small-title">
                        WELCOME TO SHOPPY GLOBE
                    </p>

                    {/* Main hero heading */}
                    <h1>
                        Your World of Shopping,
                        <br />
                        All in One Place
                    </h1>

                </div>
            </section>

            {/* Products */}
            <div id="products">

                {/* Display the product list */}
                <ProductList/>
            </div>

        </main>
    );
}

export default Home;