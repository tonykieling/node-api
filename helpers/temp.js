const array = [
  {
    posts: [
      {id: 1, x: "xyz"},
      {id: 1, x: "xyz"}
    ]
  },
  {
    posts: [
      {id: 1, x: "xyz"},
      {id: 3, x: "xyz"}
    ]
  },
  {
    posts: [
      {id: 4, x: "xyz"},
      {id: 5, x: "xyz"},
      {id: 5, x: "xyz"}
    ]
  }
];

console.log("array", array.length);

let na = [];
array.forEach(e => e.posts.forEach(n => {
  na.push(n);
}));

console.log("na = ", na, "\n\n")

let unique = {};
const filtered = na.filter(post => !unique[post.id] && (unique[post.id] = true));
console.log("filtered", filtered)
