import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  render() {
    const { content } = this.props;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
          {content}
        </label>
        <div style={{ width: "80px" }} />
      </div>
    );
  }
}

export default Checkbox;
