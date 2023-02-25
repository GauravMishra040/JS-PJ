function getmarks(){
    var maths = Number (document.getElementById("maths").value);
    var physics = Number (document.getElementById("physics").value);
    var chemistry = Number (document.getElementById("chemistry").value);
    var english = Number (document.getElementById("english").value);
    var hindi = Number (document.getElementById("hindi").value);
    var totalMarks = 500;
    var MarksObtained = maths + physics + chemistry + english + hindi;
    var percentage =(MarksObtained/totalMarks)*100;
    
    document.getElementById("percentage").innerHTML = percentage+ "%";
    if(percentage > 90){
        grade = "A+";
    }
    else if(percentage <= 90 && percentage > 80) {
        grade = "A";
    }
     else if(percentage <= 80 && percentage > 70) {
        grade = "B";
    }
    else if(percentage <= 70 && percentage > 60) {
        grade = "C";
    }
    else if(percentage <= 60 && percentage > 50) {
        grade = "D";
    }
    else if(percentage <= 50 && percentage > 40) {
        grade = "E";
    }
    else {
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    if(percentage < 40){
        document.getElementById("pass").innerHTML = "Sorry you  failed! Better luck next time.";
    }
    else{
        document.getElementById("pass").innerHTML = "Congratulations!You have passed.";
    }
}
    
    console.log(percentage + "%");


