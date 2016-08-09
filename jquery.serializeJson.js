/**
 * jQuery plugin to serialize all inputs decending from an
 * HTMLElement
 *
 * @author Jan-Christian Nikles (j_nikles@web.de)
 * @since 2016-05-12
 *
 */
$.fn.serializeJson = function () {
  var inputs, select, textAreas, result, date, $input, name;

  inputs = this.find("input");
  selects = this.find("select");
  textAreas = this.find("textarea");
  result = {};

  inputs.each(function (index, input) {
    $input = $(input);
    name = $input.attr("name");

    switch(input.type) {
      case 'password':
      case 'text':
        addToResult(name, $input.val());
        break;
      case 'date':
        date = new Date($input.val());
        addToResult(name, date);
        break;
      case 'checkbox':
        addToResult(name, $input.is(":checked"));
        break;
      case 'number':
        addToResult(name, parseInt($input.val()));
    }
  });

  selects.each(function (index, select) {
    $input = $(select);
    name = $input.attr("name");
    addToResult(name, $input.val());
  });

  textAreas.each(function (index, area) {
    $input = $(area);
    name = $input.attr("name");
    addToResult(name, $input.val());
  });

  /**
   * Helper function for adding data to the result set
   * If key is already given, it will convert the field
   * into an array
   * 
   * @param {string} key
   * @param {*} value
   */
  function addToResult (key, value) {
    var resultValue;

    resultValue = result[key];

    if ($.isArray(resultValue)) {
      result[key].push(value);
    } else if (result.hasOwnProperty(key)) {
      result[key] = [resultValue];
      result.push(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};
