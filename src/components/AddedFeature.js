import React from "react";
const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {/* {console.log(props.total)} */}
      {props.feature.name} $ {props.feature.price}
    </li>
  );
};
export default AddedFeature;
// {props.feature.price}