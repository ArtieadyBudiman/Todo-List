class Student{
    constructor(){
        this.name="";
        this.age=0;
        this.dateOfBirth="";
        this.gender="";
        this.studentId="";
        this.hobbies=[];
    };

    setName(name){
        this.name = name;
    };

    setAge(age){
        this.age = age;
    };

    setDateOfBirth(date){
        this.dateOfBirth = date;
    };

    setGender(gender){
        if(gender === "Male" || gender === "Female"){
            this.gender = gender;
        }else{
            throw new Error();
        };
    };

    setStudentId(id){
        this.studentId = id;
    };

    addHobbies(hobbies){
        this.hobbies.push(hobbies);
    };

    removeHobbies(hobbies){
        this.hobbies.splice(this.hobbies.indexOf(hobbies), 1);
    }

    getData(){
        return this;
    };
}
const student = new Student;
student.setName("Artieady Budiman");
student.setAge(25);
student.setDateOfBirth("22 Agustus 1996");
student.setGender("Male");
student.setStudentId("ID220896");
student.addHobbies("read");
student.addHobbies("movies");
student.addHobbies("music");
console.log(student.getData());
student.removeHobbies("music");
console.log(student.getData());
