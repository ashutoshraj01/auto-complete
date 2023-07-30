import React from 'react';
import { render } from "react-dom";
import { AutoComplete } from "./AutoComplete";
import data from "./data.json";

const rootElement = document.getElementById("root");

render(
  <div style ={{ display: "flex",
        alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "100px"}}>
    <h2>React Autocomplete Functional Component</h2>
    <h6>Search Country Name</h6>

    <AutoComplete
      inputStyle={{ backgroundColor: "WhiteSmoke" }}
      optionsStyle={{ backgroundColor: "LemonChiffon" }}
      data={data}
    />
  </div>,
  rootElement
);


