import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import FlipMove from "react-flip-move";
import AgencyItem from "./AgencyItem";

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

  renderList() {
    if (this.props.agencies) {
      return this.props.agencies.agencies.map(f => {
        return <AgencyItem key={f.name} name={f.name} families={f.families} />;
      });
    } else return false;
  }

  render() {
    //console.log(this.props.agencies);
    const data = this.props.agencies;

    //const listItems = data.map(d => <div> d.name </div>);

    return (
      <div>
        <FlipMove>{this.renderList() || <div>Loading...</div>}</FlipMove>
        {/* <div>agency name1</div>

        <div>familyname1</div>
        <div>familyphone</div>
        <div>familystatus</div>
        <button>expand</button>
        <div>item1</div>
        <div>item2</div>

        <div>familyname2</div>
        <div>familyphone</div>
        <div>familystatus</div>
        <button>expand</button>
        <div>item1</div>
        <div>item2</div>

        <div>agency name2</div>

        <div>familyname1</div>
        <div>familyphone</div>
        <div>familystatus</div>
        <button>expand</button>
        <div>item1</div>
        <div>item2</div>

        <div>familyname2</div>
        <div>familyphone</div>
        <div>familystatus</div>
        <button>expand</button>
        <div>item1</div>
        <div>item2</div> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    agencies: state.agencies
  };
}

const getAgencyFamilies = (state, name) => {
  const agency = state.agencies.find(item => {
    return item.name === name;
  });
  return (agency && agency.families) || [];
};

export default connect(mapStateToProps, actions)(BGR);
