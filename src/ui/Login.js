import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
	login(name) {
		this.props.login(name);
	}

	render() {
		return (
			<div>
				<select>
					<option value="agency1">Agency 1</option>
					<option value="agency2">Agency 2</option>
				</select>
				<input type="password" placeholder="Password" />
				<button onClick={() => this.login('agency1')}>Login</button>
			</div>
		);
	}
}

export default connect(null, actions)(Login);
