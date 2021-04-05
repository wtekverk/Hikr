import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please fill in your info bellow</h3>
      <br />
      <form className="container">
        <div className="row">
          <div className="col">
            <input
              for="firstName"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              for="lastName"
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last name"
            />
          </div>
        </div>

        <br />

        <div className="form-group row">
          <label for="Email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="Password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="profilePict" />
          <label class="custom-file-label" for="profilePict">
            Choose Photo for Profile
          </label>
        </div>
        <div class="form-group">
          <label for="bioText">Tell us a little about yourself! </label>
          <textarea class="form-control" id="bioText" rows="3"></textarea>
        </div>

        <br />

        <div class="col-sm-10">
          <button type="Submit" id="finishRegistration" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
