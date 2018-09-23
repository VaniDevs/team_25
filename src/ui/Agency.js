import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import * as actions from "../actions";
import CheckBoxList from "./CheckBoxList";
import FamilyItem from "./FamilyItem";
import FlipMove from "react-flip-move";
import {
  Badge,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Agency extends Component {
  componentDidMount() {
    this.props.fetchFamilies("id");
    Modal.setAppElement("body");
  }

  constructor(props) {
    super(props);

    this.state = {
      modal_is_open: false,
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
    this.renderList = this.renderList.bind(this);
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
    this.setState({ modal_is_open: false });
  }
  renderList() {
    if (this.props.families) {
      return this.props.families.families.map(f => {
        return (
          <FamilyItem
            key={f.name + f.date_of_birth + f.baby_date_of_birth}
            family_name={f.name}
            phone_number={f.phone_number}
            status={f.status}
            family={f}
          />
        );
      });
    } else return false;
  }
  render() {
    //console.log(this.props.families);
    const list1 = ["item1", "item2", "item3", "item4", "item5", "item6"];

    return (
      <div>
        <FlipMove>{this.renderList() || <div>Loading...</div>}</FlipMove>
        <button onClick={this.openModal}> create </button>
        <Modal
          isOpen={this.state.modal_is_open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 ref={subtitle => (this.subtitle = subtitle)}>
            Family Info(Creating family form)
          </h3>

          <Form>
            <div style={{ display: "flex" }}>
              <FormGroup>
                <Label for="exampleEmail">Family Name</Label>
                <Input
                  value={this.state.family_name}
                  onChange={e => this.setState({ family_name: e.target.value })}
                />
              </FormGroup>
              <div style={{ width: "15%" }} />
              <FormGroup>
                <Label for="examplePassword">Date of Birth</Label>
                <Input
                  value={this.state.date_of_birth}
                  onChange={e =>
                    this.setState({ date_of_birth: e.target.value })
                  }
                />
              </FormGroup>
            </div>
            <div style={{ display: "flex" }}>
              <FormGroup>
                <Label for="examplePassword">Date of Birth for Baby</Label>
                <Input
                  value={this.state.baby_date_of_birth}
                  onChange={e =>
                    this.setState({ baby_date_of_birth: e.target.value })
                  }
                />
              </FormGroup>
              <div style={{ width: "15%" }} />
              <FormGroup>
                <Label for="examplePassword">Phone Number</Label>
                <Input
                  value={this.state.phone_number}
                  onChange={e =>
                    this.setState({ phone_number: e.target.value })
                  }
                />
              </FormGroup>
            </div>
            <div style={{ width: "95%" }}>
              <FormGroup>
                <Label for="examplePassword">Email</Label>
                <Input
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
            </div>
            {/* <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup> */}
            <CheckBoxList contents={list1} />
          </Form>
          <Button
            style={{
              position: "relative",
              left: "40%"
            }}
            onClick={this.closeModal}
          >
            Submit
          </Button>
          {/* <form>
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
          </form> */}
          {/* <button onClick={this.closeModal}>save</button> */}
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

function mapStateToProps(state) {
  return {
    families: state.families
  };
}

export default connect(mapStateToProps, actions)(Agency);
