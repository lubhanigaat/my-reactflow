import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

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

  
return (
<Node color={color} selected={selected} onClick={handleClick}>
<Handle type="target" position={Position.Left} />
<div>
<strong>{data.label}</strong>
</div>
<Handle type="source" position={Position.Right} />
</Node>
);
});