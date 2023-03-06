
var qfinish=0;
var score=0;
document.getElementById("press").addEventListener("click",addingQfinish);
function addingQfinish() {
    qfinish++;
}
var counter = 60;
function timer() {
     let timming= setInterval(()=>{
                counter--;
         
                if(counter >= 0){
                        document.getElementById("count").innerHTML=counter;
                }else{
                        
                        document.getElementById("timetaken").innerHTML=60 +"seconds";
                        clearInterval(timming);
                        // result();
                }
                if(qfinish>0){
                    document.getElementById("timetaken").innerHTML="Taken Time: "+(60-counter) +"seconds";
                    document.getElementById("count").innerHTML="";
                    clearInterval(timming);
                }
         
         },1000);
}

const answers=["1.Outdoor,night events","3.Waskaduwa","2.Absence of unique moments","3.Adobe lightroom",
"4.Background of the stage","1.Lights","2. Canon","4.Peach - white","4.Back drop","1.Brings your ideas to life for you"];

var correct =0;  
const data=[];
const paraArray=["A","B","C","D","E","F","G","H","I","J"];
const array=["correct1","correct2","correct3","correct4","correct5","correct6","correct7","correct8","correct9","correct10"];
var x=0;
function result(x){
    if(document.getElementById(array[x]).checked){
        
        score = score+2;
        console.log(score);
        data[x]=x+1+"is correct";
        document.getElementById(paraArray[x]).innerHTML="Your answer is correct";
        
    }else{
        // correct++;
        data[x]=x+1+"is not correct";
        score = score-1;
        document.getElementById(paraArray[x]).innerHTML="Your answer is wrong  correct one: "+answers[x];
    }
}

function checking() {
    for(let xx=0;xx<10;xx++){
            result(xx);
    }
    console.log(data);
    if (score<0) {
        score=0;
    }
    console.log(score);
    document.getElementById("marks").innerHTML="Your mark is "+score;
}