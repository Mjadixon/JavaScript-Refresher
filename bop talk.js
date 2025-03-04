function bopTalk(message) {
    let constantant = message.subString()
    let vowels = "aeiou"
       message = "banana split"
   for (i=0;i<message.length;i++){
       if (vowels.indexOf(message[i])) {
        message+=constantant
        console.log(message+=vowels)
       } else {
        console.log(constantant+"op")
       }
    } 
}