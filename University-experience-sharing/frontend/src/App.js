import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
