// LastIndexof
// indexOf
// search
// match, matchAll

var greetings = "Hello, how are are are you doing ?";
console.log(greetings.lastIndexOf("are"));
console.log(greetings.indexOf("are"));
console.log(greetings.search("howsdbsfh"));
console.log(greetings.match("you"));
console.log(Array.from(greetings.matchAll("are")));