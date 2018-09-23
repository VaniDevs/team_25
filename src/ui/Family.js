import React, { Component } from "react";
import Modal from "react-modal";
import CheckBoxList from "./CheckBoxList";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Family extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal_is_open: true,
      family_name: "",
      date_of_birth: "",
      baby_date_of_birth: "",
      phone_number: "",
      email: "",
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
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    const {
      family_name,
      date_of_birth,
      baby_date_of_birth,
      phone_number,
      email
    } = this.state;
    const family = {
      family_name,
      date_of_birth,
      baby_date_of_birth,
      phone_number,
      email
    };

    this.props.createFamily(family, "jjj");
    this.setState({
      modal_is_open: false,
      family_name: "",
      date_of_birth: "",
      baby_date_of_birth: "",
      phone_number: "",
      email: "",
      items: []
    });
  }

  render() {
    const list = ["item1", "item2"];
    return (
      <div>
        <Modal
          isOpen={this.state.modal_is_open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Family Info(Creating family form)
          </h2>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <form>
            <label>familyname</label>
            <input
              value={this.state.family_name}
              onChange={e => this.setState({ family_name: e.target.value })}
            />
            <label>Date of Birth</label>
            <input
              value={this.state.date_of_birth}
              onChange={e => this.setState({ date_of_birth: e.target.value })}
            />
            <label>Date of Birth of Baby</label>
            <input
              value={this.state.baby_date_of_birth}
              onChange={e =>
                this.setState({ baby_date_of_birth: e.target.value })
              }
            />
            <label>Phone Number</label>
            <input
              value={this.state.phone_number}
              onChange={e => this.setState({ phone_number: e.target.value })}
            />
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
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
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default connect(null, actions)(Family);
