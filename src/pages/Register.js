import React from 'react'

const Register = () => {
    return (<div>

        <h3>Please fill in your info bellow</h3>
        <br />
        <form className="container" >
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
  </div>

  <br />

  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile" />
  <label class="custom-file-label" for="customFile">Choose Photo for Profile</label>
</div>

<br />

  <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>

  </form>


    </div>)
    ;
}


export default Register;