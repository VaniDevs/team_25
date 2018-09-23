import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../style/login.css';

class Login extends Component {
	login(name) {
		this.props.login(name);
	}

	render() {
		return (
			<div className="login_box">
				<select className="login_select login">
					<option value="agency1">Agency 1</option>
					<option value="agency2">Agency 2</option>
				</select>
				<input className="login_input login" type="password" placeholder="Password" />

				<button
					className="login_button login"
					onClick={() => {
						this.login('agency1');
					}}
				>
					Login
				</button>
			</div>
		);
	}
}

export default connect(null, actions)(Login);
