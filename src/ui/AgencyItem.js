import React, { Component } from "react";
import "../style/family.css";
import Expand from "react-expand-animated";
import FamilyItem from "./FamilyItem";
import FlipMove from "react-flip-move";

class AgencyItem extends Component {
  renderFamilies = families => {
    if (families) {
      return families.map(f => {
        return (
          <FamilyItem
            key={f.name + f.date_of_birth + f.baby_date_of_birth}
            family_name={f.name}
            phone_number={f.phone_number}
            status={f.status}
            family={f}
          />
        );
      });
    } else return false;
  };
  render() {
    const families = this.props;
    return (
      <div className="agency_item">
        <span className="agency_item-child">{this.props.name}</span>
        <FlipMove>
          {this.renderFamilies(this.props.families) || <div>Loading...</div>}
        </FlipMove>
      </div>
    );
  }
}

export default AgencyItem;
