module.exports = checkSortByParameter = (param, type, acceptableParameters) => {
  const checkingParameter = acceptableParameters.filter(e => e === param.toLowerCase());

  if (checkingParameter.length === 0) {
    console.log(`WRONG ${type} parameter`);
    return false;
    // const message = formattingMessage(acceptableParameters);
    // return response.status(400).json({error: `${type} parameter is invalid. Consider using these options: ${message}`});
  }
  else {
    console.log(`${type} is OK`);
    return true;
  }
}