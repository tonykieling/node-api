module.exports = axiosQuery = async url => {

  const axios = require("axios");
  try {
    const axiosQuery = await axios(url);
    
    return({
      posts: axiosQuery.data.posts
    });
    
  }catch(error){
    console.log("error on axios request");
    return({error: "something bad happened. Please, try again or call the system admin."});
  }
}