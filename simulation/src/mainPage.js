currentMasterJson={};
thicknessMasterJson={};
data = {};
dataJson = {};
currentArrayJson=[];
thicknessArrayJson=[];
var materialValue="";
var appCount=0;
var current="";
var materialSelection="";
var applicationSelection1="";
var applicationName="";
var fluxDensity;
var thickness=0;
var wrongCounter=0;
//mainpage function

 function mainPage (){

	
	 $('#applicationSelection').prop('hidden',false);
		$('#applicationType').prop('hidden',false);
	$("body").css("padding","0px 0px 0px 0px");
	
	
	var htm=''
	+'<div class="row">'
	   +'<div class="col-sm-6" id="labelMaterial" >'
	   +'<label class="labelstyle">Select material </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6" id="materialSelection1" >'

	   +'<select  class="form-control selectConf"  id="materialSelection" style="height:auto;" disabled >'
	   +'<option value="-1">--- Select material --- </option>'
	   +'<option value="0" id="As" >As  </option>'
	   +'<option value="1" id="Bi">Bi</option>'
	   +'<option value="2" id="C">C  </option>'
	   +'<option value="3" id="Cu">Cu  </option>'
	   +'<option value="4" id="Fe">Fe</option>'
	   +'<option value="5" id="Ge">Ge  </option>'
	   +'<option value="6"  id="Si">Si  </option>'
	   +'<option value="7" id="Sn">Sn</option>'
	   +'<option value="8" id="Te">Te  </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	
	
	
	
	+'<div class="row" id="fluxDensity">'
	+'</div>'
	    +'<br>'  
	   +'<div class="row " >'
	  
	   +'<div class="col-sm-6">'
	
	   +'<label class="labelstyle">Current ( ampere )</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="current" style="height:auto;" disabled >'
	   +'<option value="-1">--- Select Current --- </option>'
	   +'<option value="1" id="option1" >1.0  </option>'
	   +'<option value="1.5" id="option2"> 1.5</option>'
	   +'<option value="2"   id="option3">2.0 </option>'
	   +'<option value="2.5" id="option4" >2.5  </option>'
	   +'<option value="3"   id="option5">3.0</option>'
	   +'<option value="3.5" id="option6">3.5 </option>'
	   +'</select>'
	   +'</div>'
	  
	   +'</div>'
	  +'<br>'
	
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Thickness of the Hall element ( mm ) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="thickness" style="height:auto;"  disabled>'
	   +'<option value="-1">--- Select Thickness --- </option>'
	   +'<option value="1" id="optiont1" >1.0  </option>'
	   +'<option value="1.5" id="optiont2">1.5</option>'
	   +'<option value="2.0" id="optiont3">2.0 </option>'
	   +'<option value="2.5" id="optiont4">2.5  </option>'
	   +'<option value="3.0" id="optiont5">3.0</option>'
	   +'<option value="3.5" id="optiont6">3.5 </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	  
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns">'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" ><b>SIMULATION</b></button>'
	   
	      +'</div>'


	   +'</div>'
	  
	   + '<div class="row"  id="CalculateActualFlow" hidden>'
		   +'<div class=" col-sm-5">'
	       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Hall Sensor output (&micro;V) : </label>'
	       +'</div>'
           +'<div class="col-sm-4">'
	       +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	       +'</div>'
	       +'<div class="col-sm-3">'
	       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	       +'</div>'
	       +'</div>'
	      
	       + ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModal" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'
			
			+ '       <h4 class="modal-title" id="msgName">Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body" id="modelBody">'
			+ '       <p id="modelMsg">This is a small modal.</p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			//model Close
	
  $("#main-div-conf").html(htm);
	
	
			$( document ).ready(function() {
				if(appCount!=0)
				{
					
					$("#materialSelection").prop('disabled',true);
					 $('#fluxDensity').prop('disabled',true);
					
				}
				$("#checkConfg").prop('disabled',true);
			});
			
			$('#thickness').change(function(){
				$("#checkConfg").prop('disabled',false);
				
			});
			
			$('#current').change(function(){
				$("#checkConfg").prop('disabled',false);
				
			});
		$('#applicationSelection1').change(function(){
			applicationSelection=$('#applicationSelection1').val();
			$('#materialSelection').prop('disabled',false);
			
		});
		 $('#materialSelection').change(function(){
			 
			 materialValue=$("#materialSelection").children(":selected").attr("value");
			 
			 
			 if(materialValue==-1)
				 {
				 $("#modelMsg").html("<b class='boldTextRed'>Select Material Type</b> ");
				 }
			 else{
				 $('#thickness').prop('disabled',false);
				 $('#current').prop('disabled',false);
				 
				 materialValue=parseInt( $('#materialSelection').val());
//				 $('#fluxDensity').prop('hidden',false);
				 htm='<div class="col-sm-6">'
					 +'<label class="labelstyle">Flux density ( weber/m<sup>2</sup> ) </label>'
					 +'</div>'
					 +'<div class="col-sm-6" >'
					 +'<select  class="form-control selectConf"   style="height:auto;" id="fluxDensity1" >'
					  for(i=0;i<masterJsonArr[materialValue].range.length;i++){
						  htm+='<option value="'+masterJsonArr[materialValue].range[i]+'" >'+masterJsonArr[materialValue].range[i]+'  </option>'
					  } 
				     htm+='</select>'
				     +'</div>'
				     $('#fluxDensity').html(htm);
				 
			 }
			 
			 });
	  
	   $("#checkConfg").click(function(){
				   current=$("#current").val();
				   thickness=$("#thickness").val();
				   fluxDensity=$("#fluxDensity1").val();
				   materialIdName=$("#materialSelection").children(":selected").attr("id");
				   materialSelection= $("#materialSelection").val();
//				   material=$("#materialSelection").children(":selected").attr("id");
//				   console.log("material"+material);
				   
				   $("#checkConfg").prop('disabled',true);	
				   $("#applicationSelection1").prop('disabled',true);
				 
				   if(applicationSelection==1)
					   {
						   applicationName="CURRENT";
						   $("#materialSelection").prop('disabled',true);
						   $("#thickness").prop('disabled',true);
						   $("#fluxDensity1").prop('disabled',true);
						   $('#optionCurrent').prop('disabled',true);
						   $('#current').prop('disabled',true);
						   current1=$("#current").children(":selected").attr("id");
						   $("#current option[id="+current1+"]").css("background-color","#dacecf");
						   
						   $("#current option[id="+current1+"]").attr("disabled",true);
					   }
				   else if(applicationSelection==2)
				   {
					   applicationName="THICKNESS";
					   $("#materialSelection").prop('disabled',true);
					   $("#current").prop('disabled',true);
					   $("#fluxDensity1").prop('disabled',true);
					   $('#optionThinkness').prop('disabled',true);
					   $("#thickness").prop('disabled',true);
					   current1=$("#thickness").children(":selected").attr("id");
//					   console.log("current 1 thickness"+current1);
					   
						$("#thickness option[id="+current1+"]").attr("disabled",true);
						$("#thickness option[id="+current1+"]").css("background-color","#dacecf");
				   }
				  
		 
		   mimic();
		   $("#flowAns").val('');
			$("body").css("padding","0px 0px 0px 0px");
			
			
			 
	   });
	   
	   
	     var id=0;
		 var kh;
		 var t;
			  
		  $("#btnAnsCheck").click(function() {
			  $("#modelMsg").html("");
			  kh=0;
			  t=0;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#ans").val();
	
				if(materialSelection==0)
				{
					kh=4.52*Math.pow(10,-9);
				}
				else if(materialSelection==1)
				{
					kh=-1*Math.pow(10,-6);
				}
				else if(materialSelection==2)
				{
					kh=-11.73*Math.pow(10,-9);
				}
				else if(materialSelection==3)
				{
					kh=-52*Math.pow(10,-6);
				}
				else if(materialSelection==4)
				{
					kh=1.1*Math.pow(10,-9);
				}
				
				else if(materialSelection==5)
				{
					kh=-8*Math.pow(10,-3);
				}
				else if(materialSelection==6)
				{
					kh=4.1*Math.pow(10,-6);
				}
				else if(materialSelection==7)
				{
					kh=-2*Math.pow(10,-12);
				}
				else if(materialSelection==8)
				{
					kh=53*Math.pow(10,-6);
				}
				//Thinkness
				t=thickness*Math.pow(10,-3);
				
//				console.log("thinckness  "+t);
				temp12=kh*fluxDensity*current/t;
				
				temp123=temp12*Math.pow(10,6);
				finalAns=temp123.toFixed(4);
//				console.log("finalAns  "+finalAns);
				
//				console.log("KH   "+ kh);

				if(flowAns==""){
					
					$("#modelMsg").html("Enter numeric value ");
					
				}
				else
					{
					if(flowAns==""){
						
						$("#modelMsg").html("Enter numeric value ");
						
					}
					if (id <= 3) {
						if (flowAns == finalAns) {
							 $("#msgName").html("MESSAGE BOX ");
								$("#modelBody").css("color", "blue");
								 $("#modelBody").html("TAKE THE ANOTHER READING FOR "+applicationName+".");
							
//							 $("#modelBody").css("color", "#000");
//							$("#modelMsg").html("Change the "+applicationName);
							
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop('disabled',true);
							if(applicationSelection==1)
							{
							addtocurrentMasterJson();
							tableCreate(currentMasterJson);
							id=0;
							}
							else if(applicationSelection==2)
							{
								addtothicknessMasterJson();
								tableCreate(thicknessMasterJson);
								id=0;
							}
							
						} else if (flowAns != finalAns) {
							
							 $("#modelBody").css("color", "red");
						
						 $("#msgName").html("MESSAGE BOX ");
							$("#modelBody").css("color", "blue");
							$("#modelBody").html("Entered value is incorrect. Let us try again . ");
							
						
						}


					} else if (id == 4) {
						 $("#modelBody").css("color", "#000");
						 
						 $("#msgName").html("FORMULA ");

						 modelBody='<div class="col-sm-12 formula" > V<sub>H</sub> = K<sub>H</sub>BI/t</div>'
							 +'<span>Where ,</span><br>' 
						 +'<span>e -  hall voltage generated</span><br>'
						 +'<span>I - current (amperes)</span><br>'
						 +'<span>B -  Flux density (weber / m<sup>2</sup>)</span><br>'
						 +'<span>t - thickness of the hall element (meter)</span><br>'
						 +'<span>K<sub>H</sub>-  hall coefficient ( V-m/A-Wbm<sup>-2</sup>)</span><br>'
						 
						 $("#modelBody").html(modelBody);
						
//						$("#modelMsg").html(" ");
						
					} else {
						flowAns = $("#ans").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == finalAns) {
							
							
							$("#modelBody").css("color", "blue");
							$("#modelBody").html("TAKE THE ANOTHER READING FOR "+applicationName+".");
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop('disabled',true);
							if(applicationSelection==1)
							{
							addtocurrentMasterJson();
							tableCreate(currentMasterJson);
							id=0;
							}
							else if(applicationSelection==2)
							{
								addtothicknessMasterJson();
								tableCreate(thicknessMasterJson);
								id=0;
							}
							
						} else {
							 $("#msgName").html("MESSAGE BOX ");
							$("#modelBody").css("color", "blue");
							 $("#modelBody").html("Correct answer is " + finalAns);
							
							

						}
					}
					id++;
					}
				
					function addtocurrentMasterJson()
					{
							
						tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						currentArrayJson.push(tempJson);
						currentMasterJson.demo = currentArrayJson;
//						console.log(currentMasterJson);
//						tableCreate(masterJson);
						
					}
					function addtothicknessMasterJson()
					{
							
						tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						thicknessArrayJson.push(tempJson);
						thicknessMasterJson.demo = thicknessArrayJson;
//						console.log(thicknessMasterJson);
//						tableCreate(masterJson);
						
					}
				});
		 
	 
	  
}	
		
		
	   
