import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar className="toolBar">
            <Typography variant="title" color="inherit">
              Home
            </Typography>
            <div>
              <Button color="inherit">USD Currency</Button>
              <Button color="inherit">BITCOIN Currency</Button>
              <Button color="inherit">Contact</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
