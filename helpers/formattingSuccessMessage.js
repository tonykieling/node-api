/**
this method format the success' message to be sent to the client
*/ 

module.exports = formattingSuccessMessage = result => {
  return ({
    message : (result.length > 0) ? "success" : "No posts for your parameters.",
    counter : result.length,
    posts   : result
  });
}

