function charecterzation(){
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');
     	
     $("#sub-main-div1").html('');
     $("#sub-main-div2").html('');
     
     	
     $("#centerText1").html('BARIUM TITANATE');
     $("#centerText2").html('QUARTZ');
     
     
     var tableMainDiv =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'				
					+ '  <th><center>Calculated Output Voltage E<sub>0</sub> (V)</center> </th>'
                    + '  <th><center>Actual Output Voltage E<sub>0</sub> (V)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	 
//				 var calculatePanel = ''
//
//				   +'<div class="col-sm-12"  id="submitNextConfig">'
//				   if(iteration == 0){
//				  calculatePanel +='<br><button type="submit" class="btn btn-danger"  id="nextMaterial" style="width:100%;height:50%;margin-top: -6px;" hidden>SELECT ANOTHER MATERIAL</input>'
//				   +'</div>'
//				   }else{
//					calculatePanel += '<br><button type="submit" class="btn btn-danger"  id="compare" style="width:100%;height:50%;margin-top: -6px;" hidden>COMPARE WITH PREVIOUS MATERIAL</input>'
//
//				}
				for(i=0,p=1;i<masterJson.barium.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.barium[i].text1+'</td>'						
							+'      <td>'+masterJson.barium[i].text3+'</td>'							
				            +'      <td>'+masterJson.barium[i].ranOutput+'</td>'
							+'    </tr>'
						}
				        tableMainDiv+=   '</tbody>'
							+'</table>'
							 +'</div>'
						
	 		
					 
				$("#main-div-conf").html(tableMainDiv);				
//				$("#canvas-div").append(calculatePanel);
     
        
        
       var tableMainDiv1 =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'					
					+ '  <th><center>Calculated Output Voltage E<sub>0</sub> (V)</center> </th>'
					+ '  <th><center>Actual Output Voltage E<sub>0</sub> (V)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<masterJson.quartz.length;i++,p++)
						{
						tableMainDiv1 +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.quartz[i].text1+'</td>'							
							+'      <td>'+masterJson.quartz[i].text3+'</td>'
							+'      <td>'+masterJson.quartz[i].ranOutput+'</td>'				
							+'    </tr>'
						}
				
						tableMainDiv1+='</tbody>'
							+'</table>'
							 +'</div>'
//	 		$("#centerText2").html('QUARTZ');
					 
				$("#canvas-div").html(tableMainDiv1);		
                  quartzGraph();
                  btGraph();
           
           
           $("#nextLevelChar").click(function(){
	            simulation();
	            piezoApp();
});
           
                  
function btGraph(){
	
	var xdata = [];
var ydata = [];
var graphData1 = [];

var xdata1 = [];
var ydata1 = [];
var graphData2 = [];

for (var i = 0; i < masterJson.barium.length; i++) {
    xdata[i] = parseFloat(masterJson.barium[i].text1);
    ydata[i] = parseFloat(masterJson.barium[i].text3);
}

for (var j = 0; j < masterJson.barium.length; j++) {
    graphData1.push([xdata[j], ydata[j]]);
}

for (var i = 0; i < masterJson.barium.length; i++) {
//    xdata[i] = parseFloat(graphJson.demo[i].selectedLoad);
    ydata1[i] = parseFloat(masterJson.barium[i].ranOutput);
}

for (var j = 0; j < masterJson.barium.length; j++) {
    graphData2.push([xdata[j], ydata1[j]]);
}
 
 var maxStandard = Math.max.apply(null, ydata);
var maxStandardIndex = ydata.indexOf(maxStandard);
//var maxStandardPoint = [xdata[maxStandardIndex], maxStandard];

var maxObserved = Math.max.apply(null, ydata1);
var maxObservedIndex = ydata1.indexOf(maxObserved);
//var maxObservedPoint = [xdata1[maxObservedIndex], maxObserved];


const combinedData = xdata.map((x, index) => ({  
    x: x,  
    graphData1: graphData1[index],  
    graphData2: graphData2[index]  
}));  

// Sort the combined data based on x values  
combinedData.sort((a, b) => a.x - b.x);  

// Extract sorted values back into separate arrays  
const sortedXdata = combinedData.map(data => data.x);  
const sortedGraphData1 = combinedData.map(data => data.graphData1);  
const sortedGraphData2 = combinedData.map(data => data.graphData2); 
 
 
 Highcharts.chart('sub-main-div2', {
	exporting: { enabled: true },
				credits: { enabled: false},
    chart: {
        type: 'line'
    },
    title: {
        text: 'Observations'
    },
    xAxis: {
        title: {
            text: 'Force (N)'
        },
        // No need to specify categories if using x and y objects
    },
    yAxis: {
        title: {
            text: 'Output Voltage (V)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            marker: {
                enabled: true,
                radius: 4
            }
        }
    },
    tooltip: {
        enabled: true,
        shared: true,
        valueDecimals: 2
    },
    series: [{
        name: 'Standard',
        data: sortedGraphData1,  // First series data
        color: '#50c7d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }, {
        name: 'Observed',
        data: sortedGraphData2,  // Second series data
        color: '#8250d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }]
});
	
}                  

function quartzGraph(){        
var xdata = [];
var ydata = [];
var graphData1 = [];

var xdata1 = [];
var ydata1 = [];
var graphData2 = [];

for (var i = 0; i < masterJson.quartz.length; i++) {
    xdata[i] = parseFloat(masterJson.quartz[i].text1);
    ydata[i] = parseFloat(masterJson.quartz[i].text3);
}

for (var j = 0; j < masterJson.quartz.length; j++) {
    graphData1.push([xdata[j], ydata[j]]);
}

for (var i = 0; i < masterJson.quartz.length; i++) {
//    xdata[i] = parseFloat(graphJson.demo[i].selectedLoad);
    ydata1[i] = parseFloat(masterJson.quartz[i].ranOutput);
}

for (var j = 0; j < masterJson.quartz.length; j++) {
    graphData2.push([xdata[j], ydata1[j]]);
}
 
 var maxStandard = Math.max.apply(null, ydata);
var maxStandardIndex = ydata.indexOf(maxStandard);
//var maxStandardPoint = [xdata[maxStandardIndex], maxStandard];

var maxObserved = Math.max.apply(null, ydata1);
var maxObservedIndex = ydata1.indexOf(maxObserved);
//var maxObservedPoint = [xdata1[maxObservedIndex], maxObserved];


const combinedData = xdata.map((x, index) => ({  
    x: x,  
    graphData1: graphData1[index],  
    graphData2: graphData2[index]  
}));  

// Sort the combined data based on x values  
combinedData.sort((a, b) => a.x - b.x);  

// Extract sorted values back into separate arrays  
const sortedXdata = combinedData.map(data => data.x);  
const sortedGraphData1 = combinedData.map(data => data.graphData1);  
const sortedGraphData2 = combinedData.map(data => data.graphData2); 
 
 
 Highcharts.chart('sub-main-div1', {
	exporting: { enabled: true },
				credits: { enabled: false},
    chart: {
        type: 'line'
    },
    title: {
        text: 'Observations'
    },
    xAxis: {
        title: {
            text: 'Force (N)'
        },
        // No need to specify categories if using x and y objects
    },
    yAxis: {
        title: {
            text: 'Output Voltage (V)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            marker: {
                enabled: true,
                radius: 4
            }
        }
    },
    tooltip: {
        enabled: true,
        shared: true,
        valueDecimals: 2
    },
    series: [{
        name: 'Standard',
        data: sortedGraphData1,  // First series data
        color: '#50c7d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }, {
        name: 'Observed',
        data: sortedGraphData2,  // Second series data
        color: '#8250d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }]
});
        
 }    
}