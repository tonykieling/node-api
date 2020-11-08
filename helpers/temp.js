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
  // console.log("-", n);
  // na = [...na, ...{n}];
  na.push(n);
}));

console.log("na = ", na, "\n\n")

let unique = {};
const filtered = na.filter(post => !unique[post.id] && (unique[post.id] = true));
console.log("filtered", filtered)

// const x = na.filter((e, i) => {

//   console.log("===> e", e, "i", i);
//   if (i < na.length - 1) {
//     console.log(`na[${i + 1}]`, na[i + 1].id, "\n");
//     return e.id !== na[i + 1].id;
//   }
//   return e.id !== na[i].id;

// });

// console.log("XXXXXXXXX", x);