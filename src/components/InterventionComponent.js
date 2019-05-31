import React, { Component } from "react";
import "../styles/incidents.scss";

class InterventionComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { interventions } = this.props;
    const Intervention = interventions.map(incidents => (
      <tr>
        <td>{incidents.comment}</td>
        <td>{incidents.created_by}</td>
        <td>{incidents.created_on}</td>
        <td>{incidents.image}</td>
        <td>{incidents.incident_type}</td>
        <td>{incidents.intervention_id}</td>
        <td>{incidents.location}</td>
        <td>{incidents.status}</td>
      </tr>
    ));
    return (
      <div className="row">
        <div className="col col-lg-1" />
        <div className="col col-lg-10">
          <h2>Interventions</h2>
          <table id="incidentTable">
            <tr className="header">
              <th style={{ width: "10%" }}>Comment</th>
              <th style={{ width: "10%" }}>CreatedBy</th>
              <th style={{ width: "30%" }}>CreatedOn</th>
              <th style={{ width: "10%" }}>Image</th>
              <th style={{ width: "10%" }}>IncidentType</th>
              <th style={{ width: "10%" }}>InterventionId</th>
              <th style={{ width: "15%" }}>Location</th>
              <th style={{ width: "10%" }}>Status</th>
            </tr>
            {Intervention}
          </table>
        </div>
        <div className="col col-lg-1" />
      </div>
    );
  }
}
export default InterventionComponent;
