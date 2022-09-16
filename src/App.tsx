import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import ScrollToTop from "";
import ScrollToTop from "./hooks/scroll-to-top";

import { Home, Company, Fleet, Services, Contact } from "./pages";

import Header from "./components/header";
import LoadingPage from "./components/loading-page";
import Footer from "./components/footer";

export default function App(): JSX.Element {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2500);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <Router>
                    <Header />
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route
                            path="/services/:service"
                            render={() => <Services />}
                        />
                        <Route
                            path="/company/:statement"
                            render={() => <Company />}
                        />
                        <Route path="/fleet" render={() => <Fleet />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route render={() => 404} />
                    </Switch>
                    <Footer />
                </Router>
            )}
        </>
    );
}
