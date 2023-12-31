import Flatpickr from 'react-flatpickr'
import "flatpickr/dist//themes/dark.css";
import {Ukrainian} from "flatpickr/dist/l10n/uk.js";

import {useDispatch, useSelector} from "react-redux";
import {setPeriod} from "../../../../Data/Slices/CurrencyHistory";

const DateInput = ({value, defaultValue, inputRef, ...props}) => {

    return (<input {...props} defaultValue={defaultValue} ref={inputRef}
                   className="form-control form-control-sm datetimepicker ps-3 flatpickr-input" type="text"
                   readOnly="readonly"/>);
};

const SelectDate = () => {

    const options = {
        maxDate: new Date(),
        mode: 'range',
        altInputClass: 'hide',
        dateFormat: 'd M Y',
        minDate: new Date('01-01-2000'),
        locale: {...Ukrainian, rangeSeparator: " - ",},
        rangeSeparator: " - ",
        defaultDate: useSelector(state => state.CurrencyHistory.period)
    }

    const dispatch = useDispatch()

    const onChangePeriod = (selectedDates) => {
        if (selectedDates instanceof Array && selectedDates.length === 2) {
            dispatch(setPeriod(selectedDates));
        }
    }

    return (
        <div className="row align-items-center g-3">
            <div className="col-auto">
                <h6 className="text-700 mb-0">Дані за період: </h6>
            </div>
            <div className="col-md-7 position-relative">
                <Flatpickr options={options}
                           onChange={(selectedDates, dateStr, instance) => {
                               onChangePeriod(selectedDates)
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