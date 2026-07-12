import React from 'react';

class DateTimeDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    // Update the date and time every second
    this.interval = setInterval(() => {
      this.setState({
        currentDate: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Dubai' //timezone to Dubai
    };

    const formattedDate = this.state.currentDate.toLocaleString('en-IN', options);

    return (
      <>
        {formattedDate}
      </>
    );
  }
}

export default DateTimeDisplay;
