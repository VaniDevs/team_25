import React, { Component } from 'react';

class Login extends Component {
	login(name) {}

	render() {
		return (
			<div>
				<button onClick={this.login('agency1')}>Agency 1</button>
				<button onClick={this.login('agency2')}>Agency 2</button>
			</div>
		);
	}
}

export default Login;
