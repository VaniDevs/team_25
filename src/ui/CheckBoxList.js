import React, { Component } from "react";
import CheckBox from "./CheckBox";

class CheckBoxList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contents } = this.props;
    const listItems = contents.map(d => <CheckBox key={d} content={d} />);

    return <div style={{ display: "flex" }}>{listItems}</div>;
  }
}

export default CheckBoxList;
