
const simplePost = (request, response) => {
  console.log("inside SIMPLEpost");
  return response.status(200).json({message: "_pOSTS"});
};


module.exports = {
  simplePost
};
