import React from "react";
class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 60,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let currentCount = this.state.counter;
      this.setState({
        counter: currentCount - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter && this.state.counter === 0) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
  render() {
    return (
      <div className="text-center mt-10">
        <p>{this.state.counter}</p>
        <div className="mt-5">
          <button className="py-2 px-6 bg-blue-400 text-white rounded-lg mr-5">
            start
          </button>
          <button className="py-2 px-6 bg-red-400 text-white rounded-lg">
            end
          </button>
        </div>
      </div>
    );
  }
}
export default CounterClass;
