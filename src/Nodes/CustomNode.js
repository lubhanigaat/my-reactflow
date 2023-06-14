import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import axios from 'axios';
const Node = styled.div`
padding: 10px 20px;
border-radius: 5px;
background: ${(props) => props.color}; /* Use a color prop instead of theme */
color: ${(props) => props.theme.nodeColor};
border: 1px solid ${(props) => (props.selected ? props.theme.primary : props.theme.nodeBorder)};
cursor: pointer; /* Add cursor style to indicate it's clickable */


.react-flow__handle {
background: ${(props) => props.theme.primary};
width: 2px;
height: 5px;
border-radius: 3px;
}
`;

export default memo(({ data, selected }) => {
const [color, setColor] = useState(data.color || '#006400'); // Background color of
const handleClick = () => {
const newColor = "#FFA500";
setColor(newColor);

};
const getRequest = async (data) => {

    const response  = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
  
    .then(function (response) {
  
      // handle success
  
      const jsonData = response.data;
  
      console.log(jsonData);
  
    })
  
    .catch(function (error) {
  
      // handle error
  
      console.log(error);
  
    })
  
    .finally(function () {
  
      // always executed
  
    });
  
  };
return (
<Node color={color} selected={selected} onClick={getRequest}>
<Handle type="target" position={Position.Left} />
<div>
<strong>{data.label}</strong>
</div>
<Handle type="source" position={Position.Right} />
</Node>
);
});