
 module.exports=function (list){
    var newSales={};
      for (var i=0;i<list.length;i++){
       var item=list[i];
       newSales[item.department]=0;
      }
      for (var i=0;i<list.length;i++){
          var item=list[i];
         var value=newSales[item.department];
          value += item.sales;
         newSales[item.department]=value;
      }
     
   console.log(newSales);
     var maxSale=0;
     var currentDep="";
     for (const Dep in newSales){
      const value=newSales[Dep];
       console.log(value);
       console.log(i);
       if (value>maxSale){
            maxSale=value;
            currentDep=Dep;
       }
     }
   console.log(maxSale);
   return currentDep;
   }
