import React from "react";
import TextField from "@mui/material/TextField";
import "../App.css";

export default function Formcard() {
  return (
    <div className="form-card">
      <div className="form-header">
        <div className="header-img flex">
          <img
            src={require("../img/header.png")}
            alt="header"
            width={51}
            height={48}
          />
        </div>
        <div className="form-heading">It’s a delight to have you onboard</div>
        <div className="form-sub-heading">
          Help us know you better. <br /> (This is how we optimize Wobot as per
          your business needs)
        </div>
      </div>
      <div className="form-body label">
        <label for="filled-hidden-label-small">Company Name</label>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          className="input"
        />
      </div>
      <div className="form-footer"> </div>
    </div>
  );
}
