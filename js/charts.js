export {drawCharts}

function drawCharts(){
    drawPieChart();
    drawAxisTickColors();
    drawcombocharts();
    drawDonutChart();
}

function drawPieChart(){
    //create the data table
    const data=new google.visualization.DataTable();
    data.addColumn('string','Topping');
    data.addColumn('number','Slices');
    data.addRows([
        ['Fast',3],
        ['Cliver',4],
        ['Fray',4],
        ['Ingenier',3],
        ['Programer',3]
    ]);
    const options={
        'title':'What is the best'
    };
    var chart =new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data,options);

    $(window).resize(function(){
        chart.draw(data,options);
    })
}

function drawcombocharts() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05',  165,      938,         522,             998,           450,      614.6],
    ['2005/06',  135,      1120,        599,             1268,          288,      682],
    ['2006/07',  157,      1167,        587,             807,           397,      623],
    ['2007/08',  139,      1110,        615,             968,           215,      609.4],
    ['2008/09',  136,      691,         629,             1026,          366,      569.6]
  ]);

  var options = {
    title : 'Monthly Coffee Production by Country',
    vAxis: {title: 'Cups'},
    hAxis: {title: 'Month'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('combo_div'));
  chart.draw(data, options);
}
function drawDonutChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_div'));
    chart.draw(data, options);
  }

function drawAxisTickColors(){
    
}