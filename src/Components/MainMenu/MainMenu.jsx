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
                        <div class="collapse navbar-collapse scrollbar py-lg-2">
                            <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                                <li className="nav-item dropdown">

                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false" id="dashboards">Головна</a>

                                </li>

                                <li className="nav-item dropdown">

                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false" id="dashboards">Історія</a>

                                </li>

                                <li className="nav-item dropdown">

                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false" id="dashboards">Аналітика</a>

                                </li>

                                <li className="nav-item dropdown">

                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false" id="dashboards">Курс валют в банках</a>

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