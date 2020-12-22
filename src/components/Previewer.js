import React from "react";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import "./Previewer.css";
const PREVIEWERCONTAINER = styled.div`
  max-width: 787px;
  margin: 0 auto;
  text-align: left;
  height: auto;
  box-shadow: -5px 9px 13px -6px rgba(0, 0, 0, 0.75);
  margin-top: 30px;
`;
const PREVIEWERHEADER = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 27px;
  background-color: darkgray;
  padding-top: 5px;
  font-weight: bold;
  font-size: 20px;
`;
const TITLEHEADER = styled.div`
  margin-left: 10px;
  display: flex;
`;
const SPAN = styled.span`
  margin-left: 5px;
`;

const Previewer = ({ text }) => {
  return (
    <PREVIEWERCONTAINER>
      <PREVIEWERHEADER>
        <TITLEHEADER>
          <i className="fa fa-free-code-camp"></i> <SPAN>Previewer</SPAN>
        </TITLEHEADER>
      </PREVIEWERHEADER>
      <ReactMarkDown source={text} />
    </PREVIEWERCONTAINER>
  );
};

export default Previewer;
