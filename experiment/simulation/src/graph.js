
	function graphCreate(masterJson)
	{
		
	var xdata=[];
	var ydata=[];
	
	var graphData1=[];
	
	for (var i = 0; i < masterJson.barium.length; i++)
	 {
		
		xdata[i] = parseFloat(masterJson.barium[i].text1);
		ydata[i] = parseFloat(masterJson.barium[i].text3);
		
	}
	for (var j = 0; j < masterJson.barium.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		Xmin  = parseFloat(xdata[0]);
		Ymin  = parseFloat(ydata[0]);
//		var maxPoint=0;
//		if(Xmax<Ymax)
//		{
//			maxPoint=Ymax;
//		}
//		else
//		{
//			maxPoint=Xmax;
//		}
		console.log(" Voltage output V/S charge  " + graphData1);
		Highcharts.chart('sub-main-div2', {
			title: {
				text: 'Barium Titanate '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: Xmin,
				max: Xmax,
				title: {
					text: 'Force (N)'
				}
			},
			yAxis: {
				min: Ymin,
				max: Ymax,
				title: {
					text: 'Output Voltage (V)'
				}
			},
			series: [
				{
					type: 'line',
					name: 'Standard value',
					data: [[Xmin, Ymin], [Xmax, Ymax]],
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
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
	}


function graphCreate1(masterJson)
	{
	
	var xdata=[];
	var ydata=[];
	
	var graphData1=[];
	
	for (var i = 0; i < masterJson.quartz.length; i++)
	 {
		
		xdata[i] = parseFloat(masterJson.quartz[i].text1);
		ydata[i] = parseFloat(masterJson.quartz[i].text3);
		
	}
	for (var j = 0; j < masterJson.quartz.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		Xmin  = parseFloat(xdata[0]);
		Ymin  = parseFloat(ydata[0]);
//		var maxPoint=0;
//		if(Xmax<Ymax)
//		{
//			maxPoint=Ymax;
//		}
//		else
//		{
//			maxPoint=Xmax;
//		}
		console.log(" Voltage output V/S charge  " + graphData1);
		Highcharts.chart('sub-main-div1', {
			title: {
				text: 'Quartz '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: Xmin,
				max: Xmax,
				title: {
					text: 'Force (N)'
				}
			},
			yAxis: {
				min: Ymin,
				max: Ymax,
				title: {
					text: 'Output Voltage (V)'
				}
			},
			series: [
				{
					type: 'line',
					name: 'Standard value',
					data: [[Xmin, Ymin], [Xmax, Ymax]],
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
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
	}

	
