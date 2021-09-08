let assert = require("assert");
let regCheck= require("../regCheck");

describe("regCheck",function(){
it ('it should return true for (DC 55 YU GP, GP)',function(){
    assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
})
it ('it should return false for (DC 55 YU GP, EC)',function(){
    assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
})
it ('it should return false for (DC 55 YU MP, GP)',function(){
    assert.equal(regCheck('DC 55 YU MP', 'GP'), false);
})
it ('it should return true for (DC 55 YU MP, MP)',function(){
    assert.equal(regCheck('DC 55 YU MP', 'MP'), true);
})

})