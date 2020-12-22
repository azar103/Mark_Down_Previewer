import React from "react";
import styled from "styled-components";
const FOOTER = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const LINK = styled.a`
  color: black;
  font-weight: bold;
`;
const Footer = () => {
  return (
    <FOOTER>
      By{" "}
      <LINK href="https://github.com/azar103?tab=repositories" target="_blank">
        Anis Zarrouk
      </LINK>
    </FOOTER>
  );
};

export default Footer;
