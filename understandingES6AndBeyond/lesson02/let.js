let firstname = "Tony";
// 在文件的一開始定義，此變數位於文件的根部，但他跟var全域變數不一樣，var全域變數會位於window物件底下，但let不會，他會是undefined;

{
  //   console.log(firstname);
  // let.js:5 Uncaught ReferenceError: Cannot access 'firstname' before initialization  at let.js:5:15
  let firstname = "Anthony";
  console.log(firstname); // Anthony
}

console.log(firstname); // Tony
