let assert = require("assert");
let transportFee= require("../transportFee");

describe("transportFee",function(){
    it ("it should return R20 for morning shift",function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it ("it should return R10 for afternoon shift",function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })
    it ("it should return free for nightshift",function(){
        assert.equal(transportFee('nightshift'), 'free');
    })
})