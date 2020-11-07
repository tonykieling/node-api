
// this is the implementation of the ping controller
const simplePing = (request, response) => {
  console.log("inside simplePing");
  return response.status(200).json({success: true});
};


module.exports = {
  simplePing
};