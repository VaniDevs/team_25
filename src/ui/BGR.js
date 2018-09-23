import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class BGR extends Component {
  componentDidMount() {
    this.props.fetchAgencies();
  }

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
    console.log(this.props.agencies);
    return <div />;
  }
}
function mapStateToProps(state) {
  return {
    agencies: state.agencies
  };
}

export default connect(mapStateToProps, actions)(BGR);
