
let arr = ["naman"];
let bag = "";
for (let i = arr.length - 1; i >= 0; i--) {

  bag = bag + arr[i] + "";
}

if (arr == bag) {
  console.log("Pallindrome string");
}  else {
  console.log("Not a Pallidrome string");
 
}
