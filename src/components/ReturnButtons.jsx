import React from "react";

function ReturnButtons() {
  
  for (let i = 0; i < colors.length; i++)
    return (
      <div>
        <button className="bg-black text-white">{colors[i]}</button>
      </div>
    );
}

export default ReturnButtons;
