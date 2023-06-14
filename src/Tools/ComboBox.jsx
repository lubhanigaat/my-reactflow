import React, { useState } from "react";
import { sapUiContentPadding } from "@ui5/webcomponents-react-base/dist/styling/spacing";
import { ComboBox, ComboBoxItem } from "@ui5/webcomponents-react";
import { getDomainName } from "./systemConfigureMap";

export let newURL = ""; // Declare newURL variable outside the component

export default function ComboBoxfunc() {
  
  const [selectedValue, setSelectedValue] = useState("");

  const handleComboBox = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  const handleButtonClick = () => {
    const endpoint = getDomainName(selectedValue);
    if (endpoint) {
      newURL = endpoint;
      console.log(newURL); // Output the generated endpoint (replace with your desired logic)
    }
  };

  return (
    <div>
      <babel style={{ ...sapUiContentPadding }}>System</babel>
      <ComboBox
        style={{ backgroundColor: "ButtonFace" }}
        onChange={handleComboBox}
        onClick={handleButtonClick}
      >
        <ComboBoxItem text="System 1" />
        <ComboBoxItem text="System 2" />
        <ComboBoxItem text="System 3" />
      </ComboBox>
    </div>
  );
}
