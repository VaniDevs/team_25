import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Agency extends Component {
	componentDidMount() {
		this.props.fetchFamilies('id');
		console.log(this.props.families);
	}

	render() {
		return <div>Agency</div>;
	}
}

function mapStateToProps(state) {
	return {
		families: state.families
	};
}

export default connect(mapStateToProps, actions)(Agency);
