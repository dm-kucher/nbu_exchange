import Flatpickr from 'react-flatpickr'
import "flatpickr/dist//themes/dark.css";
import {Ukrainian} from "flatpickr/dist/l10n/uk.js";
import {useDispatch, useSelector} from "react-redux";
import {setRatesDate} from "../../Data/Slices/RatesDateSlice";
// import {setRates} from "../../Data/Slices/RatesSlice";
// import RatesList from "../../Data/TempDataRates";
// import axios from "axios";


const DateInput = ({value, defaultValue, inputRef, ...props}) => {

    return (<input {...props} defaultValue={defaultValue} ref={inputRef}
                   className="form-control form-control-sm datetimepicker ps-3 flatpickr-input" type="text"
                   readOnly="readonly"/>);
};

const SelectDate = () => {

    const options = {
        maxDate: new Date(),
        mode: 'single',
        altInputClass: 'hide',
        dateFormat: 'd F Y',
        minDate: new Date('01-01-2018'),
        locale: {...Ukrainian, rangeSeparator: " - ",},
        rangeSeparator: " - ",
        defaultDate: useSelector(state => state.RatesDate.rDate)
    }

    const dispatch = useDispatch()

    const onChangeRatesDate = (selectedDate) => {
        dispatch(setRatesDate(selectedDate));
        // dispatch(setRates(RatesList));
        // axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230815&json`)
        //     .then(response => {
        //             dispatch(setRates(response.data))
        //         }
        //     )
    }

    return (
        <div className="row align-items-center g-3">
            <div className="col-auto">
                <h6 className="text-700 mb-0">Дані за період: </h6>
            </div>
            <div className="col-md-auto position-relative">
                <Flatpickr options={options}
                           onChange={(selectedDates, dateStr, instance) => {
                               onChangeRatesDate(selectedDates[0])
                           }}
                           render={
                               ({defaultValue, value, ...props}, ref) => {
                                   return <DateInput defaultValue={defaultValue} inputRef={ref}/>
                               }
                           }/>
            </div>
        </div>

    );
}

export default SelectDate