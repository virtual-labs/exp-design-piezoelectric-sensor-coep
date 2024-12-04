var weightVal = 0;
var heightVal = 0;
var forceVal = 0;

var pressureValLast = 0;
var actForce = 0;
var masterJsn = {};
var masterArr = [];
var wrongSelect = 0;
var sensorBreakCnt = 0;
var cnt =0 ;

function piezoApp(){
	
	$("#centerText1").html('CONFIGURE SENSOR');
     $("#centerText2").html('MIMIC');
	
     var htm = '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Material : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="mtType" " style="height:auto;margin-bottom:14px;" >'
	   +'<option value="0">--- Select Material --- </option>'
	   +' <option value="10" id="BariumTitanate" >Barium titanate </option>'
	   +'<option value="20" id="Quartz">Quartz</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>' 
                
                +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Length (mm) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="length11" " style="height:auto;margin-bottom:14px;" >'
	   +'<option value="0">--- Select length --- </option>'
	   +'<option value="55.4" >55.4  </option>'
	   +'<option value="31.8" >31.8  </option>'
	   +'<option value="71.1" >71.1  </option>'
	   +'<option value="63.5" >63.5  </option>'
	    +'<option value="5" >5  </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	    
	     +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Thickness(mm): </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="thick11" " style="height:auto;margin-bottom:14px;" >'
	   +'<option value="0">--- Select thickness --- </option>'
	   +'<option value="0.46" >0.46  </option>'
	    +'<option value="0.74" >0.74  </option>'
	    +'<option value="0.51" >0.51  </option>'
	    +'<option value="0.71" >0.71  </option>'
	   +'<option value="0.83" >0.83  </option>'
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
        
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select width (mm) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="width11"  style="height:auto;margin-bottom:14px;" >'
	   +'<option value="0">--- Select width --- </option>'
	   +'<option value="23.4" >23.4  </option>'
       +'<option value="12.7" >12.7  </option>'
        +'<option value="25.4" >25.4  </option>'
         +'<option value="31.8" >31.8  </option>'
          +'<option value="5" >5  </option>'
    
	   +'</select>'
	   +'</div>'
	   +'</div>' 
	              
				   + '<div class="row">'
				   +'<div class="col-sm-4">'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<button id="checkConfigSensor" class="btn btn-danger" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top:6px;margin-bottom:15px;">Check Configuration</button>'

				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'</div>'
				   +'</div>' 
	   
	                + '<div class="row">'
				   +'<div class="col-sm-3">'
				   +'</div>'
				   +'<div class="col-sm-7">'
				   +'<label class="labelstyle badge bg-primary" style="margin-bottom:10px;" id = "infoLabel" hidden>Enter the value of Height between 1 to 100 cm</label>'

				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'</div>'
				   +'</div>' 
	   
	   
	               + '<div class="row">'
				   +'<div class="col-sm-6">'
				   +'<label class="labelstyle">Enter Height (cm) : </label>'
				   +'</div>'
				   +'<div class="col-sm-6">'
				   +'<input type="number" value="" id="heightRead" onblur = "heightSet();" style="height:auto;margin-bottom:14px;" class=" form-control" disabled/>'
				   +'</div>'
				   
				   +'</div>' 
               
                   + '<div class="row">'
				   +'<div class="col-sm-6">'
				   +'<label class="labelstyle">Enter Mass (kg) : </label>'
				   +'</div>'
				   +'<div class="col-sm-6">'
				   +'<input type="number" value="" id="weightRead"  onblur = "addWeight();" style="height:auto;margin-bottom:14px;" class=" form-control"  disabled/>'
				   +'</div>'
				   
				   +'</div>' 
	   

				   
				   +'<div class="col-sm-12" id="buttons">'
				    +'<div class="col-sm-3">'
				    +'</div>'
				    +'<div class="col-sm-3">'
				  +'<button id="startButton" class="btn btn-success" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top:10px;" disabled>Start</button>'
				   +'</div>' 
				   +'<div class="col-sm-1">'
				    +'</div>'
				    +'<div class="col-sm-3">'
				  +'<button id="stopButton" class="btn btn-info" style="width:100%;margin-top:10px;" disabled>Reset</button>'
				 +'<button id="nextResult" class="btn btn-danger" style="width:100%;margin-top:10px;" hidden>Result</button>'

				  +'</div>' 
				  +'<div class="col-sm-3">'
				  +'<button id="anotherSensor" class="btn btn-info"  style="width:100%;margin-top:10px;" hidden>Reselect</button>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				    +'</div>' 
				   +'</div>'
				 
				   $("#main-div-conf").html(htm);
				   
			   
				   $("#checkConfigSensor").click(function(){
					matTypeVal = parseInt($("#mtType").val());
					mimLen = parseFloat($("#length11").val());
					mimThick = parseFloat($("#thick11").val());
					mimWidth = parseFloat($("#width11").val());
					
					if(matTypeVal==0||mimLen==0||mimThick==0||mimWidth==0){
						$(".modal-header").html("Error Message");
						$(".modal-header").css("background","#9c1203b0");
						$("#btnModal").removeClass("btn-success").addClass("btn-danger");
						$("#MsgModal").html("Select the values");
					}else{
						
						if(mimLen==55.4 && mimThick==0.46 && mimWidth==23.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==55.4 && mimThick==0.74 && mimWidth==23.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==31.8 && mimThick==0.51 && mimWidth==12.7){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==55.4 && mimThick==0.71 && mimWidth==23.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==71.1 && mimThick==0.71 && mimWidth==25.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==63.5 && mimThick==0.51 && mimWidth==31.8){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==55.4 && mimThick==0.51 && mimWidth==23.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==55.4 && mimThick==0.83 && mimWidth==23.4){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}else if(mimLen==5 && mimWidth==5){
							$("#checkConfigSensor").prop("disabled",true);
							$("#heightRead").prop("disabled",false);
							$("#weightRead").prop("disabled",false);
							$("#mtType").prop("disabled",true);
							$("#infoLabel").prop("hidden",false);
					$("#length11").prop("disabled",true);
					$("#thick11").prop("disabled",true);
					$("#width11").prop("disabled",true);
					$("#startButton").prop("disabled",false);
						}
						else{
						$(".modal-header").html("Error Message");
						$(".modal-header").css("background","#9c1203b0");
						$("#btnModal").removeClass("btn-success").addClass("btn-danger");
						$("#MsgModal").html("Select appropriate dimensions");
						wrongSelect++;
						}
					}
				});
				   
				   var tabCnt = 0;
				   var mimLen,mimWidth,mimThick,matTypeVal,heightVal;
				   
				   var arrWeight = [];
				   $("#startButton").click(function(){
					
					cnt++;
					
					heightVal = $("#heightRead").val();
					weightVal = $("#weightRead").val();
					
					 if(heightVal==""||weightVal==""){
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the values");
					}else{
						
						
						
						
					 if (Number.isInteger(weightVal)) {
						weightVal = parseInt(weightVal);
					}else{
						weightVal = parseFloat(weightVal);
					}
					if (Number.isInteger(heightVal)) {
						heightVal = parseInt(heightVal);
					}else{
						heightVal = parseFloat(heightVal);
					}
					
					if(heightVal>100||heightVal<1){
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter value of height between 1 to 100 cm");
					}else{
					
					 const index = arrWeight.indexOf(heightVal);
			 arrWeight.push(heightVal);
			 var hasDuplicate = arrWeight.some((heightVal, i) => arrWeight.indexOf(heightVal) !== i);
//			 if(hasDuplicate == true){
//						dupFlg = 0;
//			$(".modal-header").html("Error Message");
//			$(".modal-header").css("background","#9c1203b0");
//			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//			$("#MsgModal").html("Avoid Duplicates");
//
//					  arrWeight.splice(index,1);
//					 
//					}else{
	                $("#heightRead").prop("disabled",true);
	                $("#weightRead").prop("disabled",true);
	                
					$("#startButton").prop("disabled",true);
					$("#stopButton").prop("disabled",false);	
					$("#infoLabel").prop("hidden",true);
					calculate();
					if(pressureValLast<=100){
					startAnim();
					$("#startButton").prop("disabled",true);
					setTimeout(function(){ 
					addTable();
					},2500);
					
					tmp ={};
				tmp.height = heightVal;
				tmp.weight = weightVal;
				tmp.actualForce = forceVal;
				tmp.observedForce = actForce;
				masterArr.push(tmp);
				masterJsn.demo = masterArr;
//				console.log(masterJsn);
					 
					tabCnt++;					
					}else{
					
						sensorBreak();
						setTimeout(function(){ 
						$("#anotherSensor").prop("hidden",false);
					 $("#stopButton").prop("hidden",true);		
					$("#startButton").prop("disabled",true);
					$("#heightRead").prop("disabled",true);
					$("#weightRead").prop("disabled",true);
					 },2500); 
					 
					 sensorBreakCnt++;
					 
					}	
					
					
					}
                  }
//                  }
				});
				 
				 $("#anotherSensor").click(function(){
					onLoad();
					$("#sub-main-div2").html('');
					masterArr = [];
					masterJsn = {};
					$("#infoLabel").prop("hidden",true);
					$("#anotherSensor").prop("hidden",true);
					$("#stopButton").prop("hidden",false);
					$("#stopButton").prop("disabled",true);
					$("#mtType").val(0);
					$("#mtType").prop("disabled",false);
					$("#length11").val(0);
					$("#length11").prop("disabled",false);
					$("#thick11").val(0);
					$("#thick11").prop("disabled",false);
					$("#width11").val(0);
					$("#width11").prop("disabled",false);
					$("#checkConfigSensor").prop("disabled",false);
					$("#heightRead").val(0);
					$("#heightRead").prop("disabled",true);
					$("#heightRead").val('');
					$("#heightRead").prop("disabled",true);
					$("#weightRead").val('');
					$("#weightRead").prop("disabled",true);
					
				});  
		 
				 $("#stopButton").click(function(){
					 $("#heightRead").prop("disabled",true);
	                $("#weightRead").prop("disabled",true);
					$("#startButton").prop("disabled",false);
					$("#stopButton").prop("disabled",true);
					$("#infoLabel").prop("hidden",false);
					onLoad();
//					if(pressureValLast<=100){
//						
//					addTable();
//					}else{
//						
//					}
					if(tabCnt<5){
					$("#startButton").prop("disabled",false);
					$("#heightRead").val('');
					$("#heightRead").prop("disabled",false);
					$("#weightRead").val('');
					$("#weightRead").prop("disabled",false);
					}else{
						
						var tempCountJson ={};
						tempCountJson.wrongConfig = wrongSelect; 
						tempCountJson.sensorBreakTesting = sensorBreakCnt; 
						tempCountJson.totalCnt = cnt;
						counterMasterJson.sensorTesting = tempCountJson;
						
						$("#stopButton").prop("hidden",true);
						$("#nextResult").prop("hidden",false);
						
						$("#startButton").prop("disabled",true);
						$("#heightRead").val(heightVal);
						$("#heightRead").prop("disabled",true);
						$("#weightRead").prop("disabled",true);
						$("#weightRead").val(weightVal);
					}
					
					 
					
				});
				  
				  $("#nextResult").click(function(){
					
					$("#main-div-conf").html("");
    			     $("#canvas-div").html("");
				     
				     $("#sub-main-div1").html('');
				     $("#sub-main-div2").html('');
				     
				     	
				     $("#centerText1").html('');
				     $("#centerText2").html('');
				     
				     var str = '';
				     
				     if(matTypeVal == 10){
		
		           str = 'Barium titanate';
		
		
	            }else if(matTypeVal == 20){
		           str = 'Quartz';
		
	              }
				     
				     
				     var tempCountJson ={};
				        tempCountJson.material = str;
						tempCountJson.length = mimLen; 
						tempCountJson.width = mimWidth; 
						tempCountJson.height = mimThick; 
						counterMasterJson.testingParameters = tempCountJson;
//						 console.log(counterMasterJson);
				     
				     
				     result();
				});
				   
			function calculate(){
				var h1 = (heightVal/100).toFixed(2);
				h1 = parseFloat(h1);
				var v1 = 2*9.8*h1;
				var v = Math.sqrt(v1);
				
				
				var m = weightVal/9.8;
				
				var deltaP = v*m;
				
				var f1 = deltaP/0.01;
				var f = f1.toFixed(2);
				forceVal = parseFloat(f);
				
               var area = (mimLen*mimWidth).toFixed(2);
               area = parseFloat(area);
               
               
				pressureValLast = (forceVal/area).toFixed(2);
               pressureValLast = parseFloat(pressureValLast);
               
                actForce = addRandomError(forceVal).toFixed(2);
				
				
				
			}	
			
//			sub-main-div2

           function addTable(){
			var htm11 = '<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Height (m)</center></th>'
					+ '   <th><center>Weight (kg)</center></th>'
					+ '  <th><center>Actual Force (N)</center> </th>'
                    + '  <th><center>Observed Force (N)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<masterJsn.demo.length;i++,p++)
						{
						htm11 +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJsn.demo[i].height+'</td>'
							+'      <td>'+masterJsn.demo[i].weight+'</td>'
							+'      <td>'+masterJsn.demo[i].actualForce+'</td>'
							+'      <td>'+masterJsn.demo[i].observedForce+'</td>'
				
							+'    </tr>'
						} 
					$("#sub-main-div2").html(htm11);		
			}			
						
		function addRandomError(variable) {
    // Generate a random percentage between 3 and 5
    var randomPercent = 3 + Math.random() * (5 - 3);
    
    // Randomly decide whether to add or subtract the percentage
    var errorFactor = Math.random() < 0.5 ? -1 : 1;

    // Calculate the new variable with the random error
    var newValue = variable * (1 + (errorFactor * randomPercent / 100));

    return newValue;
}  


}