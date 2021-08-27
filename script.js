
const dateOfBirth = document.querySelector("#dob");

const luckyNumber = document.querySelector("#lucky-number");

const checkNumberBtn = document.querySelector("#check-number");

const outputDiv = document.querySelector("#output-div"); 

checkNumberBtn.addEventListener("click", checkbirthdayIsLucky)



function compareValues(sum,luckyNumber){
    //console.log(sum,luckyNumber);
    if(sum%luckyNumber===0){
        outputDiv.innerText=("Your birthday is lucky 😊")
    }else{
        outputDiv.innerText=("Your birthday is not lucky 😂")
    }
   }

   function checkbirthdayIsLucky()
   {
       var dob = dateOfBirth.value;
   
       var sum = calculateSum(dob);
   
       if(sum&&dob)
   
       compareValues(sum,luckyNumber.value)
       else
       {
         
           outputBox.innerText="Please enter both the fields "
       }
   }
   

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let index=0; index<dob.length; index++){
      sum = sum + Number(dob.charAt(index));
  }
  
return sum;
}

