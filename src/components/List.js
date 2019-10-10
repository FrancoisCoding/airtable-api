import React from "react";
import Record from "./Record";

const List = ({ airtable }) => {
  console.log("airtable list", airtable);
  return (
    <div>
      {airtable.map(record => (
        <Record record={record} />
      ))}
    </div>
  );
};

export default List;
