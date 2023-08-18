import crmbarchart from "../img/crm-bar-chart.png";
import crmlinechart from "../img/crm-line-chart.png";

import SelectPeriod from "./SelectPeriod/SelectPeriod";

import ReactECharts from 'echarts-for-react';

import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import axios from "axios";

import {setRates, setCurrency} from "../../../Data/Slices/CurrencyHistory";

const SelectCurrency = () => {

    const dispatch = useDispatch()
    let currencyValue = useSelector(state => state.CurrencyHistory.currency)

    const onSelectCurrency = (value) => {
        dispatch(setCurrency(value));
    }

    return (
        <select className="form-select" aria-label="Default select example" value={currencyValue}
                onChange={el => onSelectCurrency(el.target.value)}>
            <option selected="">Виберіть валюту</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>
    )
}

const CurrencyChart = () => {

    const options = {
        // grid: {
        //     bottom: 250,
        //     top: 0
        // },
        xAxis: {
            show: true,
            type: 'category',
            data: ['12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23', '12.02.23',]
        },
        yAxis: {
            type: 'value',
            show: true,
        },
        series: [
            {
                data: [21, 24, 25, 26, 29, 30, 31, 33, 35.5, 36.7],
                type: 'line',
                smooth: true,
                color: "#2c7be5",
                areaStyle: {
                    "color": {
                        "colorStops": [{"offset": 0, "color": "#2c7be53A"}, {"offset": 1, "color": "#2c7be50A"}]
                    }
                },
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div className="card">
            <ReactECharts option={options}/>
        </div>
    )
}

const TableRow = (props) => {
    return (
        <tr className="border-bottom border-200">
            <td className="align-middle font-sans-serif fw-medium text-nowrap">Долар США</td>
            <td className="align-middle text-center">30.01.2022</td>
            <td className="align-middle text-center">28.9879</td>
        </tr>
    )
}

const CurrencyRatesTable = () => {

    let currencyValue = useSelector(state => state.CurrencyHistory.currency);
    let currencyPeriod = useSelector(state => state.CurrencyHistory.period);

    const dispatch = useDispatch();

    const url = "https://bank.gov.ua/NBU_Exchange/exchange_site?start=20220115&end=20220131&valcode=USD&sort=exchangedate&order=asc&json";

    // let headers = {
    //     'Access-Control-Allow-Credentials':true,
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // }

    useEffect(() => {
            if (currencyValue) {
                axios.get(url)
                    .then(response => {
                            dispatch(setRates(response.data));
                        }
                    )
                // .catch(function (error) {
                //     console.log(error);
                // })
            }
        }, [currencyValue, currencyPeriod, dispatch]
    );

    return (
        <div className="card overflow-hidden">
            <div className="card-header">
                <h5 className="mb-0">Історія курсів</h5>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive scrollbar">
                    <table className="table mb-0 fs--1 border-200 table-borderless">
                        <thead className="bg-dark">
                        <tr className="text-800 bg-200">
                            <th className="text-nowrap">Валюта</th>
                            <th className="text-center text-nowrap">Дата</th>
                            <th className="text-center text-nowrap">Курс</th>
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow/>
                        </tbody>
                        {/*<tfoot className="bg-dark">*/}
                        {/*    <tr className="text-700 fw-bold bg-100">*/}
                        {/*        <td></td>*/}
                        {/*        <td></td>*/}
                        {/*        <td></td>*/}
                        {/*    </tr>*/}
                        {/*</tfoot>*/}
                    </table>
                </div>
            </div>
        </div>
    )
}

const CurrencyHistory = () => {

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
                                        <h6 className="text-primary fs--1 mb-0">Історія</h6>
                                        <h4 className="text-primary fw-bold mb-0">Валют <span
                                            className="text-info fw-medium">НБУ</span></h4>
                                    </div>
                                    <img className="ms-n4 d-md-none d-lg-block"
                                         src={crmlinechart} alt="" width="150"/>
                                </div>
                                <div className="col-md-auto p-3">
                                    <SelectCurrency/>
                                </div>
                                <div className="col-md-5 p-3">
                                    <SelectPeriod/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 g-3">
                    <div className="col-lg-12 col-xxl-9">
                        <CurrencyChart/>
                    </div>
                </div>
                <div className="row mb-3 g-3">
                    <div className="col-lg-12 col-xxl-9">
                        <CurrencyRatesTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyHistory