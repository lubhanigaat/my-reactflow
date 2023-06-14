import React, { useState } from "react";
import axios from "axios";
import { FlexBox, FlexBoxJustifyContent } from "@ui5/webcomponents-react";
//import jwt from "jsonwebtoken";
import {newURL} from "../Tools/ComboBox";
//import dotenv from 'dotenv';
//dotenv.config();
import {username,password} from "./config";
//import {newURL} from "../Tools/ComboBox";
//import dotenv from 'dotenv';
//dotenv.config();
//import { username, password } from "./config";

export default function Auth() {
  const [clientId, setClientId] = useState(null);
  const getRequest = async (data) => {
    const response = await axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"
      )

      .then(function (response) {
        // handle success
        const jsonData = response.data;
        console.log(jsonData);
      })

      .catch(function (error) {
        // error callback function
        // handle error
        console.log(error);
      })

      .finally(function () {
        // always executed
      });
  };

  // //POST
  const makeRequest = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/todos",
        data: data,
        headers: {
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const post = async () => {
    try {
      const res = await makeRequest({
        userId: 233,
        id: 233,
        title: "Intern",
        body: "Lorem Ipsum"
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  //Token

  const makeTokenRequest = async (data) => {
    try {
     // const username =
       // "sb-8c9e3cae-a143-4fe9-b660-25cc239c5f75!b2144|cgt-uaa-cgt-r1-pocprv-dev!b2120";
     // const password =
        //"0ecc2d73-ba49-4492-bfa9-a26527e2bcb3$i6Mk9zvQk3Bg2Ccf1BiGZm0a9Z6NJLxEqkvo1pYBFEU=";

      // const username = process.env.REACT_APP_USERNAME;
      // const password = process.env.REACT_APP_PASSWORD;

      const credentials = `${username}:${password}`;
      const encodedCredentials = btoa(credentials); // Encode the credentials to base64

      const response = await axios.post(
        `${newURL}/oauth/token?grant_type=client_credentials`,
        null,
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`
          }
        }
      );

      const authToken = response.data.access_token;
      console.log(authToken);
      // Store the authToken securely (e.g., using localStorage, cookies, etc.)
/*
      // Decode the auth token
      const decodedToken = jwt.decode(authToken);
      console.log("jwt token", decodedToken);
      // Redirect or perform any other actions after successful login
      const { client_id: decodedClientId } = decodedToken;
      setClientId(decodedClientId);
      console.log("user ID", decodedClientId);
   */   
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div>
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <button
          onClick={makeTokenRequest}
          style={{
            backgroundColor: "ButtonFace",
            color: "black",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "12px",
            cursor: "pointer"
          }}
        >
          Token
        </button>
      </FlexBox>
    </div>
  );
}
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
