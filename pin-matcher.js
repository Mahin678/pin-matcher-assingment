const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
     let randomNumber = Math.random() *  9999;
     randomNumber =  Math.round(randomNumber);
     if(randomNumber > 999){
          document.getElementById("generate-input").value =randomNumber;   
     } 
     document.getElementById("try").innerText= 3 ;
     document.getElementById("submit-Btn").disabled = false;                                    
     document.getElementById("submit-Btn").style.color="white";
     document.getElementById("submit-input").value=' ';
     document.getElementById("match").style.display="none";
     document.getElementById("try-Left").innerText='try left';
     document.getElementById("try").style.display="inline";
     document.getElementById("not-Match").style.display="none";
})

//number submit btn 
function submitValue(num){
     const numberValue = document.getElementById("submit-input").value;
     const numberValueAdd = numberValue + num;
     const submitValue = document.getElementById("submit-input").value=numberValueAdd;
     return submitValue;
} 

//submit btn 
 const  clickSubmitBtn = document.getElementById("submit-Btn");
  clickSubmitBtn.addEventListener("click", function(){
     let getGenerateInput = document.getElementById("generate-input").value;
     let getGenerateInputs = parseFloat(getGenerateInput);
     let getSubmitInput = document.getElementById("submit-input").value;
     let getSubmitInputs = parseFloat(getSubmitInput);

     if(getSubmitInput == 0  ||  getGenerateInput == 0  ){
          document.getElementById("try-Left").innerText='generate Code first or  write code ';
          document.getElementById("try").style.display="none";
         }
     else if ( getSubmitInput > 10000 ||  getSubmitInput < 1000 ){
          document.getElementById("try-Left").innerText='write minimum 4 char ,  ';
          document.getElementById("submit-Btn").style.color="red";
          document.getElementById("try").style.display="none";
          document.getElementById("submit-Btn").disabled = true;    
          document.getElementById("clearBtn").style.backgroundColor= "grey";
     }
     else {
          if (getGenerateInputs == getSubmitInputs) {
               checkMatching();
           }
          else{
               checkTry();
          }
          }

})
//clear btn 
const clearBtn = document.getElementById("clearBtn");
 clearBtn.addEventListener("click", function(){
     const notMatcher =document.getElementById("not-Match");
     notMatcher.style.display="none";
     const matcher =document.getElementById("match");
     matcher.style.display="none";
     document.getElementById("submit-input").value = ' ';
     document.getElementById("try-Left").innerText='try left';
     document.getElementById("try").style.display="inline";
     document.getElementById("submit-Btn").style.color="white";
     document.getElementById("submit-Btn").disabled = false;        
     document.getElementById("clearBtn").style.backgroundColor= "#425062";
}
 )
 //remove last char 
 const removeBtn = document.getElementById("remove-btn");
 removeBtn.addEventListener("click", function(){
     let submitNumber = document.getElementById("submit-input").value;
     submitNumber = submitNumber.toString();
    const  x = submitNumber.substring(0, submitNumber.length - 1);
    document.getElementById("submit-input").value = x;
 }
 )
//
function checkMatching(){
     const matcher =document.getElementById("match");
     matcher.style.display="block";
     const matcherNot =document.getElementById("not-Match");
     matcherNot.style.display="none";
}
function checkTry(){
     const matcherNot =document.getElementById("not-Match");
     matcherNot.style.display="block";
     const matcher =document.getElementById("match");
     matcher.style.display="none";
     let getTryText = document.getElementById("try").innerText;
    let  totalChance = getTryText-1  ;
   let totalChanceValue =  document.getElementById("try").innerText= totalChance ;
   if(totalChance == 0){
document.getElementById("try").innerText= 'Start again , click generate Button' + ", " + totalChanceValue;
 document.getElementById("submit-Btn").disabled = true;
 document.getElementById("submit-Btn").style.color="red";

}}