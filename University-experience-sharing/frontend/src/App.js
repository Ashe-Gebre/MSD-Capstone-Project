import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import { Auth } from "aws-amplify";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <div>
      <button
        onClick={() => Auth.federatedSignIn({ provider: "Google" })}
      ></button>
      <Container maxWidth="lg">
        <Navbar />
        <div style={{ width: "5px", marginLeft: "auto", marginRight: 170 }}>
          <AmplifySignOut />{" "}
        </div>
        <Home />
      </Container>
    </div>
  );
};

export default withAuthenticator(App);
