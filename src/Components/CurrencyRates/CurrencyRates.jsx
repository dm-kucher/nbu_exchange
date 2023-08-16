import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setRates} from "../../Data/Slices/RatesSlice";

import moment from "moment";
import axios from "axios";

const TableRow = (props) => {
    return (
        <tr className="hover-actions-trigger btn-reveal-trigger hover-bg-100">
            <td className="align-middle white-space-nowrap">
                <h6 className="mb-0 ps-2 name">{props.data.r030}</h6>
            </td>
            <td className="align-middle white-space-nowrap">
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-xl">
                        {/*<img className="rounded-circle" src="../assets/img/team/1-thumb.png" alt="">*/}
                        <p className="rounded-pill m-0 mt-1">{props.data.cc}</p>
                        {/*<span className="badge rounded-pill bg-infoo">{props.data.cc}</span>*/}
                    </div>
                    <h6 className="mb-0 ps-2 name">{props.data.txt}</h6>
                </div>
            </td>

            <td className="align-middle white-space-nowrap">
                <h6 className="mb-0 ps-2 name">{props.data.rate.toFixed(4)}</h6>
            </td>
        </tr>
    )
}

const CurrencyRates = () => {

    let rates = useSelector(state => state.CurrencyRates.rates);
    let rDate = useSelector(state => state.RatesDate.rDate);
    let dispatch = useDispatch();

    let rDateString = moment(rDate).format("YYYYMMDD");

    useEffect( () => {

        axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${rDateString}&json`)
            .then(response => {
                    dispatch(setRates(response.data))
                }
            )

        },[rDate]
    )

    return (
        <div className="card" id="TableCrmRecentLeads"
             data-list="{&quot;valueNames&quot;:[&quot;currencyCode&quot;,&quot;currency&quot;,&quot;rate&quot;],&quot;page&quot;:8,&quot;pagination&quot;:false}">
            <div className="card-header d-flex flex-between-center py-4">
                <h5 className="mb-0">Офіційний курс гривні до іноземних валют</h5>
            </div>
            <div className="card-body px-0 py-0">
                <div className="table-responsive scrollbar">
                    <table className="table fs--1 mb-0">
                        <thead className="bg-200 text-800">
                        <tr>
                            <th className="sort align-middle asc" data-sort="currencyCode">Код</th>
                            <th className="sort align-middle" data-sort="currency">Валюта</th>
                            <th className="sort align-middle" data-sort="rate">Курс</th>
                        </tr>
                        </thead>
                        <tbody className="list">
                        {
                            rates.map(el => <TableRow data={el}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CurrencyRates