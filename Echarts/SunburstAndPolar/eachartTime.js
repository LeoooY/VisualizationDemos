let source=require('./reshapeTimeData.js');
console.log(source);


function getEchartsData() {
  let data = [];
  let depth = 0;
  let days = 14;

  function getColor(val){
    if(val>20){
      return '#d600e8'
    }else if(val >5){
      return '#ea1717'
    }else if(val>2){
      return '#ff8500'
    }else if(val>0){
      return '#e6d045'
    }else{
      return 'rgba(0,0,0,0)'
    }
  }


  function makeData(data, isChild) {

    if (isChild && depth < days) {
      data[0] = {};

      // data[0].name = depth+1;
      data[0].name = 0;

      data[0].value = 10;
      data[0].itemStyle = {
        // color: 'yellow',
        color: getColor(source[i][depth+1].value[0]),
        // opacity: Math.random()
      };

      data[0].children = [];
      depth++;
      makeData(data[0].children, true)
    }
    if (depth >= days) {
      depth = 0;
    }



  }

  for (var i = 0; i < 24; i++) {
    data[i] = {}

    data[i].name = 0;

    data[i].value = 10;
    data[i].itemStyle = {
      // color: 'yellow',
      color:getColor(source[i][0].value[0])
      // opacity: Math.random()
    };

    data[i].children = [];
    makeData(data[i].children, true)
  }

  return JSON.stringify(data);
}


getEchartsData()