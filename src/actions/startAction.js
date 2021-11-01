
export const START_APP = "START_APP";


export function startApplication(data) {
  return (dispatch) => {
    dispatch(setApplication(data));
  };
}


export function setApplication(data) {
  return {
    type: START_APP,
    payload: data,
  };
}
