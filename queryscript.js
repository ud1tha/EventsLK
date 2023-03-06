function ViewQueryFunction() {
    let name1 =document.getElementById("name").value;
    let email1 =document.getElementById("email").value;
    let message1 =document.getElementById("message").value;
    let event1 =document.getElementById("event").value;
    let time1 =document.getElementsByName("time");
   
    
  

       if(name1.length<1){
           alert("Please enter name");
           return false;
       }
       if(email1.length<1){
           alert("plesae enter your email correctly");
           return false;
       }if(message1.length<1){
           alert("please enter your messege");
           return false;
       }else{
           var viewQuery = document.getElementById("firstView");
            var viewQuery2 = document.getElementById("secondView");
       }
       for(var i=0;time1.length>i;i++){
           if(time1[i].checked){
               document.getElementById('inputtime').innerHTML=" : "+time1[i].value;
               
               break;    
           }
           
       }
       

       viewQuery.style.display = 'none';
       viewQuery2.style.display = 'block';

       document.getElementById('inputname').innerHTML =  "   :  "+name1;
       document.getElementById('inputemail').innerHTML = "  : "+email1;
       document.getElementById('inputmessage').innerHTML = " : "+message1;
       document.getElementById('inputevent').innerHTML = "  : "+event1;
       document.getElementById('inputtime').innerHTML = "  : "+times;

   }
    function EditQueryFunction() {
       var viewQuery = document.getElementById("firstView");
       var viewQuery2 = document.getElementById("secondView");

       viewQuery.style.display = 'block';
       viewQuery2.style.display = 'none';
    }
    function SendMail(){
       let name1 =document.getElementById("name").value;
       let number1 =document.getElementById("number").value;
       let email1 =document.getElementById("email").value;
       let message1 =document.getElementById("message").value;
       
       let time1 =document.getElementsByName("time");
       
       let event1 =document.getElementById("event").value;
       for(var i=0;time1.length>i;i++){
           if(time1[i].checked){
               var time_check =time1[i].value;
               break;    
           }
       }
       
       if(name1.length<1){
           alert("Please enter name");
           return false;
       }
       if(email1.length<1){
           alert("plesae enter your email correctly");
           return false;
       }if(message1.length<1){
           alert("please enter your messege");
           return false;
       }else{
           var viewQuery = document.getElementById("firstView");
            var viewQuery2 = document.getElementById("secondView");
       }
       for(var i=0;time1.length>i;i++){
           if(time1[i].checked){
               document.getElementById('inputtime').innerHTML=" : "+time1[i].value;
               break;    
           }
       }

       
       var subject = "subject";
       var body ='Name :'+name1 + 
       '%0D%0AContact Number : '+number1 +
       '%0D%0AE-mail Address :'+email1 +
       '%0D%0AMessege :'+message1 +
       '%0D%0AThe time of the event :'+time_check+
       
       '%0D%0AEvent :'+event1;
       
       window.location.href="mailto:1savindupanagoda@gmail.com?subject="+subject+"&body="+body;
       
    }