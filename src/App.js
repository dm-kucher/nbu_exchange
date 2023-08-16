import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Content/Main/Main";
import {Route, Routes} from "react-router-dom";
import CurrencyHistory from "./Components/Content/CurrencyHistory/CurrencyHistory";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/currency-history" element={<CurrencyHistory/>}/>
            </Routes>
        </div>
    );
}

export default App;
