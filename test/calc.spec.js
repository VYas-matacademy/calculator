var should = require('should');
var calc = require('../app/main');


describe('string calculator', function () {
   it('should return 3 for 1+2', function () {
       should(calc.add("1+2")).equal(3);
   });

   it('should return 3 for (1+2)', function () {
       should(calc.add("(1+2)")).equal(3);
   });

   it('should return 3.1 for 1.1+2', function () {
    should(calc.add("1.1+2")).equal(3.1);
   });

   it('should return 2 for 3-1', function () {
    should(calc.add("3-1")).equal(2);
   });

   it('should return 2 for (3-1)', function () {
    should(calc.add("(3-1)")).equal(2);
   });

   it('should return 2.1 for 3.1-1', function () {
    should(calc.add("3.1-1")).equal(2.1);
   });

   it('should return 4 for 2*2', function () {
    should(calc.add("2*2")).equal(4);
   });

   it('should return 4 for (2*2)', function () {
    should(calc.add("(2*2)")).equal(4);
   });

   it('should return 4 for 2.1*2', function () {
    should(calc.add("2.1*2")).equal(4.2);
   });

   it('should return 0.5 for 1/2', function () {
    should(calc.add("1/2")).equal(0.5);
   });

   it('should return 0.5 for (1/2)', function () {
    should(calc.add("(1/2)")).equal(0.5);
   });

   it('should return 0.55 for 1.1/2', function () {
    should(calc.add("1.1/2")).equal(0.55);
   });

   it('should return 25.5 for 1/2 + 5 + 4*5', function () {
    should(calc.add("1/2 + 5 + 4*5")).equal(25.5);
   });

   it('should return 45.5 for 1/2 + (5 + 4) * 5', function () {
    should(calc.add("(1/2 + (5 + 4)) * 5")).equal(47.5);
   });

   it('should return 45.5 for 1/2    + (5 + 4) * 5', function () {
    should(calc.add("1/2    + (5 + 4) * 5")).equal(45.5);
   });

   it('should return 52.52 for 1/2 + (5.5 + 4.7) * 5.1', function () {
    should(calc.add("1/2 + (5.5 + 4.7) * 5.1")).equal(52.52);
   });

   it('should return 52.52 for -1/2 + (-5.5 - 4.7) * 5.1', function () {
    should(calc.add("-1/2 + (-5.5 - 4.7) * 5.1")).equal(-52.52);
   });

   it('should return 1.67 for 1+2/3" -> 1.67', function () {
    should(calc.add("1+2/3")).equal(1.67);
   });

   it('should return 1 for 1+2/45/78/78', function () {
    should(calc.add("1+2/45/78/78")).equal(1);
   });

   it('should return 0 for 0', function () {
    should(calc.add("0")).equal(0);
   });

   it('should return 18 for 18', function () {
    should(calc.add("18")).equal(18);
   });

   it('should return undefined for (1/2 + 5 + 4*5', function () {
    should(calc.add("(1/2 + 5 + 4*5")).equal(undefined);
   });

   it('should return undefined for 1/2 ++ 5 + 4) * 5', function () {
    should(calc.add("1/2 ++ 5 + 4) * 5")).equal(undefined);
   });

   it('should return undefined for [1/2] + 5 + 4 * 5', function () {
    should(calc.add("[1/2] + 5 + 4 * 5")).equal(undefined);
   });

   it('should return undefined for 1/2 >> 5 + 4) * 5', function () {
    should(calc.add("1/2 >> 5 + 4) * 5")).equal(undefined);
   });

   it('should return undefined for 1/2 + 5a + 4b * 5', function () {
    should(calc.add("1/2 + 5a + 4b * 5")).equal(undefined);
   });

   it('should return undefined for trololo', function () {
    should(calc.add("trololo")).equal(undefined);
   });
});