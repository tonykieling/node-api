
// this method sort the array of onjects by their .id
const compare = (a, b) => {
  if (a.id > b.id) return 1;
  if (b.id > a.id) return -1;

  return 0;
};

// it removes duplicated posts
const removeDuplicated = allSortedPosts => {
  let unique = {};
  const filtered = allSortedPosts.filter(post => !unique[post.id] && (unique[post.id] = true));
  return filtered;
};

// this function receives an array with objects that contain other array of objects, sorting and removing duplicated posts
module.exports = mergeResults = arrayofResults => {
  let allPosts = [];
  arrayofResults.forEach(e => e.posts.forEach(post => allPosts.push(post)));
  const sortedPosts = allPosts.sort(compare);

  const final = removeDuplicated(sortedPosts);
  return final;
};