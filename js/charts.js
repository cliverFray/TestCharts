export {drawCharts}

function drawCharts(){
    drawPieChart();
    drawAxisTickColors()
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
        'title':'What is the best',
        'width':300,
        'height':400
    };
    var chart =new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data,options);

    $(window).resize(function(){
        chart.draw(data,options);
    })
}

function drawAxisTickColors(){
    
}