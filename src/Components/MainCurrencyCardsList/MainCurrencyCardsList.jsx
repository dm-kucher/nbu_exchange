import CurrencyCard from "../CurrencyCard/CurrencyCard";
import CurrencyList from "../../Data/CurrencyList";

const MainCurrencyCardsList = () => {

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    {
                    CurrencyList.map(el => <CurrencyCard data={el}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MainCurrencyCardsList