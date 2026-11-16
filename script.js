let students=[];

document.getElementById("myform").addEventListener("submit",function(event){

    event.preventDefault();

    let name=document.getElementById("name").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let email=document.getElementById("email").value.trim();
  let course=document.getElementById("course");
    let result=document.getElementById("success");
    let error= document.getElementById("error");
    
    error.textContent="";
    result.textContent="";

    if (name.length<2){
        error.textContent="enter valid name";
    }
    else if(phone.length<10){
        error.textContent="Enter valid phone number";
    }
    else if(!email.includes("@")){
        error.textContent="Enter valid email";
    }
    else{

        result.textContent="Form submitted successfully";

        let student={
            name:name,
            phone:phone
        }
        students.push(student);
        document.getElementById("display").textContent=`name: ${student.name}`;
        document.getElementById("myform").reset();
    }

});


function changeTheme(){
    document.body.classList.toggle("dark");
}