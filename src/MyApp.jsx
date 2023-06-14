import React, { useCallback, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { MarkerType, Position, Background } from "reactflow";
import { ShellBar, Avatar, ShellBarItem, Icon, Input, FlexBox, FlexBoxJustifyContent } from "@ui5/webcomponents-react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ExcelToJsonConverter from "./Tools/exceltojsonconverter";
import axios from 'axios';
import { nodes as initialNodes, edges as initialEdges } from "./Nodes/nodes-edges";
import CustomNode from "./Nodes/CustomNode";
import CustomNode2 from "./Nodes/CustomNode2";
import styled, { ThemeProvider } from "styled-components";
import Auth from"./Authentication/Token";
const nodeTypes = {
  custom: CustomNode2
};
export function MyApp() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
  

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <div style={{ height: "100%" }}>

      <ShellBar
        logo={<img src="pictures/LOGO-SAP-1.png" />}
        onLogoClick={handleLogoClick}
        //menuItems={<><StandardListItem >Home</StandardListItem><StandardListItem >Login/Sign-up</StandardListItem><StandardListItem>Help Desk</StandardListItem></>}
        profile={<Avatar> <img src="pictures/profilePictureExample.png " /> </Avatar>}
        primaryTitle="SAP"
        searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
      >
        <ShellBarItem icon="add" text="add" />


      </ShellBar>
      <ExcelToJsonConverter />
      
     
        <Auth/>
    

      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "300px", background: "#f1f1f1" }}>
        <div style={{ height: "100%", width: "100%", padding: "10px", marginTop: "50px" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          //onElementClick={handleNodeClick} // Add onElementClick prop
          //attributionPosition="bottom-left"
          ></ReactFlow>

        </div>
      </div>
    </div>
  );
};
/*
<button onClick={getRequest}
          style={{
            backgroundColor: 'ButtonFace',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >GET</button>
        <button onClick={post}
          style={{
            backgroundColor: 'ButtonFace',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '10px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >POST</button>
*/
    /*
     <Form
    backgroundDesign="Transparent"

    style={{
      alignItems:"center"
    }}
    titleText="Demo Form">
      <FormItem label="ID">
        <input/>
      </FormItem>
      <FormGroup titleText="Personel Details">
        <FormItem label={<babel style={{alignSelf:"start",paddingTop:".25rem"}}>Name:</babel>}
        >
          <input/>
        </FormItem>
        <FormItem label="Address">
          <input/>
        </FormItem>
        <FormItem label="Phone Number">
          <input
          type="Number"
        maxLength="10"

          />
        </FormItem>
        <FormItem label="Email Id">
          <input
          type="Email"
          />
        </FormItem>
        <FormItem label="Home address">
          <CheckBox checked/>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Company Details">
        <FormItem label="Company Name">
          <input/>
        </FormItem>
        <FormItem label="Company city">
          <input/>
        </FormItem>
      </FormGroup>
    </Form>

    */
   //  <Route path="/horizontalflowchart" element={<HorizontalFlowChart />} />


