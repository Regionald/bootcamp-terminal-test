let assert = require("assert");
let yearsAgo= require("../yearsAgo");

describe("yearAgo",function(){
    it ("it should return 31 for 1990",function(){
        assert.equal((new Date().getFullYear() - 1990), yearsAgo(1990))
    });
    it ("it should return 21 for 2000",function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    });
})