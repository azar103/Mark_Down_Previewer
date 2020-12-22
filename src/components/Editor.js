import React from "react";
import styled from "styled-components";

const EDITORCONTAINER = styled.div`
  max-width: 597px;
  margin: 0 auto;
  text-align: left;
  height: 295px;
  box-shadow: -5px 9px 13px -6px rgba(0, 0, 0, 0.75);
`;
const EDITORHEADER = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 27px;
  background-color: darkgray;
  padding-top: 5px;
  font-weight: bold;
  font-size: 20px;
`;
const TEXTAREA = styled.textarea`
  width: 594px;
  height: 260px;
  outline: none;
  resize: none;
`;
const TITLEHEADER = styled.div`
  margin-left: 10px;
  display: flex;
`;
const SPAN = styled.span`
  margin-left: 5px;
`;

const Editor = ({ text, onChange }) => {
  return (
    <EDITORCONTAINER>
      <EDITORHEADER>
        <TITLEHEADER>
          <i className="fa fa-free-code-camp"></i>
          <SPAN>Editor</SPAN>
        </TITLEHEADER>
      </EDITORHEADER>
      <TEXTAREA value={text} onChange={onChange}></TEXTAREA>
    </EDITORCONTAINER>
  );
};

export default Editor;
