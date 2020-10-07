import React from 'react';

const AdditionalFeature = props => {
  // console.log("thisis props",props)
  return (
    <li>
      <button onClick={()=> props.addFeature(props.feature)}
      className="button">
      Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
