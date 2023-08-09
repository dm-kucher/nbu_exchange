import ReactECharts from 'echarts-for-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'

import {faHryvnia} from "@fortawesome/free-solid-svg-icons";

import {useState} from "react";
import {useEffect} from "react";

const CurrencyCard = (props) => {

    // let [currency, setCurrency ] = useState([]);
    // useEffect(()=> setCurrency(PostsData))

    const options = {
        grid: {
            bottom: 250,
            top: 0
        },
        xAxis: {
            show: false,
            type: 'category',
        },
        yAxis: {
            type: 'value',
            show: false,
            min:10,
            max:50,
        },
        series: [
            {
                data: [24,25,26,29,31,32,33,35.5],
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
        <div className="col-lg-4 border-lg-end border-bottom border-lg-0 pb-3 pb-lg-0">
            <div className="d-flex flex-between-center mb-3">
                <div className="d-flex align-items-center">
                    <div className="icon-item icon-item-sm bg-soft-primary shadow-none me-2 bg-soft-primary">
                        <h4><FontAwesomeIcon icon={props.data.logo}/></h4>
                    </div>
                    <h4>{props.data.title}</h4>
                </div>

            </div>
            <div className="d-flex">
                <div className="d-flex">
                    <p className="font-sans-serif lh-1 mb-1 fs-3 pe-2">36.24</p>
                    <FontAwesomeIcon icon={faHryvnia}/>
                    <div className="d-flex flex-column mx-2">
                        <div className="align-items-start">
                            <FontAwesomeIcon icon={faCaretUp} color={"green"}/>
                        </div>
                        <p className="fs--2 mb-0 text-nowrap">36.12 vs 37.01 </p>
                    </div>
                </div>
                <div className="echart-crm-statistics w-100 ms-2">
                    <ReactECharts option={options}/>
                </div>
            </div>
        </div>
    );
}

export default CurrencyCard