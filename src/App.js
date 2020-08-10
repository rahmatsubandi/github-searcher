import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import theme from "./components/layout/Theme";
import Header from "./components/layout/Header";
import Alert from "./components/layout/Alert";
import GitFinder from "./components/pages/GitFinder";
import Home from "./components/pages/Home";
import Container from "@material-ui/core/Container";
import User from "./components/users/User";
const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GithubState>
        <AlertState>
          <Router>
            <Header
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
            <Container maxWidth="sm">
              <Alert />
            </Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={GitFinder} />
              <Route exact path="/users/:login" component={User} />
              <Route component={() => <div>Not Found</div>} />
            </Switch>
          </Router>
        </AlertState>
      </GithubState>
    </ThemeProvider>
  );
};

export default App;
