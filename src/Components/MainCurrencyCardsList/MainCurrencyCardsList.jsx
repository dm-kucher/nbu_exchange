import CurrenceCard from "../CurrencyCard/CurrenceCard";

const MainCurrencyCardsList = () => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <CurrenceCard/>
                    <CurrenceCard/>
                    <CurrenceCard/>
                </div>
            </div>
        </div>
    );
}

export default MainCurrencyCardsList