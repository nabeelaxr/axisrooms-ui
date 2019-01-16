import React from "react";
import moment from "moment";
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './styles.css'

export class CalendarView extends React.Component {
  state = {
    currentMonth: new Date(this.props.currentMonth)
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{moment(this.state.currentMonth).format(dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }


  renderDays() {
    const days = [];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    weekdays.forEach((day, i) => (
      days.push(
        <div className="col col-center" key={i}>
          {day}
        </div>
      )
    ))

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth } = this.state;
    const { schedule } = this.props;
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd =  moment(monthStart).endOf('month');
    const startDate = moment(monthStart).startOf('week');
    const endDate = moment(monthEnd).endOf('week');

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const scheduleAvailable = schedule && schedule[day.format('YYYY-MM-DD')] && schedule[day.format('YYYY-MM-DD')].length > 0;
        days.push(
          <div
            className={`col cell ${
              !monthStart.isSame(day, 'month')
                ? "disabled"
                : ""
              }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            {
              scheduleAvailable && schedule[day.format('YYYY-MM-DD')].map((item, i) => (
                day.isSameOrAfter(moment(), 'd') && (
                  <Button
                    key={i}
                    className="col-btn"
                    variant="outlined"
                    onClick={() => this.props.onDayClick(item)}
                    disabled={!monthStart.isSame(day, 'month') || day.isSameOrBefore(moment(item.time, 'hmm'), 'h')}
                  >
                    <Typography>
                      <b>{item.title}</b>
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                  </Button>
                )
              ))
            }
          </div>
        );
        day = moment(day).add(1, 'd');
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  nextMonth = () => {
    let currentMonth = moment(this.state.currentMonth).add(1, 'month')
    this.setState({ currentMonth });
    this.props.handleMonthChange(currentMonth)
  };

  prevMonth = () => {
    let currentMonth = moment(this.state.currentMonth).subtract(1, 'month');
    this.setState({ currentMonth });
    this.props.handleMonthChange(currentMonth)
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

CalendarView.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  schedule: PropTypes.object.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  onDayClick: PropTypes.func.isRequired
}

export default CalendarView;
