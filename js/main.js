import { drawCharts } from "./charts.js";

//Load the visualization API and the corechart package.
google.charts.load('current',{'packages':['corechart']});

//set callback to run when the Google visualizacion API is loaded
google.charts.setOnLoadCallback(drawCharts);