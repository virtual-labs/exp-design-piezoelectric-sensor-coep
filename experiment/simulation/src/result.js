function result(){
	
	
	var correctVal = (counterMasterJson.questionary.correctAnswer/6).toFixed(2);
var quesPercent = (correctVal*100).toFixed(1);
quesPercent = parseFloat(quesPercent);

console.log(quesPercent);

var BariumCalculateActual = parseInt(counterMasterJson.barium.wrongForceRange)+parseInt( counterMasterJson.barium.wrongPressureCalculated)+parseInt(counterMasterJson.barium.wrongOutPutCalculated)+parseInt(counterMasterJson.barium.wrongChargeCalculated);
console.log("BariumCalculateActual : "+BariumCalculateActual);
var BariumCalculate = 4/(BariumCalculateActual+4);
var bariumPercent = (BariumCalculate*100).toFixed(1);
bariumPercent = parseFloat(bariumPercent);

console.log(bariumPercent);

var quartzCalculateActual = parseInt(counterMasterJson.Quartz.wrongAttemptForce)+ parseInt(counterMasterJson.Quartz.wrongPressureCalculated)+parseInt(counterMasterJson.Quartz.wrongOutPutCalculated)+parseInt(counterMasterJson.Quartz.wrongChargeCalculated);
console.log("quartzCalculateActual : "+quartzCalculateActual);
var quartzCalculate = 4/(quartzCalculateActual+4);
var quartzPercent = (quartzCalculate*100).toFixed(1);
quartzPercent = parseFloat(quartzPercent);
console.log(quartzPercent);

var sub = counterMasterJson.sensorTesting.totalCnt - counterMasterJson.sensorTesting.sensorBreakTesting;
var testingPercent = (100*sub/counterMasterJson.sensorTesting.totalCnt).toFixed(1);
testingPercent = parseFloat(testingPercent);
console.log(testingPercent);
	
	
var htm = ''
	+ '<div class="container-fluid">'
	+ '  <div class="row">'
	+ '<div class="col-md-4">'
	+ ' <div class="panel panel-danger headingPanel" >'
	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b> STANDARD CONFIGURATION </b></span></center></div>'
	+ '</div>'
	+ '</div>'

	+ '<div class="col-md-4">'
	+ ' <div class="panel remarkBground" >'
	+ ' <div class="panel-body remark" ><center style="    font-size: 16px;">Congratulations!!! <br> <b>Piezo electric transducer experiment is completed successfully!!</b>'
	+ '<br> <b>Satisfactory performance</b></center></div>'
	+ '</div>'
	+ '</div>'

	+ '<div class="col-md-4">'
	+ ' <div class="panel panel-danger headingPanel">'
	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>ACTUAL CONFIGURATION</b></span></center></div>'
	+ '</div>'
	+ ' </div>'
	+ ' </div>'

	+ ' <div class="row">'//row open
	+ '<div class="col-sm-12">'//col-12 open

	+ '<div class="col-sm-2">'
	+ '<label class=""><b>Length : '+counterMasterJson.stdCalculate.length+' mm</b></label>'
	+ '</div>'

	+ '<div class="col-sm-2">'
	+ '<label class=""><b>Width : '+counterMasterJson.stdCalculate.width+' mm</b></label>'
	+ '</div>'

	+ '<div class="col-sm-4">'
//	+ '<span class="heading1"><b>Graph</b></span>'
	+ '</div>'

	+ '<div class="col-sm-2">'
	+ '<span class="heading1"><b>Length : '+counterMasterJson.testingParameters.length+' mm</b></span>'
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '<span class="heading1"><b>Width : '+counterMasterJson.testingParameters.width+' mm</b></span>'
	+ '</div>'
	+ ' </div>'//col-12 close
	+ ' </div>'//row close


	+ '  <div class="row">'
	+ '<div class="col-sm-12">'

	+ '<div class="col-sm-4">'
	+ '<label class=""><b>Thickness : '+counterMasterJson.stdCalculate.height+' mm</b></label>'
	+ '</div>'
	+ '<div class="col-sm-4">'
//	+ '<label class=""><b>Thickness : mm</b></label>'
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '<label class=""><b>Material : '+counterMasterJson.testingParameters.material+' </b></label>'
	+ '</div>'
	
	+ '<div class="col-sm-2">'
	+ '<label class=""><b>Thickness : '+counterMasterJson.testingParameters.height+' mm</b></label>'
	+ '</div>'
	+ ' </div>'
	+ ' </div>'

    
    +'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY(PIEZO ELECTRIC SENSOR)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		   +' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Calculation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Observation</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Testing</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
			
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" style = "margin-top:10px;">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>TESTING PERFORMANCE </b></span></center>'
		
		+'</div>'
		+'</div>'
		
		 +'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Wrong Configuration</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">'+counterMasterJson.sensorTesting.wrongConfig+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		
		 +'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px; margin-top:15px;">'
		+'<center><span class="valueBox">Sensor Break</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">'+counterMasterJson.sensorTesting.sensorBreakTesting+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		 +'<div class="col-md-3"></div>'
		 +'<div class="col-md-6">'
		+' <div class="panel panel-danger " >'
		+'<center><span class="valueBox">Total Trials</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+counterMasterJson.sensorTesting.totalCnt+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		
		+' </div>'//closing of col 4
    
       
       +' <div class="row">'
		
       +'<div class="col-md-8">'
       +' </div>'
       
      
      
      
       +' </div>'
        +' </div>'
         +' </div>'
         
        
        +' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic knowledge </b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>6</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.questionary.correctAnswer+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		
		
		
		
		+'</div>'
//
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Standard Calculation for Barium Titinate</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+BariumCalculateActual+'</b></span></center>'
		+'</div>'
		+'</div>'
      
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>4</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Standard Calculation for Quartz</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+quartzCalculateActual+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>4</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		+' </div>'
		+' </div>'
        
         

$("#main-div").html(htm);

 





let initialData = [
    { name: 'Questionaries', y: quesPercent },
    { name: 'Barium Titinate', y: bariumPercent },
    { name: 'Quartz', y: quartzPercent },
    { name: 'Testing', y: testingPercent }
];

// Create the pie chart
let chart = Highcharts.chart('graph-div', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Observations'
    },
    series: [{
        name: 'Observed',
        colorByPoint: true,
        data: initialData
    }],
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %'
            }
        }
    }
});
	
	
	
}