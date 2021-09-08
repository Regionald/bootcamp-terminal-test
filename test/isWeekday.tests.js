let assert = require("assert");
let isWeekday= require("../isWeekday");

describe("isWeekday",function(){
    it ("it should return true for Monday",function(){
        assert.equal(isWeekday('Monday'), true);
    })
    it ("it should return false for both Saturday and Sunday",function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    })
})