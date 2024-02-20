import React from "react";

//Functional based component

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            //Never ever update state value directly, count++ -- this is wrong
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Location: Noida</h2>
        <h3>Insta: Shakti</h3>
      </div>
    );
  }
}

export default UserClass;
