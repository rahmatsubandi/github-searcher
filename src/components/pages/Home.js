import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-center mt-5">
            <h2 className="mb-3">Search Github</h2>
            <a className="btn btn-outline-dark" component={Link} href="/users">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
