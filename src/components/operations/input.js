import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export default class InputCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { startDate: moment(), endDate: moment().endOf('week') }
    }
    handleDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate }, this.props.dataChange({ startDate: startDate, endDate: endDate }));
    }
    render() {
        return(
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.handleDatesChange({ startDate, endDate })} // PropTypes.func.isRequired,
            />
        ); //focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        //onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    }

}  