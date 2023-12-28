import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="mx-2 my3" style={{ height: "45px" }}>
      {props.alert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{capitalize(props.alert.type)}</strong> :{props.alert.message}
      </div>}
    </div>
  );
}
