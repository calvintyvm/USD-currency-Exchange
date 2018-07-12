import React from "react";
import styled from "styled-components";

const Title = () => (
  <TitleWrapper>
    <h1>USD Currency Exchange</h1>
    <h2>
      Input your desired amount to convert to any of these currencies below!
    </h2>
  </TitleWrapper>
);

export default Title;

const TitleWrapper = styled.div`
  height: 200px;
  width: 80%;
  margin: 0 auto;
  h1 {
    margin-top: 150px;
  }
`;
