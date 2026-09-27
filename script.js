function search(){

let word = document.getElementById("searchBox").value.toLowerCase();

let answers = {
"mango":"🥭 Mango is a sweet fruit that grows on trees.",
"dog":"🐶 Dog is a friendly pet animal that barks.",
"tree":"🌳 A tree is a big plant that gives oxygen.",
"apple":"🍎 Apple is a healthy fruit.",
"cat":"🐱 Cat is a small pet animal that says meow."
};

if(answers[word]){
document.getElementById("answer").innerText = answers[word];
}
else{
document.getElementById("answer").innerText = "I don't know this yet, try another word!";
}

}
