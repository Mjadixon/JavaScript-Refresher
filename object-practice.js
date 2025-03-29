let student1 = { fname: "brandon", lname: "brink", gpa: 3.5, playsVolleyball: false}
let student2 = {fname:"clark",lname:"kent", gpa: 4.3, playsVolleyball: true}

console.log("I know " + student1.fname + " he has a " + student1.gpa + " gpa")
if (student1.playsVolleyball==true){
    console.log(student1.fname+" plays volleyball")
}else{
    console.log(student1.fname+" does not play volleyball")
}

let students = [student1]
students.push(student2)
students.push({fname:"bruce",lname:"wane", gpa: 2.3, playsVolleyball: !true})
student1.fname="clarence"
student2.fName="john"
students[students.length-1].gpa+=.5
console.table(students)
