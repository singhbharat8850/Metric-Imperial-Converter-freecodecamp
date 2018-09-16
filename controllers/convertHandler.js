/* *
*
*       Complete the handler logic below
*
* */

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isDoubleFraction(str) {
  var arr = str.split("/");
  return arr.length > 2;
}

function ConvertHandler() {
  this.getNum = function(input) {
    var arr = [
      'gal',
      'l',
      'mi',
      'km',
      'lbs',
      'kg',
      'GAL',
      'L',
      'MI',
      'KM',
      'LBS',
      'KG'
    ];
    var result;
    var tester = /^[A-Za-z]/
    for (let i = 0; i < arr.length; i++) {
      if (tester.test(input)) {
        result = 1;
        break;
      } else {
        var myArr = input.toLowerCase().split(/[a-z]/);
        if (isNumeric(eval(myArr[0]))) {
          if (isDoubleFraction(myArr[0])) {
            result = "invalid number";
          } else {
            result = eval(myArr[0]);
          }
        } else {
          result = "invalid number";
        }
      }
    }  
    return result;
  };

  this.getUnit = function(input) {
    var valid = [
      'gal',
      'l',
      'mi',
      'km',
      'lbs',
      'kg'
    ];
    var result = '';
    var arr = input.split(/([0-9]+)/);
    var myInput = arr[arr.length - 1];
    for (let i = 0; i < valid.length; i++) {
      if (myInput.toLowerCase() == valid[i]) {
        result = myInput;
        break;
      } else {
        result = "invalid unit";
      }
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result = '';
    var myUnit = initUnit.toLowerCase();
    switch (myUnit) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = '';
    var myUnit = unit.toLowerCase();
    switch (myUnit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = 0;
    var unit = initUnit.toLowerCase();
    switch (unit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
    }
    return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;
    return result;
  };

}

module.exports = ConvertHandler;
