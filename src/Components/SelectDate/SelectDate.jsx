import Flatpickr from 'react-flatpickr'
import "flatpickr/dist//themes/dark.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js";

const options = {
    maxDate: new Date(),
    mode: 'range',
    altInputClass: 'hide',
    dateFormat: 'd M y',
    minDate: new Date('01-01-2018'),
    locale: {...Ukrainian, rangeSeparator: " - ",},
    rangeSeparator: " - ",
}

const DateInput = ({value, defaultValue, inputRef, ...props}) => {
    return (<input {...props} defaultValue={defaultValue} ref={inputRef}
               className="form-control form-control-sm datetimepicker ps-3 flatpickr-input" type="text"
               readOnly="readonly"/>);
};

const SelectDate = () => {

    return (
        <div className="row align-items-center g-3">
            <div className="col-auto">
                <h6 className="text-700 mb-0">Дані за період: </h6>
            </div>
            <div className="col-md-auto position-relative">
                <Flatpickr options={options}
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