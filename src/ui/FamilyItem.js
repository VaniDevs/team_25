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
const Item = styled(
	posed.div({
		chosen: { backgroundColor: '#42c2f4', scale: 1.1 },
		not_chosen: { backgroundColor: '#fff', scale: 1 }
	})
)`
	box-shadow: 0 2px 10px black;
	padding:15px;
	margin:5px;
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size:16px;
	border-radius:100px;
	display:inline-block;
`;

let items_default = [
	{ name: 'Food', chosen: false },
	{ name: 'Toy', chosen: false },
	{ name: 'Bassinet', chosen: false },
	{ name: 'Sheet', chosen: false },
	{ name: 'Diapers', chosen: false },
	{ name: 'Potties', chosen: false },
	{ name: 'Seats', chosen: false },
	{ name: 'Training Pants', chosen: false },
	{ name: 'Diaper Bags', chosen: false },
	{ name: 'Pacifers', chosen: false },
	{ name: 'Wipe Warmers', chosen: false },
	{ name: 'Wipes', chosen: false },
	{ name: 'Travel Strolers', chosen: false },
	{ name: 'Double & Triple Strollers', chosen: false },
	{ name: 'Standard Strollers', chosen: false },
	{ name: 'Umbrella Strollers', chosen: false },
	{ name: 'Car Seats', chosen: false },
	{ name: 'Car Toys', chosen: false },
	{ name: 'Carriers', chosen: false },
	{ name: 'Boy Clothing', chosen: false },
	{ name: 'Girl Clothing', chosen: false },
	{ name: 'Baby Skin Care', chosen: false },
	{ name: 'Baby Oil', chosen: false },
	{ name: 'Baby Lotion', chosen: false },
	{ name: 'Shampoos', chosen: false },
	{ name: 'Towels', chosen: false },
	{ name: 'Bubble Bath', chosen: false },
	{ name: 'Maternity Clothing', chosen: false },
	{ name: 'Beds', chosen: false }
];

class FamilyItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			items: items_default
		};
		this.renderList = this.renderList.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
		this.updateItem = this.updateItem.bind(this);
	}

	componentDidMount() {
		const details = this.props.family.details;
		for (let i = 0; i < details.length; i++) {
			for (let j = 0; j < this.state.items.length; j++) {
				if (details[i] == items_default[j].name) {
					items_default[j].chosen = true;
				}
			}
		}
		this.setState({ items: items_default });
	}

	toggleItem(name) {
		for (let i = 0; i < items_default.length; i++) {
			if (items_default[i].name === name) {
				items_default[i].chosen = !items_default[i].chosen;
				console.log(name);
			}
		}
		this.setState({ items: items_default });
		//console.log(this.state.items);
	}

	renderList() {
		return this.state.items.map((item) => {
			return (
				<Item
					key={item.name + this.props.name + this.props.phone}
					pose={item.chosen ? 'chosen' : 'not_chosen'}
					onClick={() => {
						this.toggleItem(item.name);
					}}
				>
					{item.name}
				</Item>
			);
		});
	}

	updateItem(){
		let details = [];
		for(let i = 0; i < this.state.items.length; i++){
			if(this.state.items[i].chosen){
				details.push(this.state.items[i].name);
			}
		}
		let f = this.props.family;
		f.details = details;
		f.agency = 1;
		this.props.updateFamily(f,this.props.agency_id);
	}

	render() {
		console.log(this.props.family);
		return (
			<div>
				<div className="family_item">
					<span className="family_item-child">{this.props.name}</span>
					<span className="family_item-child">{this.props.phone}</span>
					<span className="family_item-child">{this.props.state}</span>
					<Arrow
						pose={this.state.open ? 'open' : 'close'}
						onClick={() => this.setState({ open: !this.state.open })}
					/>
				</div>
				<Expand open={this.state.open} duration={200}>
					<div className="family_item-expansion">{this.renderList()}</div>

					<button onClick={this.updateItem} className="family_item-button">
						Update
					</button>
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
