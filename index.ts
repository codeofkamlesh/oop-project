#! /usr/bin/env node
import inquirer from "inquirer"

class student {
    name: string
    constructor(n:string){
        this.name=n
    }
}

class person{
    students:student[]=[]
    addstudent(obj:student){
        this.students.push(obj)
    }

}

const persons = new person()

const programstart = async(persons:person)=>{
do{
    console.log("welcome");
    
const ans = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "whom would you like to interact with?",
    choices: ["staff", "student", "exit"]
});
if(ans.select == "staff"){
    console.log("you approach the staff room. please feel free to ask any question");
    
} else if(ans.select == "student"){
    const ans = await inquirer.prompt({
        name: "student",
        type: "input",
        message: "Enter the student's name you wish to engage with: "
    })
    const newstudent = persons.students.find(val => val.name == ans.student)
    if(!newstudent){
        const name = new student(ans.student)
        persons.addstudent(name)
        console.log(`Hellow iam ${name.name}. Nice to meet you`);
        console.log("New student added");
        console.log("current student list:");
        console.log(persons.students);
        
    }else{
        console.log(`Hellow iam ${newstudent.name}. Nice to see you again`);
        console.log("Existing student list:");
        console.log(persons.students);
        
    }
    
}else if (ans.select == "exit"){
    console.log("Exiting the program...");
    process.exit()
}
}while(true)

}
programstart(persons)