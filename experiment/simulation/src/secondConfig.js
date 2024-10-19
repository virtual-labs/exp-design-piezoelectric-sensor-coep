function reConfig(){
	
	$("#material").change(function(){
		  $('#compare').prop("hidden",true);
//		   $('#compare1').prop("hidden",true);
		materialSelect = $("#material").val();
		if(materialSelect == 10){
		
		matSel = 'Barium titanate';
		
		
	}else if(materialSelect == 20){
		matSel = 'Quartz';
		
	}
//      console.log("matSel"+matSel);
         itr = 1;
		calculateVal();
		
		
	})
}