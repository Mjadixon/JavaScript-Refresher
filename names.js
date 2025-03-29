let names = ["lily", "micah", "tyler", "ady", "olivia"]
console.log(names)
names.unshift = ("mr gorton")
console.log(names)
console.log("the second vaule is " + names[1])
for(i=0;i<names.length;i++){
    console.log(names[i])
}

printAllNames(false)

console.log("---------------")

printAllNames(true)

function printAllNames(sort){
    if(sort){
        names.sort()
    }
for(i=0;i<names.length;i++){
    console.log(names[i])
}
}