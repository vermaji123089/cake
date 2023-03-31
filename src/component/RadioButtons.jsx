
import React, { useState } from "react";

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderDetails = () => {
    switch (selectedOption) {
      case "0.5kg":
        return <div>₹599</div>;
      case "1kg":
        return <div>₹1599</div>;
      case "2kg":
        return <div>₹399</div>;
      default:
        return <div>₹599</div>;
    }
  };

  return (
    <div>
      <br />
      <label
      style={{
        margin:'0.5rem',
        
      }}
      >
        <input
        style={{
          display:'none'
          
        }}
          type="radio"
          value="0.5kg"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        0.5kg
      </label>

      <label
       style={{
        margin:'0.5rem'
      }}
      >
        <input
         style={{
          display:'none'
          
        }}
          type="radio"
          value="1kg"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        1kg
      </label>

      <label
       style={{
        margin:'0.5rem'
      }}
      >
        <input
         style={{
          display:'none'
          
        }}
          type="radio"
          value="2kg"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
      2kg
      </label>

   <div
   style={{
    height:'30px',
    color:'green'
   }}
   >
    <b>
   {renderDetails()}</b>
   </div>
   <br />
    </div>
  );
}

export default RadioButtons;
