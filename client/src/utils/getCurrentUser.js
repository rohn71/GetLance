const getCurrentUser = () => {
  // console.log(JSON.parse(localStorage.getItem("currentUser")));
  return JSON.parse(localStorage.getItem("currentUser"));
};

export default getCurrentUser