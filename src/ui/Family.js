import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Family extends Component {
	constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

	render() {


		return(
		<div>
			<Modal
			isOpen={this.state.modalIsOpen}
			onAfterOpen={this.afterOpenModal}
			onRequestClose={this.closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>

			<h2 ref={subtitle => this.subtitle = subtitle}>Family Info(Creating family form)</h2>


			<form>
				<h10>familyname</h10>
				<input />
				<h10>Date of Birth</h10>
				<input />
				<h10>Date of Birth of Baby</h10>
				<input />
				<h10>Phone Number</h10>
				<input />
				<h10>Email</h10>
				<input />

			</form>
			<button onClick={this.closeModal}>save</button>
		</Modal>
			</div>
  )
}
	}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default Family;
