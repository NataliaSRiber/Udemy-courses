import * as React from 'react';
import { AppContext } from "../App";
import { useContext } from "react";

export default function Context () {
  const details = useContext(AppContext)
  return (
    <div>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Fw: {details.framework}</h4>
          <p>QTD: {details.projects}</p>
        </div>
      )}
    </div>
  );
}
