import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, searchUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = (e) => {
    if (text === "") {
      setAlert("Please enter something", "error", "Alert");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onClear = (e) => {
    githubContext.clearUsers();
  };

  return (
    <div className="container">
      <div className="col-auto">
        <form>
          <div className="form-group">
            <label>Search Users</label>
            <input
              type="text"
              className="form-control"
              id="search"
              aria-describedby="searchHelp"
              placeholder="Search.."
              value={text}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="col-lg-3 mt-4 mb-4">
        <button onClick={onSearch} className="btn btn-outline-primary">
          Search
        </button>
        {users.length > 0 && (
          <button onClick={onClear} className="btn btn-outline-danger ml-3">
            Clear
          </button>
        )}
        {users < 1 && <div className="card-body"></div>}
      </div>
    </div>
  );
};

export default Search;
