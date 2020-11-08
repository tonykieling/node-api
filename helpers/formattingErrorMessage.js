/**
this method format nicely the message to be sent in case to show options to the client
*/ 

module.exports = formattingErrorMessage = options => {
  const optionsLength = options.length;
  let message = "";
  for (let i = 0; i < optionsLength; i++){
    if ((i + 1) == optionsLength){
      message += ` OR '${options[i]}'`;
    } else {
      message += ` '${options[i]}'${(optionsLength > 2) ? "," : ""}`;
    }
  };
  return message;
}

