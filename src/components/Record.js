import React from "react";
import { NavLink } from "react-router-dom";

const Record = ({ record }) => {
  console.log("each record", record.fields);
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{record.fields.Name}</h5>
        <p class="card-text">Start Date {record.fields["Start Date"]}</p>
        <NavLink to="/form" className="btn btn-primary">
          Visit Form
        </NavLink>
      </div>
    </div>
  );
};

export default Record;
