import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
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
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        {content}
      </label>
    );
  }
}

export default Checkbox;
