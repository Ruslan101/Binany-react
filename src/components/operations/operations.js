import React from 'react';
import moment from 'moment';
import calendar from '../../img/calendar.png';
import down_currency from '../../img/down_currency.png';
import InputCalendar from './input.js';

export default class Operations extends React.Component {
    constructor(props) {
        super(props);

        this.nowDate = moment().format("YYYY MMMM Do");

        this.state = { fromDate: this.nowDate, toDate: this.nowDate, moment: moment() };
    }
    handleSelect = (e, i) => {console.log('saved', this.state.moment.format('llll')); return 0;
        if(i == 0)
            this.setState({ fromDate: e.target.value });
        else
            this.setState({ toDate: e.target.value });
    }
    render() {
        return(
            <div className="container_operations">
                <div className="operations_left">
                    <div>
                        <p id="operations">Операции</p>
                    </div>
                    <div className="container_op_bottom">
                        <div className="periuds">
                            <p>Периуд</p>
                            <div className="calendars">
                                <div>
                                    <InputCalendar /> 
                                    <p>{this.state.fromDate}</p>
                                </div>
                                <p>–</p>
                                <div>
                                <input type="date" src={calendar} onChange={(e) => this.onDateSelect(e, 1)} alt="calendar" />
                                    <p>{this.state.toDate}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="type_operations">
                                <p>Тип операции</p>
                                <div>
                                    <p>Все операции</p>
                                    <img src={down_currency} alt="down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}