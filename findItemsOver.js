module.exports=function(list,num){
    var array=[];
      for (var i=0;i<list.length;i++){
        var fruit=list[i];
        if (fruit.qty>num){
          array.push(fruit);
            }
      }
      return array;
    }