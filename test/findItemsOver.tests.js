var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

let assert = require("assert");
let findItemsOver= require("../findItemsOver");

describe('finditemsOver' , function(){
    it("it should return [{name : 'pears', qty : 37},{name : 'bananas', qty : 27},] for items over 20 for itemlist ", function(){
        assert.deepEqual(results, findItemsOver(itemList,20));
    });
    it('it should return [] for items over 20 for itemlist2' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2,20));
    });
    it("it should return [{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}] for items over 20 for itemlist3" , function(){
        assert.deepEqual(results3, findItemsOver(itemList3,20));
    });

});