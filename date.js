exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
 
 return today.toLocaleDateString("id-ID", options);
};

exports.getDay = () => {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  
  return today.toLocaleDateString("id-ID", options);
};
