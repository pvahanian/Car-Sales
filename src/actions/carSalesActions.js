export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
// action creator




export const addFeature = (newFeature) => {
  // returns an action object
  return { type: ADD_FEATURE, payload: newFeature };
};
export const removeFeature = (deleteFeature) => {
  // returns an action object
  return { type: REMOVE_FEATURE, payload: deleteFeature };
};
