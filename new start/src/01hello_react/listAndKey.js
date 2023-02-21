// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// const numbers = [1, 2, 3, 4, 5];

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// ReactDOM.render(
//   <NumberList numbers={numbers}></NumberList>,
//   document.getElementById(`root`)
// );

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  {
    id: 2,
    title: "Installation",
    content: "You can install React from npm.",
  },
];

posts.map((post) => {
  console.log(post);
});

// function Father(props) {
//   const Son1 = (
//     <ul>
//       {props.posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );

//   const Son2 = props.posts.map((post) => (
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   ));

//   return (
//     <div>
//       {Son1}
//       <hr />
//       {Son2}
//     </div>
//   );
// }

// ReactDOM.render(<Father posts={posts} />, document.getElementById("root"));
