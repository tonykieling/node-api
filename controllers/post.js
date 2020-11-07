
const formattingMessage = require("../helpers/formattingMessage.js");

const simplePost = (request, response) => {
  console.log("inside SIMPLEpost");
  console.log("request.query", request.query);
  const { tags } = request.query;
  let {
    sortBy,
    direction
  } = request.query;

  console.log("tags", tags, "sortBy", sortBy, "direction", direction);

  // assess the received parameters (3)
  // 1/3- it checks 'tags' parameter
  if (!tags) return response.status(400).json({error: "Tags parameter is required"});

  // 2/3- it checks 'sortBy' parameter or sets its default when necessary
  if (!sortBy) {
    console.log("setting sortBy default");
    //if no sortBy, it sets a default = 'id'
    sortBy = "id"
  } else {
    const acceptableSortByParameter = ["id", "reads", "likes", "popularity"];
    const checkingSortBy = acceptableSortByParameter.filter(e => e === sortBy.toLowerCase());

    if (checkingSortBy.length === 0) {
      console.log("WRONG SORTBY parameter");
      const message = formattingMessage(acceptableSortByParameter);
      return response.status(400).json({error: `'sortBy' parameter is invalid. Consider using these options: ${message}`});
    }
    else {
      console.log("SortBy is OK")
    }
    
  }

  // 3/3- it checks 'direction' parameter and sets its default when necessary
  if (!direction) {
    console.log("setting direction default");
    //if no direction, it sets a default = 'asc'
    direction = "asc"
  } else {
    const acceptableDirectionParameter = ["asc", "desc"];
    const checkingDirection = acceptableDirectionParameter.filter(e => e === direction.toLowerCase());

    if (checkingDirection.length === 0) {
      console.log("WRONG DIrection parameter");
      const message = formattingMessage(acceptableDirectionParameter);
      return response.status(400).json({error: `'direction' parameter is invalid. Consider using these options: ${message}`});
    }
    else {
      console.log("DIRECTION is OK")
    }
  }


  return response.status(200).json({message: "_pOSTS"});
};


module.exports = {
  simplePost
};
