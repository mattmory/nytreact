import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-outline-secondary my-2 my-sm-0">
    {props.children}
  </button>
);
