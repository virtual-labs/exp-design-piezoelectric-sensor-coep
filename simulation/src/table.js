var iteration = 0;

function tableReading(masterJson)
{
	console.log("before iteration val"+iteration);
//	$("#main-div-conf").html('');	
//     $("#canvas-div").html('');	
     
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('OBSERVATIONS');
      
      var htm = '<img src="images/piezoElectric.png " class="img-responsive" width = 90% height = 90%>'
      $("#main-div-conf").html(htm);
      
				var tableMainDiv =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'
					+ '   <th><center>Pressure P(MN/m<sup>2</sup>)</center></th>'
					+ '  <th><center>Voltage output E<sub>0</sub> (V)</center> </th>'
                    + '  <th><center>Charge Q (pC)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	 
				 var calculatePanel = ''

				   +'<div class="col-sm-12"  id="submitNextConfig">'
				   if(iteration == 0){
				  calculatePanel +='<br><button type="submit" class="btn btn-danger"  id="nextMaterial" style="width:100%;height:50%;margin-top: -6px;" hidden>SELECT ANOTHER MATERIAL</input>'
				   +'</div>'
				   }else{
					calculatePanel += '<br><button type="submit" class="btn btn-danger"  id="compare" style="width:100%;height:50%;margin-top: -6px;" hidden>COMPARE WITH PREVIOUS MATERIAL</input>'

				}
				for(i=0,p=1;i<masterJson.barium.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.barium[i].text1+'</td>'
							+'      <td>'+masterJson.barium[i].text2+'</td>'
							+'      <td>'+masterJson.barium[i].text3+'</td>'
							+'      <td>'+masterJson.barium[i].text4+'</td>'
				
							+'    </tr>'
						}
				
						
	 		
					 
				$("#main-div-conf").html(tableMainDiv);				
				$("#canvas-div").append(calculatePanel);
				
//				$("#submitNextConfig").click(function() {
//				    
//				  $("#material").prop('disabled',false);
//	                  
//				  
//				
//				});
				$("#nextMaterial").click(function() {
				console.log("iteration val"+iteration);
				     iteration++;
				      $("#material").prop('disabled',false);
				      $(window).scrollTop(0);
				reConfig();
				});
				
//				$("#compare").click(function() {
//					$("#main-div-conf").html('graph');	
//                    $("#canvas-div").html('table');	
//				});
				$("#compare").click(function() {
					 
					compareTable(masterJson);
					//graphCreate(masterJson);
				});
          
}
var tableMainDiv1,calculatePanel1;
function tableReading1(masterJson)
{
	console.log("before iteration val"+iteration);
//	$("#main-div-conf").html('');	
//     $("#canvas-div").html('');	
     
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('OBSERVATIONS');
      
//      var htm = '<img src="images/piezoElectric.png " class="img-responsive" width = 90% height = 90%>'
//      $("#main-div-conf").html(htm);
      
				 tableMainDiv1 =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'
					+ '   <th><center>Pressure P(MN/m<sup>2</sup>)</center></th>'
					+ '  <th><center>Voltage output E<sub>0</sub> (V)</center> </th>'
                    + '  <th><center>Charge Q (pC)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	 
				  calculatePanel1 = ''

				   +'<div class="col-sm-12"  id="submitNextConfig">'
				   if(iteration == 0){
				  calculatePanel1 +='<br><button type="submit" class="btn btn-danger"  id="nextMaterial" style="width:100%;height:50%;margin-top: -6px;" hidden>Select another material</input>'
				   +'</div>'
				   }else{
					calculatePanel1 += '<br><button type="submit" class="btn btn-danger"  id="compare" style="width:100%;height:50%;margin-top: -6px;" hidden>Compare with previous material</input>'

				}
				for(i=0,p=1;i<masterJson.quartz.length;i++,p++)
						{
						tableMainDiv1 +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.quartz[i].text1+'</td>'
							+'      <td>'+masterJson.quartz[i].text2+'</td>'
							+'      <td>'+masterJson.quartz[i].text3+'</td>'
							+'      <td>'+masterJson.quartz[i].text4+'</td>'
				
							+'    </tr>'
						}
				
					
	 		
					 
				$("#main-div-conf").html(tableMainDiv1);				
				$("#canvas-div").append(calculatePanel1);
				
//				$("#submitNextConfig").click(function() {
//				    
//				  $("#material").prop('disabled',false);
//	                  
//				  
//				
//				});
				$("#nextMaterial").click(function() {
					
				console.log("iteration val"+iteration);
				     iteration++;
				      $("#material").prop('disabled',false);
				      $(window).scrollTop(0);
				reConfig();
				});
				
				$("#compare").click(function() {
					compareTable(masterJson);
					
					//graphCreate1(masterJson);
				});
          
}


//function tableReading1(masterJson){
//	
//	$("#main-div-conf").html('');	
//     $("#canvas-div").html('');	
//     
//      $("#centerText2").html('CALCULATION');
//      $("#centerText1").html('CONFIGURATION');
//      
//      var htm = '<img src="images/piezoElectric.png " class="img-fluid" width = 90% height = 90%>'
//      $("#main-div-conf").html(htm);
//      
//       $("#centerText2").html('CALCULATION');
//      $("#centerText1").html('CONFIGURATION');
//      
//      var htm = '<img src="images/piezoElectric.png " class="img-responsive" width = 90% height = 90%>'
//      $("#main-div-conf").html(htm);
//      var tableMainDiv1 = '<div class="row ">'
//					+'<div class="col-sm-12">'
//			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
//					+ ' <thead>'
//					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
//					+ '  <th><center>Sr.No</center></th>'
//					+ '  <th><center>Force</center></th>'
//					+ '   <th><center>Pressure </center></th>'
//					+ '  <th><center>Voltage output E<sub>0</sub></center> </th>'
//                    + '  <th><center>Charge Q</center> </th>'
//					+ '   </tr>'
//					+ '  </thead>'
//					+ '   <tbody>'
//					
//	  var calculatePanel1 = ''
//
//				   +'<div class="col-sm-12"  id="submitNextConfig">'
//				   if(iteration == 0){
//				  calculatePanel1 +='<br><button type="submit" class="btn btn-danger"  id="nextMaterial1" style="width:100%;height:50%;margin-top: -6px;" >Select another material</input>'
//				   +'</div>'
//				   }else{
//					calculatePanel1 += '<br><button type="submit" class="btn btn-danger"  id="compare" style="width:100%;height:50%;margin-top: -6px;" >Compare with previous material</input>'
//
//				}
//
//           
//				var tableMainDiv1;   
//				for(i=0,p=1;i<masterJson.quartz.length;i++,p++)
//						{
//						tableMainDiv1+='    <tr>'
//							+'		<td>'+p+'</td>'
//							+'      <td>'+masterJson.quartz[i].text1+'</td>'
//							+'      <td>'+masterJson.quartz[i].text2+'</td>'
//							+'      <td>'+masterJson.quartz[i].text3+'</td>'
//							+'      <td>'+masterJson.quartz[i].text4+'</td>'
//				
//							+'    </tr>'
//						}
//				
//						
//	 		
//			$("#main-div-conf").html(tableMainDiv1);				
//				$("#canvas-div").append(calculatePanel);
//				
//				$("#submitNextConfig").click(function() {
//				    
//				  $("#material").prop('disabled',false);
//	                  
//				  
//				
//				});
//				$("#nextMaterial").click(function() {
//				console.log("iteration val"+iteration);
//				     iteration++;
//				     $("#material").prop('disabled',false);
//				reConfig();
//				});
//				
//				$("#compare").click(function() {
//					$("#main-div-conf").html('Graph  ');	
//                    $("#canvas-div").html('table');	
//				});
//				$("#submitNextConfig").click(function() {
//				    
//				  $("#material").prop('disabled',false);
//	                  reConfig();
//				    
//				
//				});
	


