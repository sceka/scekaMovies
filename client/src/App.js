import "swiper/swiper.min.css";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./config/Routes";

function App() {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <>
                        <Header {...props} />
                        <Routes />
                        <Footer />
                    </>
                )}
            />
        </BrowserRouter>
    );
}

export default App;
