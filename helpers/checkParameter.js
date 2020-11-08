module.exports = checkSortByParameter = (param, type, acceptableParameters) => {
  const checkingParameter = acceptableParameters.filter(e => e === param.toLowerCase());

  if (checkingParameter.length === 0) {
    console.log(`WRONG ${type} parameter`);
    return false;
  }
  else {
    console.log(`${type} is OK`);
    return true;
  }
}