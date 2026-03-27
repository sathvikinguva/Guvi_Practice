const res = fetch("http://127.0.0.1:8000/greet");
const x = res.then(response => response.json());
x.then((response) => window.alert(response.greetMsg + " " + response.token));