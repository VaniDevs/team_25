import React, { Component } from 'react';
import '../style/family.css';
import Expand from 'react-expand-animated';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

const Arrow = styled(
	posed.button({
		open: { rotate: 180, transition: (props) => tween({ ...props, duration: 200 }) },
		close: { rotate: 0, transition: (props) => tween({ ...props, duration: 200 }) }
	})
)`
	width: 0;
	height: 0;
	outline: none;
	background-color: white;
	border-style: solid;
	cursor:pointer;
	border-width: 20px 15px 0 15px;
	border-color: #000000 transparent transparent transparent;
	transition: all 300ms;
	&:hover {
		transform:scale(1.5);
	}
`;

class FamilyItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			arrow_hover: false
		};
	}

	render() {
		return (
			<div>
				<div className="family_item">
					<span className="family_item-child">{this.props.family_name}</span>
					<span className="family_item-child">{this.props.phone_number}</span>
					<span className="family_item-child">{this.props.status}</span>
					<Arrow
						pose={this.state.open ? 'open' : 'close'}
						onClick={() => this.setState({ open: !this.state.open })}
					/>
				</div>
				<Expand open={this.state.open} duration={200}>
					<h2>{this.props.family_name}</h2>
				</Expand>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		agency_id: state.id
	};
}

export default connect(mapStateToProps, actions)(FamilyItem);
