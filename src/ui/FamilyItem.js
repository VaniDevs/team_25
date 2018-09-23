import React, { Component } from 'react';
import '../style/family.css';
import Expand from 'react-expand-animated';

class FamilyItem extends Component {
	render() {
		return (
			<div className="family_item">
				<span className="family_item-child">{this.props.family_name}</span>
				<span className="family_item-child">{this.props.phone_number}</span>
				<span className="family_item-child">{this.props.status}</span>
			</div>
		);
	}
}

export default FamilyItem;
