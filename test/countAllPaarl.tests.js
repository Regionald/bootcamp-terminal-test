let assert = require("assert");
let countAllPaarl= require("../countAllPaarl");

describe("countAllPaarl", function () {
    it ("it should return 3 for ('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123')", function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it ("it should return 2 for ('CJ 345 123, CK 345, CJ 123')", function () {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    }

    );
    it ("it should return 0 for ('CM 345 123, CK 345, CC 123')", function () {
        assert.equal(0, countAllPaarl('CM 345 123, CK 345, CC 123'));
    }

    );
}
)