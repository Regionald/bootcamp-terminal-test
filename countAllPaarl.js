module.exports=function(regNum){ 
    var newArry=regNum.split(",");
      console.log(newArry);
    var print=[];
      for (var i=0;i<newArry.length;i++){
          var plate=newArry[i].trim();
       if (plate.includes('CJ')){
        
         print.push(plate);
    
        }    
      }
    return print.length;
    }