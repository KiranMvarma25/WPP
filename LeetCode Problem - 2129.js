function capitalizeTitle(str){
    if(str.length < 3)
        return str.toLowerCase();

    let words = str.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}

console.log(capitalizeTitle("capiTalIze tHe titLe"));