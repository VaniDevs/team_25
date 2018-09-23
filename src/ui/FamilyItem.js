import React, { Component } from 'react';

class FamilyItem extends Component {
	render() {
		return (
			<div>
				<span>{this.props.family_name}</span>
				<span>{this.props.phone_number}</span>
			</div>
		);
	}
}
