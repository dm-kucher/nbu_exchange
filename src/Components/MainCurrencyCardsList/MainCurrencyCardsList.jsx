import CurrenceCard from "../CurrencyCard/CurrenceCard";
import CurrencyList from "../../Data/CurrencyList";

const MainCurrencyCardsList = () => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    {
                    CurrencyList.map(el => <CurrenceCard data={el}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MainCurrencyCardsList