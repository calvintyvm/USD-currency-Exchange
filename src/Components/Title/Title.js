import React from "react";
import styled from "styled-components";

const Title = () => (
  <TitleWrapper>
    <h1>USD Currency Exchange</h1>
  </TitleWrapper>
);

export default Title;

const TitleWrapper = styled.div`
  height: 200px;
  h1 {
    margin-top: 150px;
  }
`;
