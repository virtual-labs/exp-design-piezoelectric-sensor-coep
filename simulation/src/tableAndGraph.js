function tableAndGraph(){
	$("#tableDesign").remove();
	$("#referenceTable").remove();
	Table();
	Graph();
}

function Table(){	
	$("#centerText1").html("MEASUREMENT OF CURRENT");
	currentTable=' <table class="table  table-bordered table-hover">'
				 +'   <thead>'
				 +'     <tr class="tableHeader">'
				 +'       <th colspan="4"><center>MATERIAL TYPE  - '+currentMasterJson.demo[0].material+'</center></th>'
//				 +'       <th colspan="2">Measurement of Thinkness</th>'
				
				 +'     </tr>'
				 +'     <tr class="tableHeader">'
				 +'       <th>Current (ampere)</th>'
				 +'       <th>Thickness (mm)</th>'
				 +'       <th>fluxDensity</th>'
				 +'       <th>Voltage Output(V)</th>'
				 +'     </tr>'
				 +'   </thead>'
				 +'    <tbody>'
				 for (var i = 0; i < currentMasterJson.demo.length; i++) {
					 currentTable+=' <tr>'
				       +' <td style="color:red;">'+currentMasterJson.demo[i].current+'</td>'
				       +' <td>'+currentMasterJson.demo[i].thickness+'</td>'
				       +' <td>'+currentMasterJson.demo[i].fluxDensity+'</td>'
				       +' <td>'+currentMasterJson.demo[i].VoltageOutput+'</td>'
				       +' </tr>'
				 }  
	currentTable+='   </tbody>'
				+' </table>'
	
				$("#main-div-conf").html(currentTable);
	
	
	$("#centerText2").html("MEASUREMENT OF THICKNESS");
	
	currentTable=' <table class="table table-bordered table-hover">'
		 +'   <thead>'
		 +'     <tr class="tableHeader">'
		 +'       <th colspan="4"><center>MATERIAL TYPE -  '+thicknessMasterJson.demo[0].material+'</center></th>'
		 +'     </tr>'
		 +'     <tr class="tableHeader">'
		 +'       <th>Thickness (mm)</th>'
		 +'       <th>Current (ampere)</th>'
		 +'       <th>fluxDensity</th>'
		 +'       <th>Voltage Output(V)</th>'
		 
		 +'     </tr>'
		 +'   </thead>'
		 +'    <tbody>'
		 for (var i = 0; i < thicknessMasterJson.demo.length; i++) {
			 currentTable+=' <tr>'
				 +' <td style="color:red;">'+thicknessMasterJson.demo[i].thickness+'</td>'
		       +' <td>'+thicknessMasterJson.demo[i].current+'</td>'
		      
		       +'<td>'+thicknessMasterJson.demo[i].fluxDensity+'</td>'
		       +' <td>'+thicknessMasterJson.demo[i].VoltageOutput+'</td>'
		       +' </tr>'
		 }
currentTable+='   </tbody>'
		+' </table>'

		$("#canvas-div").html(currentTable);
}

function Graph(){
    var xdata=[];
	var ydata=[];
	var graphData1=[];
	for (var i = 0; i < currentMasterJson.demo.length; i++)
		 {
			xdata[i] = parseFloat(currentMasterJson.demo[i].current);
			ydata[i] = parseFloat(currentMasterJson.demo[i].VoltageOutput);
			
		}
	ydata.sort(function(a, b) { return a - b });
	xdata.sort(function(a, b) { return a - b });
	
	for (var j = 0; j < currentMasterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
//		console.log("xdata "+xdata);
//		console.log("ydata "+ydata);
//		
//		console.log("graphData1 "+graphData1);
		
//		console.log("After xdata "+xdata);
//		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
//		console.log("Xmax "+Xmax);
//		console.log("Ymax "+Ymax);
		Xmin = parseFloat(xdata[0]);
		Ymin = parseFloat(ydata[0]);
		
//		console.log("Xmin "+Xmin);
//		console.log("Ymin "+Ymin);
//		console.log(" graph data  " + graphData1);
		Highcharts.chart('Graph1', {
			title: {
				text: ' Current V/S Voltage Output  '
			},
			subtitle: {
				text: ''
			},
			 tooltip: {
		            formatter: function() {
		                return 'Current : '+ this.x+'</b><br/>Voltage : '+ this.y+'</b><br/>';
		                   
		            }
		        },
			xAxis: {
				min:Xmin,
				max: Xmax,
				title: {
					text: 'Current'
				}
			},
			yAxis: {
				min: Ymin,
				max: Ymax,
				title: {
					text: 'Voltage'
				}
			},
			series: [
				{
					type: 'scatter',
//					name: 'Standard value',
					data: [[Xmin,Ymin], [Xmax, Ymax]],
					marker: {
						enabled: false
					},
					states: {
						hover: {
							lineWidth: 0
						}
					},
					enableMouseTracking: false
				},

				{
					type: 'line',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
		var xdata=[];
		var ydata=[];
		var graphData1=[];
		for (var i = 0; i < thicknessMasterJson.demo.length; i++)
			 {
				xdata[i] = parseFloat(thicknessMasterJson.demo[i].thickness);
				ydata[i] = parseFloat(thicknessMasterJson.demo[i].VoltageOutput);
				
			}
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		for (var j = 0; j < thicknessMasterJson.demo.length; j++) {
				tempArr = [];
				tempArr[0] = xdata[j];
				tempArr[1] = ydata[j];
				graphData1.push(tempArr);

		}
//			console.log("xdata "+xdata);
//			console.log("ydata "+ydata);
//			
//			console.log("graphData1 "+graphData1);
//			
//			console.log("After xdata "+xdata);
//			console.log("After ydata "+ydata);
			Xmax = parseFloat(xdata[xdata.length - 1]);
			Ymax = parseFloat(ydata[ydata.length - 1]);
			
//			console.log("Xmax "+Xmax);
//			console.log("Ymax "+Ymax);
			Xmin = parseFloat(xdata[0]);
			Ymin = parseFloat(ydata[0]);
			
//			console.log("Xmin "+Xmin);
//			console.log("Ymin "+Ymin);
//			console.log(" graph data  " + graphData1);
			Highcharts.chart('Graph2', {
				title: {
					text: ' Thickness V/S Voltage Output  '
				},
				subtitle: {
					text: ''
				},
				 tooltip: {
			            formatter: function() {
			                return 'Thickness : '+ this.x+'</b><br/>Voltage : '+ this.y+'</b><br/>';
			                   
			            }
			        },
				xAxis: {
					min:Xmin ,
					max: Xmax,
					title: {
						text: 'Thickness'
					}
				},
				yAxis: {
					min: Ymin,
					max: Ymax,
					title: {
						text: 'Voltage'
					}
				},
				series: [
					{
						type: 'scatter',
//						name: 'Standard value',
						data: [[Xmin,Ymin], [Xmax, Ymax]],
						marker: {
							enabled: false
						},
						states: {
							hover: {
								lineWidth: 0
							}
						},
						enableMouseTracking: false
					},

					{
						type: 'line',
						name: 'Observation value',

						data: graphData1,
						marker: {
							radius: 4
						}
					}]

			});
			
			
//			console.log(masterJson);
//		
//		console.log(masterJson);

}

//}