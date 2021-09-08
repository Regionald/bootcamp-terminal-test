module.exports=function(list){
    var array=[];
  for (var i=0;i<list.length;i++){
    var fruit=list[i];
   
    if (fruit.qty>20){ 
      array.push(fruit);
       }
  }
  return array;
  }