let assert = require("assert");
let greet = require("../greet");

describe('greet' , function(){
    it('it should return hello Regi' , function(){
        assert.equal('Hello, Regi',greet('Regi'));
    });
    it('it should return hello Stan' , function(){
        assert.equal('Hello, stan',greet('stan'));
    });
    it('it should return "hello stranger" if no name is passed' , function(){
        assert.equal('Hello stranger',greet());
    });

});