let txtInp = document.getElementById("txtinp");
let charInp = document.getElementById("charinp");
let wordInp = document.getElementById("wordinp");

txtInp.addEventListener("input", function () {

  let txtInpValue = txtInp.value;

  /*trim fncn is used to exclude extra spaces from beginning and from end it does not exclude spaces given in between sentences*/ 

  txtInpValue = txtInpValue.trim();

  /* here we are using replace funcn to skip count of spaces we add in sentence also giving two backslash (//)
  with g is syntax which means whatever will be written in between two slashes it will change or replace that
  value with the value given after comma(,) also here 'g' means global modifier */

  txtInpValueRep = txtInpValue.replace(/ /g,""); 
  charInp.value = txtInpValueRep.length;

  // new variable to count number of spaces in our text.
  let wordCount = 0;                         

  //Split the word on each space character
  let txtInpValueSplit = txtInpValue.split(" ");    
  
    //loop through text and increase count
  for (i = 0; i < txtInpValueSplit.length; i++) { 
    
     //after space if there is some txt then increase the count
    if (txtInpValueSplit[i] != "") {               
      wordCount += 1;
    }
  }
  //show the count in word chracters input
  wordInp.value = wordCount;                        
});
