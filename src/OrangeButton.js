import React from 'react';
import './OrangeButton.css';

function fetchData(){
  alert("kfjejfjkj")
}

const OrangeButton = () => {
  return (
    <button onclick="fetchData()" className="orange-button">Click Me</button>
  );
}

export default OrangeButton;
