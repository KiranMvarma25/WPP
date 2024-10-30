let s = "   fly me   to   the moon  ";

const words = s.trim().split(" ").filter(word => word !== "");

let outWord = words[words.length - 1];

console.log(outWord.length);