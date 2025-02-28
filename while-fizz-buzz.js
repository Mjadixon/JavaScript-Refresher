let fizzBuzz = 0
let fizz= 0
let buzz = 0
let i = 0
while (fizz < 1000 ){
        console.log(i++)
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(" fizzBuzz")
            fizzBuzz = fizzBuzz+1
        }
        else if (i % 3 == 0) {
            console.log(" fizz" )
            fizz = fizz+1
        } else if (i % 5 == 0) {
            console.log(" buzz")
            buzz = buzz+1
        }
    } 
    console.log("there are "+fizz+" and took "+i +" times")
