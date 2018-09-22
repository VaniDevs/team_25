import React, { Component } from "react";
import CheckBox from "./CheckBox";

class CheckBoxList extends Component {
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
    const { contents } = this.props;
    //const contents = [{ name: "test1" }, { name: "test2" }];
    const listItems = contents.map(d => <CheckBox content={d} />);

    return listItems;
  }
}

export default CheckBoxList;
