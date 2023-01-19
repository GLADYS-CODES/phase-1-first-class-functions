// function receivesAFunction(callback) {
//     callback();
//   callback();
// }

function receivesAFunction(callback) {
  callback();
}
function myCallback() {
  console.log("this is a callback");
}

receivesAFunction(myCallback);


function returnsANamedFunction() {
    const namedFn = () => console.log("this is a named function");
    return namedFn;
  return function namedFn() {
    console.log("this is a named function");
  };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  return () => console.log("this is an anonymous function");
}
