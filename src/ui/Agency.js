import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Agency extends Component {
	componentDidMount() {
		this.props.fetchFamilies('id');
	}

	render() {
		console.log(this.props.families);
		return <div>Agency</div>;
	}
}

function mapStateToProps(state) {
	return {
		families: state.families
	};
}

export default connect(mapStateToProps, actions)(Agency);
