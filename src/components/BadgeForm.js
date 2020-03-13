import React from "react";

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Button was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            type="submit"
            onClick={this.props.onChange}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
