let assert = require("assert");
let countRegNumber= require("../countRegNumber");

describe("countRegNumber",function(){
    it ("it shoud return 3 for ('CA 182736,CY 523519,CJ 812328')",function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    })
    it ("it shoud return 4 for ('CA 182736,CY 523519,CJ 812328,125 52 GP')",function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,125 52 GP'), 4);
    })
})