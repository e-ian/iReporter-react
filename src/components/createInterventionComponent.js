import React from "react";

export default function CreateIntervention(props) {
  const {
    onChange,
    incidentType,
    location,
    status,
    image,
    Comment,
    OnSubmit
  } = props;

  return (
    <div>
      <div className="row">
        <div className="col col-lg-4" />
        <div className="col col-lg-4">
          <form method="post" onSubmit={OnSubmit}>
            <h3>Create Intervention</h3>
            <div className="form-group">
              <label>Incident(intervention)</label>
              <input
                type="text"
                required
                name="incidentType"
                className="form-control"
                value={incidentType}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={location}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Status(draft)</label>
              <input
                type="text"
                required
                name="status"
                className="form-control"
                value={status}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="text"
                name="image"
                className="form-control"
                value={image}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Comment</label>
              <input
                type="text"
                name="Comment"
                className="form-control"
                value={Comment}
                onChange={onChange}
              />
            </div>
            <input
              type="submit"
              className="btn btn-success btn-lg"
              value="create"
            />
          </form>
        </div>
        <div className="col col-lg-4" />
      </div>
    </div>
  );
}
