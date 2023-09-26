// 基礎三角形
console.log("------------基礎三角形----------");
const starCounts = 3;

// 直角三角型right triangle
function rightTriangle(num) {
  let newNumber = num;
  let star = "";
  for (let i = 0; i < newNumber; i++) {
    star += "*";
    console.log(star);
  }
}

// rightTriangle(starCounts);
console.log("------------分隔線--------------");
// 遞增遞減三角形
function equilateralTriangle(num) {
  let newNumber = num;
  let star = "";

  for (let i = 0; i < newNumber; i++) {
    star += "*";
    console.log(star);
  }
  for (let i = newNumber - 1; i > 0; i--) {
    let starArr = star.split("");
    starArr = starArr.pop();
    let starDown = "";
    for (let j = i; j > 0; j--) {
      starDown += "*";
    }
    console.log(starDown);
  }
}
// equilateralTriangle(starCounts);
console.log("------------進階三角形----------");

function triangle(kai) {
  const stair = kai; // 傳進來有幾層
  let starCount = 0;
  let bottom = 1;
  let total = 1; // 底層總數
  let starArr = ["*"];
  // 算底層個數
  for (let i = 1; i < stair; i++) {
    // console.log("-----");
    // console.log("stair", stair);
    const lastNum = bottom; // 上一階
    // console.log("lastNum", lastNum);
    let nowNum = lastNum + 2; // 現在這一階
    bottom = nowNum;
    console.log("nowNum", nowNum);
    for (let s = 0; s < nowNum; s++) {
      let start = "";
    }
    total += nowNum; // 底層總數
  }
  console.log("total", total);

  // 開始畫正三角形，用階層來畫
  for (let i = 1; i < stair; i++) {
    console.log(i);
    for (let j = 0; j < total; j++) {}
  }
}

triangle(4);
