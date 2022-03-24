import React, { useState } from "react";

const Greet = () => {
  const [resourceType, setResourceType] = useState(3);
  console.log("rendered");
  return (
    <div>
      <button onClick={() => setResourceType(4)}>Hi {resourceType}</button>
    </div>
  );
};

export default Greet;

// "render" is printed 1 time when the component is being rendered for the very first time

// "render" is printed a 2nd time when the user clicks the button since state changes, 
// resourceType = 3 is now resourceType =4

// "render" should not be printed a 3rd time the clicks the button since state is unchanged, 
// resourceType = 4 is now resourceType =4. Since same value for resourceType, there should
// be no rerender, but there is.

// when u click the button more times, rendered is not printed anymore

// Note: if useState(4), render is printed once no matter number
// of times button clicked