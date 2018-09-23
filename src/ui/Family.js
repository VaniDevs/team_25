import React, { Component } from 'react';
import Modal from 'react-modal';
import CheckBoxList from './CheckBoxList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

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

var items_default = [
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

class Family extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal_is_open: true,
			family_name: '',
			date_of_birth: '',
			baby_date_of_birth: '',
			phone_number: '',
			email: '',
			items: []
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modal_is_open: true });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	}

	closeModal() {
		const { family_name, date_of_birth, baby_date_of_birth, phone_number, email } = this.state;
		const family = {
			family_name,
			date_of_birth,
			baby_date_of_birth,
			phone_number,
			email
		};

		this.props.createFamily(family, 'jjj');
		this.setState({
			modal_is_open: false,
			family_name: '',
			date_of_birth: '',
			baby_date_of_birth: '',
			phone_number: '',
			email: '',
			items: []
		});
	}

	render() {
		const list = [ 'item1', 'item2' ];
		return (
			<div>
				<Modal
					isOpen={this.state.modal_is_open}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<h2 ref={(subtitle) => (this.subtitle = subtitle)}>Family Info(Creating family form)</h2>

					<form>
						<label>familyname</label>
						<input
							value={this.state.family_name}
							onChange={(e) => this.setState({ family_name: e.target.value })}
						/>
						<label>Date of Birth</label>
						<input
							value={this.state.date_of_birth}
							onChange={(e) => this.setState({ date_of_birth: e.target.value })}
						/>
						<label>Date of Birth of Baby</label>
						<input
							value={this.state.baby_date_of_birth}
							onChange={(e) => this.setState({ baby_date_of_birth: e.target.value })}
						/>
						<label>Phone Number</label>
						<input
							value={this.state.phone_number}
							onChange={(e) => this.setState({ phone_number: e.target.value })}
						/>
						<label>Email</label>
						<input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
						<CheckBoxList contents={list} />
					</form>
					<button onClick={this.closeModal}>save</button>
				</Modal>
			</div>
		);
	}
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

export default connect(null, actions)(Family);
