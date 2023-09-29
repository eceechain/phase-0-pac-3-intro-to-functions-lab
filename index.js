function shout (wordString){
return wordString.toUpperCase ()  
}
let wordString = "hello";
let result = shout(wordString);
console.log(result);



function whisper (manString){
    return manString.toLowerCase ()
}
let manString = "HELLO";
let outcome = whisper(manString);
console.log(outcome);



function logShout(string) {
    let shoutedString = string.toUpperCase();
    console.log(shoutedString);
}
logShout("hello"); 

function logWhisper(worldString){
let stringWorld = worldString.toLowerCase();
console.log(stringWorld)
}
logShout("JARED");

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return "I don't understand what you're saying.";
    }
}