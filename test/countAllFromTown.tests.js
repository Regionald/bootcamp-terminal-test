let assert = require("assert");
let countAllFromTown= require("../countAllFromTown");

describe("countAllFromTown", function () {
    it ("it should return 3 for ('CL 124,CY 567,CL 345, CJ 456,CL 341','CL')", function () {
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it ("it should return 2 for ('CF 124,CY 567,CL 345, CF 456, CL 341','CF')", function () {
        assert.equal(2, countAllFromTown('CF 124,CY 567,CL 345, CF 456, CL 341','CF'));
    }

    );
}
)