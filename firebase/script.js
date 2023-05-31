import {app} from "./fcong";
console.log("welcome",app)
import {getDatabase,set,get,ref,child,update,remove} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const db=getDatabase();
// console.log(db);
let addbtn=document.getElementById("insert");
let updatebtn=document.getElementById("update");
let readbtn=document.getElementById("read");
let deletebtn=document.getElementById("delete");

let name,rollno,branch,dob;

function readDetails(){
   name=document.getElementById('name');
   rollno=document.getElementById('roll');
   branch=document.getElementById('branch');
   dob=document.getElementById('dob');
}

let add=document.getElementById("addbtn");
let read=document.getElementById("readbtn");
let updt=document.getElementById("updatebtn");
let del=document.getElementById("deletebtn");

function addDetails(){
   readDetails();
   set(ref(db,"students/"+rollno.value),{name:name.value,rollno:rollno.value,Branch:branch.value,DOB:dob.value}).then(()=>{
       alert("values are inserted successfully");
   }).catch((err)=>{
       alert("something went wrong");
   });
}
function updateStudent(){
   readDetails();
   update(ref(db,"students/"+rollno.value),{name:name.value,rollno:rollno.value,Branch:branch.value,DOB:dob.value}).then(()=>{
       alert("Updated succussfully");
   }).catch((err)=>{
       alert("something went wrong");
   });

}
function readStudent(){
   get(child(ref(db),"students")).then((snapshot)=>{
       // console.log(snapshot.val());
       let dc=document.getElementById('tabledata');
       dc.style.border='1px solid black';

       dc.innerHTML+="<table style='border:1px solid;'><tr><th>Name</th><th>Roll No</th><th>Branch</th><th>DOB</th></tr>";
       snapshot.forEach(ele => {
           
           
           dc.innerHTML+="<tr><td>"+ ele.val().name+ "</td><td>"+ele.val().rollno+"</td><td>"+ele.val().Branch+"</td><td>"+ele.val().DOB+"</td></tr>";
       })
       dc.innerHTML+="</table>";
   });
}

function deleteStudent(){
   readDetails();
   remove(ref(db,"students/"+rollno.value)).then(()=>{
       alert("Deleted Succesfully");
   }).catch((err)=>{
       alert("Something went wrong");
   });
}
addbtn.addEventListener("click",addDetails);
readbtn.addEventListener("click",readStudent);
updatebtn.addEventListener("click",updateStudent);
deletebtn.addEventListener("click",deleteStudent);