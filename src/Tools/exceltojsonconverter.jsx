import { FileUploader, FlexBox, FlexBoxJustifyContent } from "@ui5/webcomponents-react";
import{Button,ComboBox,ComboBoxItem} from "@ui5/webcomponents-react";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { sapUiContentPadding} from "@ui5/webcomponents-react-base/dist/styling/spacing";
import ComboBoxfunc from"./ComboBox";
const ExcelToJsonConverter = () => { // functional component
 
  const [SelectedValue,setSelectedValue]=useState('');
  //Event handler function handleComboBox
  const handleComboBox=(event)=>{
    const { value } = event.target;
    setSelectedValue(value);
  }
//Event handler function 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();// reader object to read file

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" }); // parse the excel file
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });// converted to json
     
      const headerRow=json[0];
      const rowData= json.slice(1);

      const result=rowData
      .filter((row)=> row.length===headerRow.length)//filter out rows with different cell count compared to header row.
      .map((row)=>{
        const rowObject={};
        headerRow.forEach((header,index)=>{
          rowObject[header]=row[index];
        });
        return rowObject;// array of object stored 
      });

      //setJsonData(json);
      const therapyID = result.map((row) => row.therapyID); 
      const systemID = result.map((row) => row.SystemID); 
      const treatmentCenterID = result.map((row) => row.treatmentCenterID); 
      const referenceSubUnitId = result.map((row) => row.referenceSubUnitId);
      const requestedBy="12236789112";
      const requestedAt="2017-04-13115:04:89.00002";
      const requestMessageID="requestMessageID";
     // console.log('Therapy IDs:', therapyIds);
      //console.log('System IDs:', systemIds);
      //console.log('Treatment Center IDs:', treatmentCenterIds);

      // Create JSON object 
      const jsonObject = {
        systemID,
        therapyID,
        requestedBy,
        requestedAt,
        requestMessageID,
        referenceSubUnitId,
        treatmentCenterID,
        
      };
      console.log('JSON Object:', jsonObject);
      //console.log(result);
    };

    reader.readAsArrayBuffer(file);// File reader
  };

  return (
    <div>
      <FlexBox
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      >
        <FlexBox
        justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
        <ComboBoxfunc/>
        </FlexBox>
        <FlexBox  
        justifyContent={FlexBoxJustifyContent.Center}
        >
        <babel
        style={{...sapUiContentPadding}}
        >
      Master Data
    </babel>
      <FileUploader
     
       style={{
        //backgroundColor: 'ButtonFace',
        borderRadius:'10px',
        padding: '5px',
        fontSize: '16px',
      }}
      type="file" 
      onChange={handleFileChange} 
      accept=".xlsx" 
      >
        <Button 
        style={{
        backgroundColor:'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '16px',
        cursor: 'pointer',
      }}> 
          Collect
        </Button>
      </FileUploader>
        </FlexBox>
      </FlexBox>
      </div>
  );
};

export default ExcelToJsonConverter;
//{jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}