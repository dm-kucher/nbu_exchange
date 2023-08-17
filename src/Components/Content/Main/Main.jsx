import crmbarchart from '../img/crm-bar-chart.png';
import crmlinechart from '../img/crm-line-chart.png';
import SelectDate from "./SelectDate/SelectDate";
import MainCurrencyCardsList from "../../MainCurrencyCardsList/MainCurrencyCardsList";

import CurrencyRates from "../../CurrencyRates/CurrencyRates";

const Main = () => {

    return (
        <div className="container">
           <div className="content">
               <div className="row mb-3">
                   <div className="col">
                       <div className="card bg-100 shadow-none border">
                           <div className="row gx-0 flex-between-center">
                               <div className="col-sm-auto d-flex align-items-center">
                                   <img className="ms-n2"
                                        src={crmbarchart} alt="" width="90"/>
                                   <div>
                                       <h6 className="text-primary fs--1 mb-0">Курси </h6>
                                       <h4 className="text-primary fw-bold mb-0">Валют <span
                                           className="text-info fw-medium">НБУ</span></h4>
                                   </div>
                                   <img className="ms-n4 d-md-none d-lg-block"
                                        src={crmlinechart} alt="" width="150"/>
                               </div>
                               <div className="col-md-auto p-3">
                                   <SelectDate/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="row mb-3 g-3">
                   <div className="col-lg-12 col-xxl-9">
                       <MainCurrencyCardsList/>
                   </div>
               </div>
               <div className="row mb-3 g-3">
                    <div className="col-lg-12 col-xxl-9">
                        <CurrencyRates/>
                    </div>
               </div>
           </div>
        </div>
    );
}

export default Main