import React, { Component } from 'react';
import '../style/family.css';
import Expand from 'react-expand-animated';

class FamilyItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	render() {
		return (
			<div>
				<div className="family_item">
					<span className="family_item-child">{this.props.family_name}</span>
					<span className="family_item-child">{this.props.phone_number}</span>
					<span className="family_item-child">{this.props.status}</span>
					<button className="arrow-down" onClick={() => this.setState({ open: !this.state.open })} />
				</div>
				<Expand open={this.state.open}>
					<h2>this.props.family_name</h2>
				</Expand>
			</div>
		);
	}
}

export default FamilyItem;
