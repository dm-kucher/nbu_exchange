import {Link, Route, Routes} from "react-router-dom";
import Main from "../Content/Main/Main";
import CurrencyHistory from "../Content/CurrencyHistory/CurrencyHistory";

const MainMenu = () => {
    return (
        <main className="main" id="top">
            <div className="container" data-layout="container">
                <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg"
                     data-double-top-nav="data-double-top-nav">
                    <div className="w-100">
                        <div className="d-flex flex-between-center">
                            <h1>Курс валют НБУ</h1>
                        </div>
                        <hr className="my-2 d-none d-lg-block"/>
                        <div className="collapse navbar-collapse scrollbar py-lg-2">
                            <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/">Головна</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/currency-history">Історія</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/analytics">Аналітика</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/rates-in-banks">Курс валют в банках</Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                </nav>
            </div>

        </main>

    );
}

export default MainMenu