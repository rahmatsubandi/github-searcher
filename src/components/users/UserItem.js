import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <div className="card-body">
        <img
          className="rounded-circle img-fluid img-responsive"
          style={{ width: 150 }}
          src={avatar_url}
          alt="avatar_image"
        />
        <h4>{login}</h4>
        <hr />
        <a
          component={Link}
          href={`/users/${login}`}
          className="btn btn-outline-info"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
