import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HighChartDemo';

 data = [{
    name: 'Ethans.com',
    data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
 },{
    name: 'EtlHive.com',
    data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
 },
 {
  name: '3RI.com',
  data: [877, 155, 677, 777, 155, 678, 888, 467, 785, 888, 467, 354]
 }
];

  chartOptionsBar = {
    chart: {
      type: "bar"
   },
   title: {
      text: "Monthly Site Visitor"
   },
   xAxis:{
      categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   },
   yAxis: {          
      title:{
         text:"Visitors"
      } 
   },
   series: this.data
  };

 chartOptionsLine = {   
  chart: {
     type: "spline"
  },
  title: {
     text: "Monthly Site Visitor"
  },
  xAxis:{
     categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yAxis: {          
     title:{
        text:"Visitors"
     } 
  },
  series: this.data
};

chartOptionsPie = {   
  chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: "pie"
  },
  title: {
    text: 'Browser market shares in January, 2019'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
        valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }]
}]
};

chartOptionsColumn = {   
  chart: {
     type: "column"
  },
  title: {
     text: "Monthly Site Visitor"
  },
  xAxis:{
     categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yAxis: {          
     title:{
        text:"Visitors"
     }, 
     stackLabels: {
      enabled: true,
      style: {
          fontWeight: 'bold',
          color: ( // theme
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
          ) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  plotOptions: {
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: true
        }
    }
 },
  series: this.data
};

 highcharts = Highcharts;
 
}
