import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const Profile = () => {
  const { user } = useAuth0();
  const { name, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

// export default Profile;
export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
