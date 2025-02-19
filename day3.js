function removeWords(sentence){
    if(typeof sentence !== "string" || sentence.length === 0){
        return "Invalid input";
    }else if(sentence.length <= 3){
        return "String too short to remove";
    }

    let remainingString ="";

    for(let i = 3; i < sentence.length; i++){
        remainingString = remainingString + sentence[i];
    }

    return remainingString;
}

console.log(removeWords());