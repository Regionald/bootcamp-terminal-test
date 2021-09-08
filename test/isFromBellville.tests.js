let assert = require("assert");
let isFromBellville= require("../isFromBellville");

describe('isFromBellville' , function(){
    it('1. it should return true if registration number start with CY ' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('* it should return true for registration number "CY 4525"' , function(){
        assert.equal(isFromBellville('CY 4525'), true);
    });
    it('* it should return true for registration number "CY 1890"' , function(){
        assert.equal(isFromBellville('CY 1890'), true);
    });
    it('2. it should return false if registration number does not start with CY ' , function(){
         assert.equal(isFromBellville('CJ 123'), false);
    });
    it('* it should return false for registration number "NU 4525"' , function(){
        assert.equal(isFromBellville('NU 4525'), false);
    });
    it('* it should return false for registration number "MP 1890"' , function(){
        assert.equal(isFromBellville('MP 1890'), false);
    });


});