import React from 'react'

const colorArray = ["Red", "Green", "Blue"];

function ColorListItem({ color }) {
  return <h1>{color}</h1>;
}

export default function ColorList() {
  return (
    <ul>
      {colorArray.map((color) => (
        <ColorListItem key={color} color={color} />
      ))}
    </ul>
  );
}