Highcharts.setOptions({lang:{thousandsSep:","}});let chartId1=document.getElementById("chart-container-jobs-stock-market"),chartId2=document.getElementById("chart-container-jobs-stock-market-2");function drawHighcharts(){Highcharts.chart(chartId1,{chart:{type:"scatter",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0,spacingTop:20},title:{text:null},data:{googleSpreadsheetKey:"1koa-bO711pqegdZp2ecwEtnGIPJCYdvgu48NXI8HTQg",endRow:162,endColumn:1},plotOptions:{scatter:{lineWidth:1},series:{marker:{radius:3},states:{hover:{enabled:!1}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},title:{text:"S&P 500"},max:3501,min:500,gridLineWidth:1,tickLength:0,labels:{useHTML:!0,overflow:"allow",formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}}},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},max:15,min:3,tickAmount:5,title:{text:"Unemployment rate"}},credits:{enabled:!1},tooltip:{enabled:!1},annotations:[{labels:[{point:{xAxis:0,yAxis:0,x:1335.85,y:4.5},shape:"connector",text:"Sept. 2006",align:"right",y:-10,x:-10,padding:0},{point:{xAxis:0,yAxis:0,x:1036.19,y:10.1},shape:"connector",text:"Oct. 2009",align:"right",y:-10,x:-10,padding:0},{point:{xAxis:0,yAxis:0,x:2954.22,y:3.5},shape:"connector",text:"Feb. 2020",align:"left",x:20,padding:0}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}}),Highcharts.chart(chartId2,{chart:{type:"scatter",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0,spacingTop:20},title:{text:null},data:{googleSpreadsheetKey:"1koa-bO711pqegdZp2ecwEtnGIPJCYdvgu48NXI8HTQg",endColumn:1},plotOptions:{scatter:{lineWidth:1},series:{clip:!1,marker:{radius:3},states:{hover:{enabled:!1}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},title:{text:"S&P 500"},max:3501,min:500,gridLineWidth:1,tickLength:0,labels:{useHTML:!0,overflow:"allow",formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}}},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},max:15,min:3,tickAmount:5,title:{text:"Unemployment rate"}},credits:{enabled:!1},tooltip:{enabled:!1},annotations:[{labels:[{point:{xAxis:0,yAxis:0,x:1335.85,y:4.5},shape:"connector",text:"Sept. 2006",align:"right",y:-10,x:-10,padding:0},{point:{xAxis:0,yAxis:0,x:1036.19,y:10.1},shape:"connector",text:"Oct. 2009",align:"right",y:-10,x:-10,padding:0},{point:{xAxis:0,yAxis:0,x:2954.22,y:3.5},shape:"connector",text:"Feb. 2020",align:"left",x:20,padding:0},{point:{xAxis:0,yAxis:0,x:2912.43,y:14.7},shape:"connector",text:"April 2020",align:"right",y:20,x:-20,padding:0}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZDEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hhcnRJZDIiLCJkcmF3SGlnaGNoYXJ0cyIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0Iiwic3BhY2luZ0xlZnQiLCJzcGFjaW5nVG9wIiwidGl0bGUiLCJ0ZXh0IiwiZGF0YSIsImdvb2dsZVNwcmVhZHNoZWV0S2V5IiwiZW5kUm93IiwiZW5kQ29sdW1uIiwicGxvdE9wdGlvbnMiLCJzY2F0dGVyIiwibGluZVdpZHRoIiwic2VyaWVzIiwibWFya2VyIiwicmFkaXVzIiwic3RhdGVzIiwiaG92ZXIiLCJlbmFibGVkIiwibGVnZW5kIiwieEF4aXMiLCJsYWJlbHMiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJtYXgiLCJtaW4iLCJncmlkTGluZVdpZHRoIiwidGlja0xlbmd0aCIsInVzZUhUTUwiLCJvdmVyZmxvdyIsImZvcm1hdHRlciIsIm51bWJlckZvcm1hdCIsInRoaXMiLCJ2YWx1ZSIsInlBeGlzIiwidGlja0Ftb3VudCIsImNyZWRpdHMiLCJ0b29sdGlwIiwiYW5ub3RhdGlvbnMiLCJwb2ludCIsIngiLCJ5Iiwic2hhcGUiLCJhbGlnbiIsInBhZGRpbmciLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImNsaXAiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBUUFBLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUEsSUFBQUMsU0FBQUMsU0FBQUMsZUFBQSxxQ0FDQUMsU0FBQUYsU0FBQUMsZUFBQSx1Q0FHQSxTQUFBRSxpQkFDQVIsV0FBQVMsTUFBQUwsU0FBQSxDQUNBSyxNQUFBLENB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RUFtQixRQUFBLENBQ0FuQixTQUFBLEdBRUFvQixZQUFBLENBQUEsQ0FDQWpCLE9BQUEsQ0FBQSxDQUNBa0IsTUFBQSxDQUNBbkIsTUFBQSxFQUNBYyxNQUFBLEVBQ0FNLEVBQUEsUUFDQUMsRUFBQSxLQUVBQyxNQUFBLFlBQ0FyQyxLQUFBLGFBQ0FzQyxNQUFBLFFBQ0FGLEdBQUEsR0FDQUQsR0FBQSxHQUNBSSxRQUFBLEdBQ0EsQ0FDQUwsTUFBQSxDQUNBbkIsTUFBQSxFQUNBYyxNQUFBLEVBQ0FNLEVBQUEsUUFDQUMsRUFBQSxNQUVBQyxNQUFBLFlBQ0FyQyxLQUFBLFlBQ0FzQyxNQUFBLFFBQ0FGLEdBQUEsR0FDQUQsR0FBQSxHQUNBSSxRQUFBLEdBQ0EsQ0FDQUwsTUFBQSxDQUNBbkIsTUFBQSxFQUNBYyxNQUFBLEVBQ0FNLEVBQUEsUUFDQUMsRUFBQSxLQUVBQyxNQUFBLFlBQ0FyQyxLQUFBLFlBQ0FzQyxNQUFBLE9BQ0FILEVBQUEsR0FDQUksUUFBQSxHQUNBLENBQ0FMLE1BQUEsQ0FDQW5CLE1BQUEsRUFDQWMsTUFBQSxFQUNBTSxFQUFBLFFBQ0FDLEVBQUEsTUFFQUMsTUFBQSxZQUNBckMsS0FBQSxhQUNBc0MsTUFBQSxRQUNBRixFQUFBLEdBQ0FELEdBQUEsR0FDQUksUUFBQSxNQUdBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBcEQsTUFBQSxDQUNBSSxhQUFBLElBRUFrQixPQUFBLENBQ0F3QixNQUFBLE9BQ0FILEdBQUEsSUFFQUgsUUFBQSxDQUNBbkIsU0FBQSxTQVFBLGFBQUF6QixTQUFBMEQsWUFBQSxnQkFBQTFELFNBQUEwRCxXQUNBdkQsaUJBRUFILFNBQUEyRCxpQkFBQSxtQkFBQXhEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5sZXQgY2hhcnRJZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWNvbnRhaW5lci1qb2JzLXN0b2NrLW1hcmtldFwiKTtcbmxldCBjaGFydElkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtY29udGFpbmVyLWpvYnMtc3RvY2stbWFya2V0LTJcIik7XG5cblxuZnVuY3Rpb24gZHJhd0hpZ2hjaGFydHMoKSB7XG4gICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkMSwge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdHlwZTogJ3NjYXR0ZXInLFxuICAgICAgICAgICAgc3R5bGVkTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwYWNpbmdCb3R0b206IDI1LFxuICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMDAsXG4gICAgICAgICAgICBzcGFjaW5nTGVmdDogMCxcbiAgICAgICAgICAgIHNwYWNpbmdUb3A6IDIwXG4gICAgICAgIH0sIFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzFrb2EtYk83MTFwcWVnZFpwMmVjd0V0bkdJUEpDWWR2Z3U0OE5YSThIVFFnJyxcbiAgICAgICAgICAgIGVuZFJvdzogMTYyLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiAxXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBiYXIgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYXR0ZXI6IHtcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDFcbiAgICAgICAgICAgIH0gLFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICAvLyBwbG90T3B0aW9uczoge1xuICAgICAgICAvLyAgICAgc2VyaWVzOiB7XG4gICAgICAgIC8vICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAvLyAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdTJlAgNTAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heDogMzUwMSxcbiAgICAgICAgICAgIG1pbjogNTAwLFxuICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDAsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiEwLCBvdmVyZmxvdzpcImFsbG93XCIsIGZvcm1hdHRlcjpmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEhpZ2hjaGFydHMubnVtYmVyRm9ybWF0KHRoaXMudmFsdWUsIDAsIFwiLlwiLCBcIixcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlZGl0cyB4QXhpcyB0aWNrc1xuICAgICAgICAgICAgLy8gZGF0ZVRpbWVMYWJlbEZvcm1hdHM6IHtcbiAgICAgICAgICAgIC8vICAgICB3ZWVrOiAnJWIuICVlJyxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB0aWNrSW50ZXJ2YWw6IDI0ICogMzYwMCAqIDEwMDAgKiA3XG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4OiAxNSxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIHRpY2tBbW91bnQ6IDUsXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdVbmVtcGxveW1lbnQgcmF0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBhZGRzIGNvbW1hcyB0byB0aG91c2FuZHNcbiAgICAgICAgICAgIC8vIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhbm5vdGF0aW9uczogW3tcbiAgICAgICAgICAgIGxhYmVsczogW3tcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4QXhpczogMCxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHg6IDEzMzUuODUsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhcGU6ICdjb25uZWN0b3InLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdTZXB0LiAyMDA2JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB5OiAtMTAsXG4gICAgICAgICAgICAgICAgeDogLTEwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCxcbiAgICAgICAgICAgICAgICAgICAgeDogMTAzNi4xOSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAuMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNoYXBlOiAnY29ubmVjdG9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnT2N0LiAyMDA5JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB5OiAtMTAsXG4gICAgICAgICAgICAgICAgeDogLTEwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCxcbiAgICAgICAgICAgICAgICAgICAgeDogMjk1NC4yMixcbiAgICAgICAgICAgICAgICAgICAgeTogMy41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaGFwZTogJ2Nvbm5lY3RvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ZlYi4gMjAyMCcsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICB4OiAyMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogLTE4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIEhpZ2hjaGFydHMuY2hhcnQoY2hhcnRJZDIsIHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcbiAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICBzcGFjaW5nQm90dG9tOiAyNSxcbiAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwLFxuICAgICAgICAgICAgc3BhY2luZ0xlZnQ6IDAsXG4gICAgICAgICAgICBzcGFjaW5nVG9wOiAyMFxuICAgICAgICB9LCBcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRLZXk6ICcxa29hLWJPNzExcHFlZ2RacDJlY3dFdG5HSVBKQ1lkdmd1NDhOWEk4SFRRZycsXG4gICAgICAgICAgICBlbmRDb2x1bW46IDFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIGJhciBjaGFydHMgb25seVxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgc2NhdHRlcjoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMVxuICAgICAgICAgICAgfSAsXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBjbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBsaW5lIGNoYXJ0cyBvbmx5XG4gICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIC8vICAgICBzZXJpZXM6IHtcbiAgICAgICAgLy8gICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgLy8gY2xpcDogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAvLyAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1MmUCA1MDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4OiAzNTAxLFxuICAgICAgICAgICAgbWluOiA1MDAsXG4gICAgICAgICAgICBncmlkTGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgdGlja0xlbmd0aDogMCxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6ITAsIG92ZXJmbG93OlwiYWxsb3dcIiwgZm9ybWF0dGVyOmZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSGlnaGNoYXJ0cy5udW1iZXJGb3JtYXQodGhpcy52YWx1ZSwgMCwgXCIuXCIsIFwiLFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVkaXRzIHhBeGlzIHRpY2tzXG4gICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgLy8gICAgIHdlZWs6ICclYi4gJWUnLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHRpY2tJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCAqIDdcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IDE1LFxuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgdGlja0Ftb3VudDogNSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1VuZW1wbG95bWVudCByYXRlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGFkZHMgY29tbWFzIHRvIHRob3VzYW5kc1xuICAgICAgICAgICAgLy8gZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIEhpZ2hjaGFydHMubnVtYmVyRm9ybWF0KHRoaXMudmFsdWUsMCwnLicsJywnKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGFubm90YXRpb25zOiBbe1xuICAgICAgICAgICAgbGFiZWxzOiBbe1xuICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCxcbiAgICAgICAgICAgICAgICAgICAgeDogMTMzNS44NSxcbiAgICAgICAgICAgICAgICAgICAgeTogNC41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaGFwZTogJ2Nvbm5lY3RvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1NlcHQuIDIwMDYnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6IC0xMCxcbiAgICAgICAgICAgICAgICB4OiAtMTAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB4OiAxMDM2LjE5LFxuICAgICAgICAgICAgICAgICAgICB5OiAxMC4xMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhcGU6ICdjb25uZWN0b3InLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdPY3QuIDIwMDknLFxuICAgICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6IC0xMCxcbiAgICAgICAgICAgICAgICB4OiAtMTAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB4OiAyOTU0LjIyLFxuICAgICAgICAgICAgICAgICAgICB5OiAzLjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNoYXBlOiAnY29ubmVjdG9yJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRmViLiAyMDIwJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIHg6IDIwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCxcbiAgICAgICAgICAgICAgICAgICAgeDogMjkxMi40MyxcbiAgICAgICAgICAgICAgICAgICAgeTogMTQuN1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhcGU6ICdjb25uZWN0b3InLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBcHJpbCAyMDIwJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB5OiAyMCxcbiAgICAgICAgICAgICAgICB4OiAtMjAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV0sXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDUwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIHg6IC0xOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgZHJhd0hpZ2hjaGFydHMoKTtcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZHJhd0hpZ2hjaGFydHMpO1xufSJdfQ==
