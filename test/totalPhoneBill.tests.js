let assert = require("assert");
let totalPhoneBill= require("../totalPhoneBill");

describe("TotalPhoneBill", function () {
    it ("it should return R7.45 for ('call, sms, call, sms, sms')", function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it ("it should return R3.40 for ('call, sms')", function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    }

    );
    it ("it should return R1.30 for ('sms, sms')", function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    }

    );
}
)