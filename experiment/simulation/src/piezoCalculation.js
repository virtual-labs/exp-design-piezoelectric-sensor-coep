var masterJsonMaterial = {};
var masterJson = {};
var masterJson1 = {};
var arrayJson = [];
var arrayJson1 = [];
var id1 = 1;
 var itr = 1;
function calculateVal(){
	
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
     $("#centerText1").html('DIAGRAM');
     $("#centerText2").html('CALCULATIONS');
      $("#material").prop('disabled',true);
    
      

                 labels2 = '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Material : '+matSel+' </center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-2" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Length : '+length+'mm </center> </label>'
	               +'</div>'
	 
	                + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Thickness : '+thickSelect+'mm </center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Width : '+widthSelect+'mm </center> </label>'
	               +'</div>'

      $("#canvas-div").html(labels2);
      
				 var tableMainDiv =	'<div class="col-sm-12 ">'
			        + '<table class=" table table-bordered " ; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Material</center></th>'
					+ '  <th><center>Voltage Sensitivity g Vm/N</center></th>'
					+ '   <th><center>Permitivity &epsilon; F/m </center></th>'
					+ '  <th><center>Charge sensitivity, d pC/N</center> </th>'
                    + '  <th><center>Modulus of elasticity</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	                     + '    <tr>'
							+'		<td>1</td>'
							+'      <td>'+'Barium titanate'+'</td>'
							+'      <td>'+'12 &times 10<sup>-3</sup>'+'</td>'
							+'      <td>'+'12.5 &times 10<sup>-9</sup>'+'</td>'
							
							+'      <td>'+'150'+'</td>'
							+'      <td>'+'12 &times 10<sup>10</sup> N/m<sup>2</sup>'+'</td>'
				
							+'    </tr>'
							+'    <tr>'
							+'		<td>2</td>'
							+'      <td>'+'Quartz'+'</td>'
							+'      <td>'+'50 &times 10<sup>-3</sup>'+'</td>'
							+'      <td>'+'40.6 &times 10<sup>-12</sup>'+'</td>'
							+'      <td>'+'2'+'</td>'
				            +'      <td>'+'8.6 &times 10<sup>6</sup> N/m<sup>2</sup>'+'</td>' 
							+'    </tr>'
							//+'<br>'
							//+'<br>'
							+'</tbody>'
							+'</table>'
							 +'</div>'
	              +'</div>'
				$("#canvas-div").append(tableMainDiv);			
     
	              labels1 =   '<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Enter force F(N):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				 
				   +'<div class="col-sm-12" id="calculationVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate pressure P(Mn/m<sup>2</sup>):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<input type="text" value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				 
				   
				   +'<div class="col-sm-12" id="calOutputVoltage" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate voltage output E<sub>0</sub> :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<input type="text" value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				  
				   +'<div class="col-sm-12" id="calCharge" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate charge Q :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<input type="text" value="" id="text4"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load4" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
	                +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextReading" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT READING </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevel" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT LEVEL</b></button>'
        +'</div>'
	     +'<br>'  
		
		$("#canvas-div").append(labels1);
		
		var htm1 = '<img src="images/Ultrasonic-Piezoelectric-Transducer-1.png" class="img-fluid" >'
        $("#main-div-conf").html(htm1);
		
//		var forceVal = 0;
		var arrWeight = [];
		 $("#submit_load1").click(function(){
			 text1 = $("#text1").val();
			 if(text1 == ""){
			  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");	
			}else{
				text1 = parseFloat($("#text1").val());
			 const index = arrWeight.indexOf(text1);
			 arrWeight.push(text1);
			 var hasDuplicate = arrWeight.some((text1, i) => arrWeight.indexOf(text1) !== i);
			 if(hasDuplicate == true){
						dupFlg = 0;
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Avoid Duplicates");
//					   alert("Avoid Duplicates");
					  arrWeight.splice(index,1);
					  $("#submit_load1").prop('disabled',false);
						$("#text1").prop('disabled',false);
					}else{
						 if(text1 >= 1 && text1<= 50)
			  {
				id1 = 1;
				id2 = 1;
				id3 = 1;
			$('#calculationVal').prop("hidden",false);
			$('#submit_load1').prop("disabled",true);
			$('#text1').prop("disabled",true);
			$('#submit_load2').prop("disabled",false);
			$('#text2').prop("disabled",false);
			$('#submit_load2').prop("hidden",false);
			$('#text2').prop("hidden",false);
			 }else{
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Force between 1 to 50 (N)");
//				alert("Enter Force between 1 to 50");
			}
					}
			 

			}
		});
		
		var area, pressure, pres,pre;
		 $("#submit_load2").click(function(){
			area = length*widthSelect;
			pre = text1/area;
			pres = pre.toFixed(3);
			pressure = parseFloat(pres);
			console.log("pressure"+pressure);
			text2 = $("#text2").val();
			
			if(text2 == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				text2 = parseFloat($("#text2").val());
				if (id1 <= 3) {
				
				if (text2 == pressure) {
					checkAns = 0;

					$('#submit_load2').prop("disabled",true);
			$('#text2').prop("disabled",true);
			$('#calOutputVoltage').prop("hidden",false);
	        $('#submit_load3').prop("disabled",false);
			$('#text3').prop("disabled",false);
	  
				} else if (text2 != pressure) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	
					
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id1 == 4) {
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Formula : Pressure = F/A, where A = length &times; width</b>");
//				alert("formula : pressure P = F/A where A = length * width");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text2 == pressure) {
					checkAns = 0;
//					correct_cnt++;
					
                     $('#calOutputVoltage').prop("hidden",false);
					 $('#submit_load2').prop("disabled",true);
			$('#text2').prop("disabled",true);
			 $('#submit_load3').prop("disabled",false);
			$('#text3').prop("disabled",false);
			
	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + pressure);
//					alert("correct answer is " + pressure );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id1++;
			}
						
			
			
		});
		var gcal = 0;
		var outputV1 = 0;
		var outputV = 0;
		var outputVo = 0;
		var id2 = 1;
		 $("#submit_load3").click(function(){
			
			if(materialSelect == 10){
		gcal = 12*Math.pow(10, -3);
		
	        }else if(materialSelect == 20){
		gcal = 50*Math.pow(10, -3);
		
	        }
	        text3 = $("#text3").val();
			outputV1 = gcal*pressure*thickSelect;
			outputVo = outputV1.toFixed(3);
			
			
			outputV = parseFloat(outputVo);
			console.log("output voltage"+outputV);
			if(text3==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");	
			}else{
			text3 = parseFloat($("#text3").val());	
			if (id2 <= 3) {
				
				if (text3 == outputV) {
					checkAns = 0;

					$('#submit_load3').prop("disabled",true);
			$('#text3').prop("disabled",true);
			$('#calCharge').prop("hidden",false);	
			
	        
				} else if (text3 != outputV) {
					
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
					
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id2 == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Formula : voltage sensitivity &times; pressure &times; thickness  </b>");
//				alert("formula : voltage output = voltage sensitivity * pressure * thickness");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text3 == outputV) {
					checkAns = 0;
//					correct_cnt++;
					
                     
					 $('#submit_load3').prop("disabled",true);
			        $('#text3').prop("disabled",true);
	        $('#calCharge').prop("hidden",false);
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + outputV);
//					alert("correct answer is " + outputV );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id2++;			
			}
			
			
			});
		
		var charge = 0;
		var chargeVal = 0;
		var id3 = 1;
		
		
		$("#submit_load4").click(function(){
			text4 =$("#text4").val();
			
			if(materialSelect == 10){
		chargeVal = 150;
		console.log("chargeVal"+chargeVal);
	        }else if(materialSelect == 20){
		chargeVal = 2;
		console.log("chargeVal"+chargeVal);
	        }
			charge = chargeVal*text1;
			console.log("charge"+charge);
			if(text4==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");		
			}else{
			text4 = parseFloat($("#text4").val());
				if (id3 <= 3) {
				
				if (text4 == charge) {
					checkAns = 0;

					$('#submit_load4').prop("disabled",true);
			$('#text4').prop("disabled",true);
			if(itr<5){
			$('#nextReading').prop("hidden",false);	
				
			}else{
			 $('#nextLevel').prop("hidden",false); 		
			}
					
	        
				} else if (text4 != charge) {
					
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id3 == 4) {
				
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Formula : Charge = d &times; F</b>");
//				alert("formula : charge = d * F");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text4 == charge) {
					checkAns = 0;
//					correct_cnt++;
					
                     
					 $('#submit_load4').prop("disabled",true);
			$('#text4').prop("disabled",true);
			if(itr<5){
				$('#nextReading').prop("hidden",false);	
				
			}else{
			 $('#nextLevel').prop("hidden",false); 		
			}
	       
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + charge);
//					alert("correct answer is " + charge );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id3++;	
			}
			
			
			
			
		});
		
		
		
		
		$("#nextReading").click(function(){
			 $("#text1,#text2,#text3,#text4").val('');
	         
	         
	         $('#nextMaterial1').prop("hidden",false);
	         $('#calCharge').prop("hidden",true);
	        $('#calOutputVoltage').prop("hidden",true);
	         $('#submit_load1').prop("disabled",false);
			$('#text1').prop("disabled",false);
			$('#submit_load2').prop("hidden",true);
			$('#text2').prop("hidden",true);
			$('#submit_load3').prop("disabled",false);
			$('#text3').prop("disabled",false);
			$('#calculationVal').prop("hidden",true);
			$('#nextReading').prop("hidden",true);
			$('#submit_load4').prop("disabled",false);
			$('#text4').prop("disabled",false);
			  if(materialSelect == 10){
			 addFun();
			  }else{
			addFun1();	
			}
			 itr++;
			});
			
			
			
			$("#nextLevel").click(function(){
//				$('#compare1').prop("hidden",true);
				$('#nextLevel').prop("hidden",true);
//				$('#nextMaterial').prop("hidden",false);
				if(materialSelect == 10){
					
			$('#nextMaterial').prop("hidden",false);
			 addFun();
			  
			  }else{
			$('#nextMaterial').prop("hidden",false);
			addFun1();
			
			}
			if(iteration > 1){
				$('#compare').prop("hidden",false);
			}else{
				$('#compare').prop("hidden",true);
			}
			
				$('#submit_load4').prop("disabled",true);
			    $('#text4').prop("disabled",true);
			   
				});
			
      	function addFun(){          
							 
							   
							 tempJson={};
							 tempJson.text1 = text1;
							 tempJson.text2 = text2;
							 tempJson.text3 = text3; 
							 tempJson.text4 = text4; 
							 arrayJson.push(tempJson);
							 masterJson.barium=arrayJson; 
//							 masterJsonMaterial.material1 = masterJson; 
                           masterJson.barium.sort(function(a, b){
						  return a.text1 - b.text1;
						  });	
                              tableReading(masterJson);
//							   tableReading(masterJson);
							   console.log(masterJson);
							   
			}
			
		function addFun1(){
			tempJson={};
							 tempJson.text1 = text1;
							 tempJson.text2 = text2;
							 tempJson.text3 = text3; 
							 tempJson.text4 = text4; 
							 arrayJson1.push(tempJson);
							 masterJson.quartz=arrayJson1;
							 masterJson.quartz.sort(function(a, b){
						  return a.text1 - b.text1;
						  }); 
							 tableReading1(masterJson);	
//							 masterJsonMaterial.material2 = masterJson1; 
                             console.log(masterJson);
		}				
}