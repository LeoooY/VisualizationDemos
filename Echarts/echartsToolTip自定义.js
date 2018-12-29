formatter: function(params) {
  var result = '';
  params.forEach(function (item) {
      result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
  });
  return result;
}