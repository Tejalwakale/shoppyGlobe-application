import ProductList from "../components/ProductList";

function Home() {
    return (
        <main className="home">

            <section className="hero">
                <div className="hero-content">
                    <p className="hero-small-title">
                        WELCOME TO SHOPPY GLOBE
                    </p>

                    <h1>
                        Your World of Shopping,
                        <br />
                        All in One Place
                    </h1>

                </div>
            </section>

            {/* Products */}
            <div id="products">
                <ProductList/>
            </div>

        </main>
    );
}

export default Home;