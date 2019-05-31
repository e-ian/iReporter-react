import React, { Component } from "react";
import { connect } from "react-redux";
import CreateIntervention from "../components/createInterventionComponent";
import { createActions } from "../actions/createInterventionActions";
import NavbarComponent from "../components/navBarComponent";

class CreateInterventionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidentType: "",
      location: "",
      status: "",
      image: "",
      Comment: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isRedirecting === true) {
      const { history } = this.props;

      history.push("/interventions");
    }
  }
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  OnSubmit = event => {
    event.preventDefault();

    const { incidentType, location, status, image, Comment } = this.state;

    const data = {
      incident_type: incidentType,
      location: location,
      status: status,
      image: image,
      comment: Comment
    };

    this.props.createActions(data);
  };

  render() {
    const { incidentType, location, status, image, Comment } = this.state;
    return (
      <div>
        <NavbarComponent />
        <CreateIntervention
          onChange={this.onChange}
          incidentType={incidentType}
          location={location}
          status={status}
          image={image}
          Comment={Comment}
          OnSubmit={this.OnSubmit}
        />
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  isRedirecting: state.create.isRedirecting
});
// export default CreateInterventionContainer;
export default connect(
  mapStateToProps,
  { createActions }
)(CreateInterventionContainer);
