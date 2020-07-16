const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

it("should return name with correct format", () => {
  expect(formatFullname("JOHn dOe")).to.equal("John Doe");
  expect(formatFullname("jOHN dOE")).to.equal("John Doe");
  expect(formatFullname("john doe")).to.equal("John Doe");
});
it('should return an error if "fullName" arg is empty', () => {
  expect(formatFullname("")).to.equal("Error");
});

it('should return an error if "fullName" arg is not a string', () => {
  expect(formatFullname(20)).to.equal("Error");
  expect(formatFullname([])).to.equal("Error");
  expect(formatFullname({})).to.equal("Error");
  expect(formatFullname(function () {})).to.equal("Error");
  expect(formatFullname(undefined)).to.equal("Error");
});
