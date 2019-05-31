import React, { Component } from "react";
import { connect } from "react-redux";
import { getInterventions } from "../actions/InterventionAction";
import InterventionComponent from "../components/InterventionComponent";
import NavbarComponent from "../components/navBarComponent";

export class interventionContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getInterventions } = this.props;
    getInterventions();
  }

  render() {
    const { interventions } = this.props;
    return (
      <div>
        <NavbarComponent />
        <InterventionComponent interventions={interventions} />
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  interventions: state.incident.interventions_list
});
export default connect(
  mapStateToProps,
  { getInterventions }
)(interventionContainer);
