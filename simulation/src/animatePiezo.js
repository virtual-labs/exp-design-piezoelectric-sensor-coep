function simulation(){
	
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');
     	
     $("#sub-main-div1").html('');
     $("#sub-main-div2").html('');
     
     $("#nextLevelChar").prop("hidden",true);
     
      var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


   
   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
                    
                     
//    var htAnim = 0;                 
//   if(heightVal>0 && heightVal<=10){
//	htAnim = 105;
//    }else if(heightVal>10 &&heightVal<=20){
//	htAnim = 110;  
//	}else if(heightVal>30 &&heightVal<=40){
//	htAnim = 115;  
//	}else if(heightVal>40 &&heightVal<=50){
//	htAnim = 120;  
//	}else if(heightVal>50 &&heightVal<=60){
//	htAnim = 125;  
//	}else if(heightVal>60 &&heightVal<=70){
//	htAnim = 130;  
//	} else if(heightVal>70 &&heightVal<=80){
//	htAnim = 140;  
//	}else if(heightVal>80 &&heightVal<=90){
//	htAnim = 145;  
//	}else if(heightVal>90 &&heightVal<=100){
//	htAnim = 150;  
//	} 
	
	
	 var upperRedPart = paper.path("M"+(x+159)+" "+(y+170)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+170)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});                  
     
                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
    var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                             
     
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

     
     var wt = paper.rect(x+152,y+60,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});
//     var wtTxt = paper.text((x+179),(y+htAnim-100),"5 kg").attr({'stroke' : '#000' , "font-size":"15px"});			
      
  } 
  function startAnim(){
	$("#canvas-div").html('');
	 var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


   
    var htAnim = 0;
    var pathTrans = 0;
    
     htAnim = 180-(heightVal/2);
     pathTrans = 20+(heightVal/2);

   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
   var upperRedPart = paper.path("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});
   

                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
   var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                             
     
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

//   if(heightVal>0 && heightVal<=10){  
  var wt = paper.rect(x+152,y+htAnim-113,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});
  var wtTxt = paper.text((x+179),(y+htAnim-100),weightVal+" kg").attr({'stroke' : '#000' , "font-size":"15px"});
   
	upperRedPart.animate({path: Raphael.transformPath("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z", 'T 0 '+(pathTrans))}, 1000);	
   upperBluePart.animate({path: Raphael.transformPath("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30", 'T 0 '+pathTrans)}, 1000);
                                      
         wt.animate({x: x+152, y: y+htAnim-110+(pathTrans)}, 1000);
         wtTxt.animate({   x: x+179,y: y+htAnim-95+(pathTrans)}, 1000); 
         
   
              setTimeout(function(){ 
	ftxt.remove();
	    rectAnim.animate({path: Raphael.transformPath("M"+(x+168)+" "+(y+230)+" l 0 -15 l 22.5 0 l 0 15 l 8.5 0 l -10 10 l -20 0 l -10 -10 l 8.5 0")},200)
             ftxt =  paper.text((x+275),(y+261),actForce).attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			

     
	},800);                    
}    
                          
 function sensorBreak(){
	
	$("#canvas-div").html('');
	 var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;
  
   
	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


    var htAnim = 0;
    var pathTrans = 0;
    
    htAnim = 180-(heightVal/2);
     pathTrans = 20+(heightVal/2);
   
   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
   var upperRedPart = paper.path("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});
   

                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
    var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                             
     
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

         var v1 = paper.text((x+317),(y+150),"") .attr({ 'stroke': 'red', 'fill': 'red', "font-size": "15px" });
         var v2 = paper.text((x+300),(y+170),"") .attr({ 'stroke': 'red', 'fill': 'red', "font-size": "15px" });

    var wt = paper.rect(x+152,y+htAnim-113,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});
  var wtTxt = paper.text((x+179),(y+htAnim-100),weightVal+" kg").attr({'stroke' : '#000' , "font-size":"15px"});
   
     
     
        var path = paper.path("M"+(x+180)+" "+(y+262)+"").attr({'stroke' : '#000','stroke-width': 1.3});
//      var path = paper.path("M"+(x+180)+" "+(y+262)+" l 3 3 l -3 3 l 3 2");
//     upperRedPart.click(function(){
	

	upperRedPart.animate({path: Raphael.transformPath("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z", 'T 0 '+(pathTrans))}, 1000);	
   upperBluePart.animate({path: Raphael.transformPath("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30", 'T 0 '+pathTrans)}, 1000);
                                      
         wt.animate({x: x+152, y: y+htAnim-110+(pathTrans)}, 1000);
         wtTxt.animate({   x: x+179,y: y+htAnim-95+(pathTrans)}, 1000); 
         
         
              setTimeout(function(){ 
	ftxt.remove();
	    rectAnim.animate({path: Raphael.transformPath("M"+(x+168)+" "+(y+230)+" l 0 -15 l 22.5 0 l 0 15 l 8.5 0 l -10 10 l -20 0 l -10 -10 l 8.5 0")},200)
             ftxt =  paper.text((x+260),(y+261),"1    ").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
        path.animate({path: Raphael.transformPath("M"+(x+180)+" "+(y+262)+" l 3 3 l -3 3 l 3 2", 'T 0 0')}, 200);
    
	},800); 
	
	setInterval(blinkTextColor, 800);
	setInterval(blinkTextColor1, 800);
//	}); 
	
	 function blinkTextColor() {
    // Get the current stroke color
    var currentColor = v1.attr('stroke');
   
    // Toggle between red and blue
    if (currentColor === 'red') {
        v1.attr({ 'stroke': 'blue', 'fill': 'blue', 'text': 'Sensor Design Pressure ' });
    } else {
        v1.attr({ 'stroke': 'red', 'fill': 'Sensor Design Pressure ' });
    }
//     if (currentColor1 === 'red') {
//        v2.attr({ 'stroke': 'blue', 'fill': 'blue', 'text': 'limit is 100MPa' });
//    } else {
//        v2.attr({ 'stroke': 'red', 'fill': 'limit is 100MPa' });
//    }

}

 function blinkTextColor1() {
    // Get the current stroke color
   
    var currentColor1 = v2.attr('stroke');
    // Toggle between red and blue
   
     if (currentColor1 === 'red') {
        v2.attr({ 'stroke': 'blue', 'fill': 'blue', 'text': 'limit is 100MPa' });
    } else {
        v2.attr({ 'stroke': 'red', 'fill': 'limit is 100MPa' });
    }

}
 
} 
 function onLoad(){
	
	$("#canvas-div").html('');
	  var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


   
   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
   var upperRedPart = paper.path("M"+(x+159)+" "+(y+170)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+170)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});
   

                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
    var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                             
     
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

     
     var wt = paper.rect(x+152,y+60,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});
	
	
}
 
 
 function heightSet(){
	
	$("#canvas-div").html('');
	 var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

     heightVal = $("#heightRead").val();
   
    var htAnim = 0;
    var pathTrans = 0;
                     

	 htAnim = 180-(heightVal/2);
//     pathTrans = 20+(heightVal/2);
	

   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
   var upperRedPart = paper.path("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});
   

                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
    var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});  
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

//   if(heightVal>0 && heightVal<=10){  
  var wt = paper.rect(x+152,y+htAnim-111,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});

  
}




function addWeight(){
	
	
	$("#canvas-div").html('');
	 var x=100,y=100;
     var paper = new Raphael(document.getElementById('canvas-div'));

    var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

     heightVal = $("#heightRead").val();
   
    var htAnim = 0;
    var pathTrans = 0;
     
     weightVal = $("#weightRead").val();                

	 htAnim = 180-(heightVal/2);
//     pathTrans = 20+(heightVal/2);
	

   
   var rectTopFix = paper.path("M"+(x+170)+" "+(y+120)+" l 0 -200 l 20 0 l 0 200 z")
                     .attr({'stroke':'#000','fill': '50-#c7c75f-#f7f7a3','stroke-width': 2});
   var upperRedPart = paper.path("M"+(x+159)+" "+(y+htAnim)+"  l -30 0 l 0 -80 l 100 0 l 0 80 l -31 0"+ 
                              +" " +"l 16 -9 l -70 0 z")
                              .attr({'stroke':'#000','fill': '50-#3b2d2d-red','stroke-width': 2});
   
   var upperBluePart = paper.path("M"+(x+160)+" "+(y+htAnim)+"l -16 -9 l 70 0 l -16 9 l 20 0"+
                                      +" "+"l 0 30 l -26 0 l 0 -15 l -25 0 l 0 15 l -26 0 l 0 -30")
                              .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2});
   

                              
   var lowerBluePartFix = paper.path("M"+(x+160)+" "+(y+230)+" l -20 0 l 0 30 l 15 0 l -10 10 l 69 0"+" "
                                 +" l -10 -10 l 15 0 l 0 -30 l -19 0 l -10 10 l -20 0 z")                           
                             .attr({'stroke':'#000','fill': '50-#0c08cf-#171313','stroke-width': 2}); 
                 
    var fixPlatform = paper.path("M"+(x+144)+" "+(y+270)+" l 10 -10 l -25 0 l 0 25 l -140 0  "+" "
                                 +"l -30 50 l 342 0 l -30 -50 l -40 0 l 0 -25 l -25 0 l 10 10 z")                           
                             .attr({'stroke':'#000','fill':'50-#383535-#cfc2c2'}); 
                     
    var fs1 =  paper.path("M"+(x+170)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});
                     
    var fs2 =  paper.path("M"+(x+206)+" "+(y-68)+" l -15 0 l 0 20 l 15 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                                           
                     
    var fixedSupportHorixontal = paper.path("M"+(x+35)+" "+(y-65)+" l 120 0 l 0 13 l -120 0 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'}); 
   
     var fixedSupport = paper.path("M"+(x+20)+" "+(y+310)+" l 0 -400 l 20 0 l 0 400 z")
                     .attr({'stroke':'#000','stroke-width': 1,'fill':'50-#383535-#cfc2c2'});                            
     
      var rectAnim = paper.path("M"+(x+170)+" "+(y+240)+"  l 0 -30 l 20 0 l 0 30 l -20 0")
                          .attr({'stroke':'#000','fill':'50-#a1d4aa-#4d7354'});
   
   
    var c1 = paper.circle((x+159),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c11 = paper.circle((x+159),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
            
     var c2 = paper.circle((x+200),(y-30),10).attr({'fill':'#91cf92','stroke':'#000','stroke-width': 2});
     var c22 = paper.circle((x+200),(y-30),5).attr({'fill':'#7e827e','stroke':'#000','stroke-width': 2});
                  
     var sensor = paper.path("M"+(x+171)+" "+(y+270)+" l 20 0 l 0 -8 l -20 0 z").attr({'stroke':'#000','fill':'#540404'});
     
     var conn = paper.path("M"+(x+218)+" "+(y+250)+" l 50 0 ").attr({'stroke':'#000','stroke-width': 4});
     
     var r1 = paper.rect(x+233,y+235,85,50,15).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#000" });

     var ftxt =  paper.text((x+275),(y+261),"00.00").attr({'stroke' : '#e3f702' , "font-size":"24px","font-family":"digital-clock-font"});			
     
     var forceTxt = paper.text((x+275),(y+220),"Force (N)").attr({'stroke' : '#000' , "font-size":"16px","font-weight":'bold'});			

//   if(heightVal>0 && heightVal<=10){  
  var wt = paper.rect(x+152,y+htAnim-113,55,30,10).attr({'stroke':'#000','stroke-width': 4,'fill':'#656970'});
  var wtTxt = paper.text((x+179),(y+htAnim-100),weightVal+" kg").attr({'stroke' : '#000' , "font-size":"15px"});
   
  
}
	

  