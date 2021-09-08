module.exports=(usage)=>{ 
    var newArry=usage.split(",");
      console.log(newArry);
    var numCall=[];
     var numSms=[];
      for (var i=0;i<newArry.length;i++){
          var pass=newArry[i].trim();
       if (pass.includes("cal")){
        
         numCall.push(pass);
    
        }
        else if (pass.includes("sm")){
          numSms.push(pass);    
                 }
      }
    numCall=numCall.length;
    numSms=numSms.length;
    var totalCost=numCall*2.75+numSms*0.65;
    var dec=totalCost.toFixed(2);
    return "R"+dec;
    }