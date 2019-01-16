import React, { Component } from 'react';
import moment from 'moment'
import './App.css';
import { CalendarView } from "./components/CalenderView"
import { Button } from "@material-ui/core"

const schedule = {"2019-03-01":[{"title":"Test Title","description":"Test Description"}],"2019-03-02":[{"title":"Test Title","description":"Test Description"}],"2019-03-03":[{"title":"Test Title","description":"Test Description"}],"2019-03-04":[{"title":"Test Title","description":"Test Description"}],"2019-03-05":[{"title":"Test Title","description":"Test Description"}],"2019-03-06":[{"title":"Test Title","description":"Test Description"}],"2019-03-07":[{"title":"Test Title","description":"Test Description"}],"2019-03-08":[{"title":"Test Title","description":"Test Description"}],"2019-03-09":[{"title":"Test Title","description":"Test Description"}],"2019-03-10":[{"title":"Test Title","description":"Test Description"}],"2019-03-11":[{"title":"Test Title","description":"Test Description"}],"2019-03-12":[{"title":"Test Title","description":"Test Description"}],"2019-03-13":[{"title":"Test Title","description":"Test Description"}],"2019-03-14":[{"title":"Test Title","description":"Test Description"}],"2019-03-15":[{"title":"Test Title","description":"Test Description"}],"2019-03-16":[{"title":"Test Title","description":"Test Description"}],"2019-03-17":[{"title":"Test Title","description":"Test Description"}],"2019-03-18":[{"title":"Test Title","description":"Test Description"}],"2019-03-19":[{"title":"Test Title","description":"Test Description"}],"2019-03-20":[{"title":"Test Title","description":"Test Description"}],"2019-03-21":[{"title":"Test Title","description":"Test Description"}],"2019-03-22":[{"title":"Test Title","description":"Test Description"}],"2019-03-23":[{"title":"Test Title","description":"Test Description"}],"2019-03-24":[{"title":"Test Title","description":"Test Description"}],"2019-03-25":[{"title":"Test Title","description":"Test Description"}],"2019-03-26":[{"title":"Test Title","description":"Test Description"}],"2019-03-27":[{"title":"Test Title","description":"Test Description"}],"2019-03-28":[{"title":"Test Title","description":"Test Description"}],"2019-03-29":[{"title":"Test Title","description":"Test Description"}],"2019-03-30":[{"title":"Test Title","description":"Test Description"}],"2019-03-31":[{"title":"Test Title","description":"Test Description"}]};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained">Hi</Button>
        <CalendarView
          currentMonth={moment().add(2, 'M')}
          handleMonthChange={console.log}
          onDayClick={console.log}
          schedule={schedule}
        />
      </div>
    );
  }
}

export default App;
