import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Made with ♥ by Calvin Ting</h2>
      </Wrapper>
    );
  }
}

export default Footer;

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: black;
  height: 100%;
  h2 {
    padding-top: 10px;
    font-size: 18px;
    color: white;
    vertical-align: center;
  }
`;
