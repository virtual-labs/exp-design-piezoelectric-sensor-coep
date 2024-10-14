 arrayJson=[];
masterJson={};
var labels1 = '';



var id1 = 1;
var id2 = 1;
var itr = 1;
function columnType(){
	
	var area = parseInt(areaSelect);
	console.log("areaSelect"+areaSelect);
	var mod = parseInt(modSelelect);
	console.log("modSelelect"+modSelelect);
	var pos = parseInt(poisonSelect);
	console.log("poisonSelect"+poisonSelect);
	
	
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
     $("#centerText2").html('CALCULATION');
      $("#centerText1").html('COLUMN TYPE LOAD CELL');
      var htm = '<img src="images/loadCellExplain.png " class="img-fluid" width = 90% height = 90%>'
      $("#main-div-conf").html(htm);
//      var loadValEnter = 0;
      render();
      var ax = 0;
	  var mul = 0;
	  var axial = 0;
	  var ax1 = 0;
      
      function render(){
     labels1 = ''
                   + '<div class="row"  >'
                    + '<div class="col-sm-1">'
	               
	               +'</div>'
                   + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Area is : '+areaSelect+'</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Modulus is : '+modSelelect+'</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Poison Ratio is : '+poisonSelect+'</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'
	               
	               +'</div>'
	               +'</div>'
	               +'<div class="row" id="appliedLoad" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Enter load applied(p):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load1" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				 
				   +'<div class="row" id="axialCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate axial strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<input type="text" value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load2" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
					+'</div>'
				   +'<div class="row" id="transverseCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate transverse strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
					+'<input type="text" value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				    +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load3" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
	                +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextReading" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT READING </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevel" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT LEVEL</b></button>'
        +'</div>'
	     +'<br>'  
						
					 $("#canvas-div").html(labels1);
		 }	
		 var axialCal = 0;
		 var axial = 0;
		 var arrWeight = [];
					 $("#submit_load1").click(function(){
						id1 = 1;
                        id2 = 1;
                        axial=$("#text1").val();
						ax1 = parseInt(axial);
                        const index = arrWeight.indexOf(ax1);
                   arrWeight.push(ax1);
					var hasDuplicate = arrWeight.some((ax1, i) => arrWeight.indexOf(ax1) !== i);
					
					console.log("hasDuplicate"+hasDuplicate);
					if(hasDuplicate == true){
						dupFlg = 0;
						
					   alert("Avoid Duplicates");
					  arrWeight.splice(index,1);
					  $("#submit_load1").prop('disabled',false);
						$("#text1").prop('disabled',false);
					}else{
						$("#nextLevel").prop('hidden',true); 
						$("#nextReading").prop('hidden',true);
						$("#submit_load1").prop('disabled',true);
						$("#text1").prop('disabled',true);
						$("#axialCalculation").prop('hidden',false);
						$("#text2").prop('disabled',false);
					    $("#submit_load2").prop('disabled',false);
					    
					     }
						
						});
						
						 
					       
						
						 $("#submit_load2").click(function(){
							text2 = $("#text2").val();
							
					            
					            mul = area*mod;
					            ax = ax1/mul;
//					      pointConv = ax.toFixed(3);
					axialCal = parseFloat(ax);
					console.log("ax"+ax);
						$("#nextLevel").prop('hidden',true);	
  
								if (id1 <= 3) {
				
				if (text2 == axialCal) {
					checkAns = 0;

					 $("#transverseCalculation").prop('hidden',false);
							  $("#text2").prop('disabled',true);
							   $("#submit_load2").prop('disabled',true);
							    $("#text3").prop('disabled',false);
							   $("#submit_load3").prop('disabled',false);
	
				} else if (text2 != axialCal) {
					
				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id1 == 4) {
				
				alert("formula : Volume of the float = P / AE");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text2 == axialCal) {
					checkAns = 0;
//					correct_cnt++;
					

					  $("#transverseCalculation").prop('hidden',false);
							  $("#text2").prop('disabled',true);
							   $("#submit_load2").prop('disabled',true);
							    $("#text3").prop('disabled',false);
							   $("#submit_load3").prop('disabled',false);
	
				} else {
					checkAns = 0;
					alert("correct answer is " + axialCal );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id1++;
							
						});
						
				
				var trans1 = 0;
				var transCal = 0;		
				var mulT = 0;
				
				var trans= 0;$("#text3").val();
					          
						
						 $("#submit_load3").click(function(){
							trans=$("#text1").val();
							text3 = $("#text3").val();
							console.log("Value of axial cal"+axialCal);
						trans1 = parseInt(trans);
					            
					            mulT = trans1*pos;
					            mul = area*mod;
					            transCal = mulT/mul;
					            console.log("transCal"+transCal);
					            
							 if (id2 <= 3) {
				
				if (text3 == transCal) {
					checkAns = 0;
					
							
							addFun();
					$("#submit_load3").prop('disabled',true);
					$("#text3").prop('disabled',true);
							
							if(itr<5)
							      {
								 $("#nextReading").prop('hidden',false);
								 $("#nextLevel").prop('hidden',true);
								  }else{
								$("#nextLevel").prop('hidden',false);
								$("#nextReading").prop('hidden',true);
								} 
								
							  itr++;
	                       
				} else if (text3 != transCal) {
					
				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id2 == 4) {
				
				alert("formula : Volume of the float = P*Pos / AE");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text3 == transCal) {
					checkAns = 0;
//					correct_cnt++;
					
							  
							  addFun();
							   $("#submit_load3").prop('disabled',true);
					             $("#text3").prop('disabled',true);
							  if(itr<5)
							      {
								 $("#nextReading").prop('hidden',false);
								 $("#nextLevel").prop('hidden',true);
								  }else{
								$("#nextLevel").prop('hidden',false);
								$("#nextReading").prop('hidden',true);
								} 
								
							  itr++;
							 
							 
	
				} else {
					checkAns = 0;
					alert("correct answer is " + transCal );
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id2++;					 
							 

							
						});
						
							$("#nextReading").click(function(){
								 $("#nextReading").prop('hidden',true);
                             if(itr<=5){
	                           $("#text1").prop('disabled',false);
					           $("#submit_load1").prop('disabled',false);
					           $("#axialCalculation").prop('hidden',true);
               				   $("#transverseCalculation").prop('hidden',true);
               				  
               				 $("#text1").val('');
	                         $("#text2").val('');
	                         $("#text3").val('');
                              }else{
	                         $("#nextReading").prop('hidden',true);
	                          $("#nextLevel").prop('hidden',false);
                              }
                              
				});			
						
			
				$("#nextLevel").click(function(){
					
					tableReading();
				  })
				
			    
			function addFun(){
				
				             tempJson={};
							 tempJson.text1 = ax1;
							 tempJson.text2 = axialCal;
							 tempJson.text3 = transCal;
							   arrayJson.push(tempJson);
							   masterJson.demo=arrayJson;
							   console.log(masterJson);
							   
			}
				
}