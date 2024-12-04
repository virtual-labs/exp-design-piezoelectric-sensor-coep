function result(){
	$("#btnForModal").prop("hidden",true);
	$("#simDemo").prop("hidden",true);
	$("#pdfDownload").prop("hidden",false);
    $("#materialType").prop("hidden",false);
$('#labelType').text('');

function generatePDF() {
    // Select the div by its ID
    const element = document.querySelector("#main-div");

    // Use html2canvas to capture the element as a canvas
    html2canvas(element, {
        scale: 3,  // Increase the scale for better resolution (adjustable)
        useCORS: true // In case of cross-origin issues with external resources like images
    }).then(function (canvas) {
        // Convert the canvas to image data in PNG format
        const imgData = canvas.toDataURL("image/png", 1.0); // No compression

        // Initialize the PDF document in landscape mode ('l') and A4 size
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        
        // Define the width and height for the image to fit in the landscape A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Keep aspect ratio

        // Define the top margin (in mm)
        const topMargin = 10;

        // Check if the image height exceeds the landscape page height minus the top margin
        if (pdfHeight > pdf.internal.pageSize.getHeight() - topMargin) {
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight() - topMargin;

            // Loop over the content to fit into multiple pages in landscape
            while (position < canvas.height) {
                const pageData = canvas.getContext('2d').getImageData(0, position, canvas.width, canvas.height - position);

                // Create a new image element from the slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = canvas.width;
                pageCanvas.height = canvas.height - position < pageHeight ? canvas.height - position : pageHeight;
                pageCanvas.getContext('2d').putImageData(pageData, 0, 0);

                const imgData = pageCanvas.toDataURL('image/png', 1.0);  // Avoid compression
                
                pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, (pdfWidth * pageCanvas.height) / pageCanvas.width);

                position += pageHeight;

                if (position < canvas.height) {
                    pdf.addPage();
                }
            }
        } else {
            // If it fits on one page, simply add the image to the PDF in landscape with the top margin
            pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, pdfHeight);
        }

        // Save the generated PDF
        pdf.save("PiezoElectric_transducer_Report.pdf");
    });
}

// Set up the button click event to generate the PDF
$("#pdfDownload").on("click", function(){
    generatePDF();
});


	
var correctVal = (counterMasterJson.questionary.correctAnswer/6).toFixed(2);
var quesPercent = (correctVal*100).toFixed(1);
quesPercent = parseFloat(quesPercent);

//console.log(quesPercent);

var BariumCalculateActual = parseInt(counterMasterJson.barium.wrongForceRange)+parseInt( counterMasterJson.barium.wrongPressureCalculated)+parseInt(counterMasterJson.barium.wrongOutPutCalculated)+parseInt(counterMasterJson.barium.wrongChargeCalculated);
//console.log("BariumCalculateActual : "+BariumCalculateActual);
var BariumCalculate = 4/(BariumCalculateActual+4);
var bariumPercent = (BariumCalculate*100).toFixed(1);
bariumPercent = parseFloat(bariumPercent);

//console.log(bariumPercent);

var quartzCalculateActual = parseInt(counterMasterJson.Quartz.wrongAttemptForce)+ parseInt(counterMasterJson.Quartz.wrongPressureCalculated)+parseInt(counterMasterJson.Quartz.wrongOutPutCalculated)+parseInt(counterMasterJson.Quartz.wrongChargeCalculated);
//console.log("quartzCalculateActual : "+quartzCalculateActual);
var quartzCalculate = 4/(quartzCalculateActual+4);
var quartzPercent = (quartzCalculate*100).toFixed(1);
quartzPercent = parseFloat(quartzPercent);
//console.log(quartzPercent);

var sub = counterMasterJson.sensorTesting.totalCnt - counterMasterJson.sensorTesting.sensorBreakTesting;
var testingPercent = (100*sub/counterMasterJson.sensorTesting.totalCnt).toFixed(1);
testingPercent = parseFloat(testingPercent);
//console.log(testingPercent);


var totPercent = ((parseFloat(bariumPercent)+parseFloat(quartzPercent)/2)).toFixed(1);
totPercent = parseFloat(totPercent);
//console.log(totPercent);	
	
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
	+ ' <div class="panel-body remark" style="font-size:18px;"><center><b>Piezoelectric transducer experiment completed successfully!!</b>'
//	+ '<br> <b>Satisfactory performance</b></center>
	 +'</div>'
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
	+ '<label class=""><b>Thickness : '+counterMasterJson.testingParameters.height+'mm</b></label>'
	+ '</div>'
	+ ' </div>'
	+ ' </div>'

    
   +'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY (PIEZOELECTRIC SENSOR)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic Knowledge</center></td>'
		   if(quesPercent>=60){
		   htm += '     <td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'

		}
		   htm += '  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		   +' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Calculation</center></td>'
		  if(totPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		  }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'

		}
		   htm +='  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Standard Observations</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		     +'  <tr>'
		+'<td class=""><center>Actual Observations</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Testing</center></td>'
		  if(testingPercent>=60){
		   htm += '<td class=""><center class="attained"> Attained</center></td>'
		  }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'

		}
		   htm +='  </tr>'
			
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
		+'<center><span class="heading1"><b>Basic Knowledge </b></span></center>'
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
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Standard calculations for barium titinate</b></span></center></div>'
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
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Standard calculations for quartz</b></span></center></div>'
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
	exporting: { enabled: false },
				credits: { enabled: false},
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
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