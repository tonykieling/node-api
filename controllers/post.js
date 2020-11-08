
const formattingErrorMessage    = require("../helpers/formattingErrorMessage.js");
const formattingSuccessMessage  = require("../helpers/formattingSuccessMessage.js");

const axiosQuery        = require("../helpers/axiosQuery.js");
const checkParameter    = require("../helpers/checkParameter.js");

const simplePost = async (request, response) => {
  const { tags } = request.query;
  let {
    sortBy,
    direction
  } = request.query;

  // assess the received parameters (3)
  // 1/3- it checks 'tags' parameter
  if (!tags) return response.status(400).json({error: "Tags parameter is required"});

  // 2/3- it checks 'sortBy' parameter or sets its default when necessary
  if (!sortBy) {
    console.log("setting sortBy to default");
    //if no sortBy, it sets a default = 'id'
    sortBy = "id"
  } else {
    const acceptableSortByParameter = ["id", "reads", "likes", "popularity"];

    // check if the parameter is valid, regarding the options above
    if (!checkParameter(sortBy, "sortBy", acceptableSortByParameter)){
      const message = formattingErrorMessage(acceptableSortByParameter);
      return response.status(400).json({error: `'sortBy' parameter is invalid. Consider using these options: ${message}.`});
    }
  }

  // 3/3- it checks 'direction' parameter and sets its default when necessary
  if (!direction) {
    console.log("setting direction to default");
    //if no direction, it sets a default = 'asc'
    direction = "asc"
  } else {
    const acceptableDirectionParameter = ["asc", "desc"];

    // check if the parameter is valid, regarding the options above
    if (!checkParameter(direction, "direction", acceptableDirectionParameter)){
      const message = formattingErrorMessage(acceptableDirectionParameter);
      return response.status(400).json({error: `'direction' parameter is invalid. Consider using these options: ${message}.`});
    }
  }


  const hatchwaysApi  = "https://api.hatchways.io/assessment/blog/posts";
  const tagsArray = tags.split(",");

  if (tagsArray.length === 1) {
    const parameters  = `?tag=${tagsArray[0]}&sortBy=${sortBy}&direction=${direction}`;
    const url         = `${hatchwaysApi}${parameters}`;
    const result = await axiosQuery(url);

    return response.status(result.error ? 400 : 200).json(formattingSuccessMessage(result.posts));
  } else {
    try {
      const arrayOfAxiosQueries = tagsArray.map(tag => {
        const parameters    = `?tag=${tag}&sortBy=${sortBy}&direction=${direction}`;
        const url           = `${hatchwaysApi}${parameters}`;
  
        return axiosQuery(url);
      });
    
      // it consolidates all pending promisses to resolve them
      const results = await Promise.all(arrayOfAxiosQueries);
  
      // it calls the helper for merging - only when necessary, that is, more than one tag
      // it will remove duplicates posts and merge them in one binding
      const mergeResults = require("../helpers/mergeResult.js");
      const mergedPosts = mergeResults(results)
  
      return response.status(200).json(formattingSuccessMessage(mergedPosts));

    } catch(error){
      console.log("Error: ", error);
      return response.status(400).json({error});
    }
  }
};


module.exports = {
  simplePost
};
