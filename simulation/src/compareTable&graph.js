
function compareTable(masterJson)		
{
	
	$("#material").prop("hidden",true);
	$("#labelType").prop("hidden",true);
	$("#materialType").prop("hidden",true);
	 
     
			 tableMainDiv =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'
					+ '   <th><center>Pressure P(Mn/m<sup>2</sup>)</center></th>'
					+ '  <th><center>Voltage output E<sub>0</sub> (V)</center> </th>'
                    + '  <th><center>Charge Q (pC)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<masterJson.quartz.length;i++,p++)
						{
						tableMainDiv +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.quartz[i].text1+'</td>'
							+'      <td>'+masterJson.quartz[i].text2+'</td>'
							+'      <td>'+masterJson.quartz[i].text3+'</td>'
							+'      <td>'+masterJson.quartz[i].text4+'</td>'
				
							+'    </tr>'
						}
				
						
	 		$("#centerText2").html('QUARTZ');
					 
				$("#canvas-div").html(tableMainDiv);				
//				$("#canvas-div").html("");
				tableMainDiv1 =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style= text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Force F(N)</center></th>'
					+ '   <th><center>Pressure P(Mn/m<sup>2</sup>)</center></th>'
					+ '  <th><center>Voltage output E<sub>0</sub> (V)</center> </th>'
                    + '  <th><center>Charge Q (pC)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<masterJson.barium.length;i++,p++)
						{
						tableMainDiv1 +='    <tr>'
							+'		<td><center>'+p+'</center></td>'
							+'      <td><center>'+masterJson.barium[i].text1+'</center></td>'
							+'      <td><center>'+masterJson.barium[i].text2+'</center></td>'
							+'      <td><center>'+masterJson.barium[i].text3+'</center></td>'
							+'      <td><center>'+masterJson.barium[i].text4+'</center></td>'
				
							+'    </tr>'
						}
				
						
	 		
				$("#centerText1").html('BARIUM TITANATE');	 
				$("#main-div-conf").html(tableMainDiv1);				
//				$("#canvas-div").html("");
//				$("#main-div-conf").html('');

                graphCreate(masterJson);
				graphCreate1(masterJson);
					$("#nextLevelChar").prop("hidden",false);
					
					
					$("#nextLevelChar").click(function(){
						charecterzation();
					});
					
}