import React from 'react';

import styled from "styled-components";

const StyledContentDiv = styled.p`
  text-align: center;
  font-size: 30px;
`

const Content = () => {
    return (
        <StyledContentDiv>
            Hello content!
        </StyledContentDiv>
    );
};

export default Content;