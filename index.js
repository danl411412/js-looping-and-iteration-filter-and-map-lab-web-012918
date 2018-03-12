// Code your solution here:
function driversWithRevenueOver(arr, match) {
  return arr.filter(function (el) {
    return el.revenue >= match;
  })
}

function driverNamesWithRevenueOver(arr, match) {
  return driversWithRevenueOver(arr, match).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(arr, match) {
  return arr.filter(function(element) {
    var x;
    for(var y in match) {
      y = match[y] == element[y];
    }
    return y;
  });
}

function exactMatchToList(arr, match) {
  return exactMatch(arr, match).map(function(matched) {
    return matched['name'];
  })
}
