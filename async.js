let variableSatu = 3;
let variableDua = 4;

function timeOutResolve (x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x), 2000)
  })
}

async function sampleAwait(val) {
  let newResolverOne = await timeOutResolve(30);
  let newResolverTwo = await timeOutResolve(30)
  return val + newResolverOne + newResolverTwo;
}

sampleAwait(20)
.then(result => console.log(result));

async function add2(x) {
  var a = await timeOutResolve(20);
  var b = await timeOutResolve(30);
  return x + a + b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});