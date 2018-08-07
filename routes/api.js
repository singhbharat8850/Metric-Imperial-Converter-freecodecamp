/* *
*
*       Complete the API routing below
*
* */

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    if (initNum == 'invalid number' && initUnit != 'invalid unit') {
      res.json(initNum);
    } else if (initUnit == 'invalid unit' && initNum != 'invalid number') {
      res.json(initUnit);
    } else if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      res.json('invalid number and unit');
    }

    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log(returnUnit);
    var spellout = convertHandler.spellOutUnit(returnUnit);
    var toString = convertHandler.getString(initNum, initUnit, returnNum, spellout);
    var myObj = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString
    }
    //res.json(toString);
    res.json(myObj);
  });

};
