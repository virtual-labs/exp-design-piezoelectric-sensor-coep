 var materialSelect,lengthSelect,thickSelect,widthSelect,matSel,length;
 
function config1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
 
      $("#centerText1").html('CONFIGURATION');
      $("#centerText2").html('DIAGRAM');
      
      
      var htm = '<img src="images/piezoTransducer.png " class="img-fluid" >'
      $("#canvas-div").html(htm);
      
      var selection  =''
        selection+='<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Length (mm) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="length" " style="height:auto;" disabled>'
	   +'<option value="0">--- Select length --- </option>'
	   +'<option value="5" >5  </option>'
//	   +'<option value="20">20  </option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'    
	    
	     +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Thickness(mm): </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="thick" " style="height:auto;" disabled>'
	   +'<option value="0">--- Select thickness --- </option>'
	   +'<option value="2" >2  </option>'
	   +'<option value="1.5">1.5 </option>'
	   +'<option value="1.25">1.25 </option>'
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'    
        
         +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select width (mm) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="width"  style="height:auto;" disabled>'
	   +'<option value="0">--- Select width --- </option>'
	   +'<option value="5" >5  </option>'
//	   +'<option value="20">20  </option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'    
        
        +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" data-toggle="modal" data-target="#myModal" disabled><b>CONFIGURE </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevelForConfig" hidden><b>NEXT LEVEL</b></button>'

	     +'<br>'  
	    
	      
	        
//	     + ' <!-- Modal -->'
//				+ '<div class="modal fade" id="selectCheck" role="dialog">'
//				+ ' <div class="modal-dialog modal-md">'
//				+ '    <div class="modal-content">'
//				+ '     <div class="modal-header">'
//				
//				+ '       <h4 class="modal-title">Message box</h4>'
//				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
//				+ '     </div>'
//				+ '     <div class="modal-body">'
//				+ '       <p id="modelMsg"></p>'
//				+ '     </div>'
//				+ '     <div class="modal-footer">'
//				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >OK</button>'
//				+ '     </div>'
//				+ '   </div>'
//				+ ' </div>'
//				+ '</div>'
//				+'</div>'
//				+ '</div>'
//				+ ' </div>'  
		$("#main-div-conf").html(selection);	
		
		
	 $("#material").change(function(){
		
	   materialSelect = $("#material").val();
//	   console.log(" material "+materialSelect);
	   if(materialSelect == 0){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Material type");
//		$("#modelMsg").html("select material type .");
	}
	   else if(materialSelect == 10){
		$("#material").prop("disabled",true);
		matSel = 'Barium titanate';
		 $("#thick").attr("disabled",false);
		 $("#length").attr("disabled",false);
		  $("#width").attr("disabled",false);
		   $("#checkConfg").attr("disabled",false);
		  
	}else if(materialSelect == 20){
		$("#material").prop("disabled",true);
		matSel = 'Quartz';
		 $("#thick").attr("disabled",false);
		 $("#length").attr("disabled",false);
		 
		  $("#width").attr("disabled",false);
		  $("#checkConfg").attr("disabled",false);
	}
//	console.log(" matSel "+matSel);
	    });
	    $("#length").change(function(){
		   length = parseInt($("#length").val());
//		   console.log(" length "+length);
	     });
	    $("#thick").change(function(){
	   thickSelect = parseFloat($("#thick").val());	   	   
//	   console.log("thick"+thickSelect);
	   });
	    $("#width").change(function(){
	   widthSelect = parseInt($("#width").val());	   	   
//	   console.log("width"+widthSelect);
	   });
	   
      
     var flgSec = 1;
     $("#checkConfg").click(function() {
	

	
	materialSelect = $("#material").val();
	lengthSelect = parseInt($("#dimension").val());
	 thickSelect = parseFloat($("#thick").val());
	 widthSelect = parseInt($("#width").val());
	   if(materialSelect==0){
		$("#errorPanel").prop("hidden",false);
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Material");
//		$("#modelMsg").html("<b class='boldTextRed'>Select material </b>");

	}else if(lengthSelect==0){
		$("#errorPanel").prop("hidden",false);
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select length");
//		$("#modelMsg").html("<b class='boldTextRed'>Select length </b>");

	}else if(thickSelect==0){
		$("#errorPanel").prop("hidden",false);
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select thickness");
//		$("#modelMsg").html("<b class='boldTextRed'>Select thickness</b>");

	}else if(widthSelect==0){
		$("#errorPanel").prop("hidden",false);
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select width");
//		$("#modelMsg").html("<b class='boldTextRed'>Select width</b>");

	}
//	else if(materialSelect == 0 && lengthSelelect == 0 && thickSelect == 0 && widthSelect==0 ){
//		$("#errorPanel").prop("hidden",false);
//		$(".modal-header").html("Error Message");
//			$(".modal-header").css("background","#9c1203b0");
//			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//			$("#MsgModal").html("<b>Select Appropriate Values</b>");
////		$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values</b>");
//
//	}
	else{
		$("#errorPanel").prop("hidden",true);

       

//		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#checkConfg").prop('hidden',true);
		
		var tempCountJson ={};
						tempCountJson.length = length; 
						tempCountJson.width = widthSelect; 
						tempCountJson.height = thickSelect; 
						counterMasterJson.stdCalculate = tempCountJson;
//						 console.log(counterMasterJson);
		
		
		$("#dimension").prop('disabled',true);
		$("#width").prop('disabled',true);
		$("#length").prop('disabled',true);
		$("#thick").prop('disabled',true);		
		$("#nextLevelForConfig").prop('hidden',false);
		
	selectedMaterialId=$("#material").children(":selected").attr("id");
	$("#material option[id="+selectedMaterialId+"]").attr("disabled",true);
	$("#material").prop('disabled',true);
	
	
	
	        $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Configured Successfully");
			
		
       
	
	
	}	 
$("#nextLevelForConfig").click(function() {
//		if(flgSec==1){
	
	                     
	    
	
			calculateVal();
			
			
//		}else{
//			$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values</b>");
//		}
	
	
	});
	
	
	});

	             
}