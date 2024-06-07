 var circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8;


function mimic() {
	 $("#centerText2").html("SIMULATION");
	$('#canvas-div').html("");
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 900;
	var h = 800;
	
	var width = $(window).width();
	
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else{
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	x=500;
	y=50;
	var width = 200;
	var height = 200;
	cxlast=340;
	var magnaticfield = paper.image("images/magnaticfield.png", 378, 44, 70, 180).attr({opacity: 0});
    var t = paper.text(100, 140, "Click Here!").attr({'font-size': 16});
    
    
    
    
    
    
    var circle = paper.circle(100, 100, 20).attr({
    	gradient: '30-#000-#FF0000',
    	stroke: '#000',
    	'stroke-width': 3,
    	'stroke-linejoin': 'rounded',
    	rotation: -120
    	}).attr({fill: "green"})
           .click(function () {
        	   circle.attr({opacity:0});
        	t.attr({opacity:0});
//            	 var r1 = paper.rect(200, 200, 150, 150);
            	// rectangle with rounded corners
//            	var c = paper.rect(300, 300,250, 150, 0).attr({
//                	gradient: '100-#808080-#808080',
//                	stroke: '#000',
//                	'stroke-width': 3,
//                	'stroke-linejoin': 'rectangle',
//                	rotation: -90
//                	});
        	
        	
var thicknessVal=parseInt(thickness*10);
//console.log("thicknessVal ="+thicknessVal);

        	   var line1 = paper.path( "M 300 380 l -90 0 l 0 150 l 205 0 l 0 20 l 0 -40 l 0 20 M 435 530 l 0 30 l 0 -60 l 0 30  l 205 0 l 0 -150 l -90 0" ).attr({stroke: '#000', 'stroke-width': 3});
//        	   var line2 = paper.path( "M 550 380 l 90 0 l 0 150 l -205 0 l 0 20 l 0 -40 l 0 20" ).attr({stroke: '#000', 'stroke-width': 3});
        	   var line2 = paper.path( "M 390 220 l -20 95").attr({stroke: '#000', 'stroke-width': 3,opacity:0}).toFront(); 
        	   var line3 = paper.path( "M 400 220 l 0 95").attr({stroke: '#000', 'stroke-width': 3,opacity:0}).toFront(); 
        	   var line4 = paper.path( "M 430 220 l 0 95").attr({stroke: '#000', 'stroke-width': 3,opacity:0}).toFront(); 
        	   var line5 = paper.path( "M 440 220 l 19 95").attr({stroke: '#000', 'stroke-width': 3,opacity:0}).toFront();
        	   var c=paper.path("M "+(x-225)+" "+(y+250)+"  l 250 0 l 50 130 l -250 0 l -50 -130 "
   					+"l 0 "+thicknessVal+"l 50 130 l 0 "+(-thicknessVal)+" l 0 "+thicknessVal+" l 250 0 l 0 "+(-thicknessVal)+"l -250 0 l -50 -130")
   					.attr({'fill':'#808080','stroke-width':1});


//        	   circle0 = paper.circle(420, 530, 10).attr({
//          	    	gradient: '30-#000-#FF0000',
//          	    	'stroke': '#000',
//          	    	'stroke-width': 3,
//          	    	fill: "red",
//          	    	
//          	    	});
           	    circle1 = paper.circle(420, 530, 10).attr({
           	    	gradient: '30-#000-#FF0000',
           	    	'stroke': '#000',
           	    	'stroke-width': 3,
           	    	fill: "red"
           	    	});
           	    
           	   
           	  circle2 = paper.circle(420, 530, 10).attr({
          	    	gradient: '30-#000-#FF0000',
          	    	'stroke': '#000',
          	    	'stroke-width': 3,
          	    	fill: "red",
          	    	text:"+"
          	    	}).toFront(); 
           	   
           	   circle3 = paper.circle(420, 530, 10).attr({
          	    	gradient: '30-#000-#FF0000',
          	    	'stroke': '#000',
          	    	'stroke-width': 3,
          	    	fill: "red",
          	    	text:"+"
          	    	});
           	   circle4 = paper.circle(420, 530, 10).attr({
             	    	gradient: '30-#000-#FF0000',
             	    	'stroke': '#000',
             	    	'stroke-width': 3,
             	    	fill: "red",
             	    	text:"+"
             	    	});
           	   
           	  circle5 = paper.circle(400, 400, 10).attr({
          	    	gradient: '30-#000-#FF0000',
          	    	'stroke': '#000',
          	    	'stroke-width': 3,
          	    	fill: "green",
          	    	opacity: 0
          	    	});
          	   
          	   circle6 = paper.circle(430, 400, 10).attr({
         	    	gradient: '30-#000-#FF0000',
         	    	'stroke': '#000',
         	    	'stroke-width': 3,
         	    	fill: "green",
         	    	text:"+",
         	    	opacity: 0
         	    	});
          	   
          	   circle7 = paper.circle(460, 400, 10).attr({
         	    	gradient: '30-#000-#FF0000',
         	    	'stroke': '#000',
         	    	'stroke-width': 3,
         	    	fill: "green",
         	    	text:"+",
         	    	opacity: 0
         	    		
         	    	});
          	   circle8 = paper.circle(490, 400, 10).attr({
            	    	gradient: '30-#000-#FF0000',
            	    	'stroke': '#000',
            	    	'stroke-width': 3,
            	    	fill: "green",
            	    	text:"+",
            	    	opacity: 0
            	    	});
       	circle5.animate({opacity: 0}, 2000, function() { });
        circle6.animate({opacity: 0}, 2000, function() { });
        circle7.animate({opacity: 0}, 2000, function() { });
        circle8.animate({opacity: 0}, 2000, function() { });
        var minus = paper.text(390, 510, "-").attr({'font-size': 50,fill:"#000",'stroke-width': 3});
        var plus = paper.text(460, 515, "+").attr({'font-size': 50,fill:"#000",'stroke-width': 3});
        var mg = paper.text(410, 20, "Magnetic field").attr({'font-size': 20,fill:"#000",'stroke-width': 3,opacity:0});
        var t1 = paper.text(370, 325, "-").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t2 = paper.text(400, 325, "-").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t3 = paper.text(430, 325, "-").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t4 = paper.text(460, 325, "-").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        
        var t5 = paper.text(400, 400, "+").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t6 = paper.text(430, 400, "+").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t7 = paper.text(460, 400, "+").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        var t8 = paper.text(490, 400, "+").attr({'font-size': 24,fill:"#fff",'stroke-width': 3,opacity: 0});
        	   var arry1=[];
        	   var arry2=[];
        	   var arry3=[];
        	   var arry4=[];

//	        	   		arry2[0]= circle2.animate({  cx: 210 }, 600,function(){
//	        			   	arry2[1]= circle2.animate({  cy: 380 }, 600,function(){
//	        				   arry2[2]= circle2.animate({  cx: 640 }, 600,function(){
//	        					   arry2[3]= circle2.animate({  cy: 530 }, 600,function(){
//	        						   arry2[4]= circle2.animate({  cx:210  }, 600,function(){
//	        							   arry2[5]= circle2.animate({  cy: 380}, 600,function(){
//	        								   arry2[6]= circle2.animate({  cx: 330}, 600,function(){
//	        									   	arry2[7]= circle2.animate({cx: 370,  cy: 325}, 600,function(){        	   
//        	   
        	   
        	   
        	   
        	   
        	   arry1[0]= circle1.animate({  cx: 210 }, 1000,function(){
	        	   	arry1[1]= circle1.animate({  cy: 380 }, 1100,function(){
	        		   arry1[2]= circle1.animate({  cx: 640 }, 1100,function(){
	        			   arry1[3]= circle1.animate({  cy: 530 }, 1100,function(){
	        				   arry1[4]= circle1.animate({  cx:210  }, 1100,function(){
	        					   arry1[5]= circle1.animate({  cy: 380 }, 1100,function(){
	        						   arry1[6]= circle1.animate({  cx: 330},1100,function(){
   									   	arry1[7]= circle1.animate({cx: 370,  cy: 325}, 1100,function(){ 
		        						   	t1.attr({opacity: 100});
		        						   	magnaticfield.attr({opacity: 100});
		        						   	line2.attr({opacity: 100});
		        						   	line2.toFront();
	   										
		        						   	t5.attr({opacity: 100});
		        						   	circle5.animate({opacity: 100}, 2000, function() { });	
		        						   	mg.attr({opacity: 100});
   									 });
	    	        				   });
	        					   });
	        				   });
	        			   });
	            		});
        			});
        		   
	        	   	arry2[0]= circle2.animate({  cx: 210 },1100,function(){
	        	   		arry2[1]= circle2.animate({  cy: 380 }, 1100,function(){
	        	   			arry2[2]= circle2.animate({  cx: 640 }, 1100,function(){
	        	   				arry2[3]= circle2.animate({  cy: 530 }, 1100,function(){
	        	   					arry2[4]= circle2.animate({  cx: 210 }, 1100,function(){
	        	   						arry2[5]= circle2.animate({  cy:380 }, 1100,function(){
	        	   							arry2[6]= circle2.animate({  cx: 330}, 1100,function(){
	       									   	arry2[7]= circle2.animate({cx: 400,  cy: 325}, 1100,function(){ 
	       									   		t2.attr({opacity: 100});
			        	   							line3.attr({opacity: 100});
			        	   							line3.toFront();
			   										
			        	   							t6.attr({opacity: 100});
			   										circle6.animate({opacity: 100}, 2000, function() { });
	        	   						});
	        	   					});
	        	   				});
	        	   			});
	        	   			});
        	   			});
	        	   	});
//	   			});
          
        		
	        	   			arry3[0]= circle3.animate({  cx: 210 }, 1100,function(){
	        	   				arry3[1]= circle3.animate({  cy:380 }, 1100,function(){
	        	   					arry3[2]= circle3.animate({  cx: 640 }, 1100,function(){
	        	   						arry3[3]= circle3.animate({  cy: 530 }, 1100,function(){
	        	   							arry3[4]= circle3.animate({  cx: 210}, 1100,function(){
	        	   								arry3[5]= circle3.animate({  cy: 380 }, 1100,function(){
	        	   									arry3[6]= circle3.animate({  cx: 330}, 1100,function(){
	    	       									   	arry3[7]= circle3.animate({cx: 430,  cy: 325}, 1100,function(){ 
	        	   							
	        	   									t3.attr({opacity: 100});
	        	   									line4.attr({opacity: 100});
	        	   									line4.toFront();
        	   										t7.attr({opacity: 100});
        	   										circle7.animate({opacity: 100}, 2000, function() { });
	        	   								});
	        	   							});
	        	   						});
	        	   					});
	        	   				});
	        	   			});
	        	   	});
	        	   		 	
	        	   				arry4[0]= circle4.animate({  cx: 210 }, 1100,function(){
	        	   					arry4[1]= circle4.animate({  cy: 380 }, 1100,function(){
	        	   						arry4[2]= circle4.animate({  cx: 640 }, 1100,function(){
	        	   							arry4[3]= circle4.animate({  cy: 530 }, 1100,function(){
	        	   								arry4[4]= circle4.animate({  cx:210 }, 1100,function(){
	        	   									arry4[5]= circle4.animate({ cy:380 }, 1100,function(){
	        	   										arry4[6]= circle4.animate({  cx: 330}, 1100,function(){
		    	       									   	arry4[7]= circle4.animate({cx: 460,  cy: 325}, 1100,function(){ 
	        	   										t4.attr({opacity: 100});
	        	   										
	        	   										circle8.animate({opacity: 100}, 2000, function() { });
	        	   										
	        	   										t8.attr({opacity: 100});
	        	   										line5.attr({opacity: 100});
	        	   										
	        	   										line5.toFront();
	        	   										$("#CalculateActualFlow").prop("hidden",false);
	        	   										$("#ans").val("");
	        	   									});
	        	   								});
	        	   							});
	        	   						});
	        	   								
	        	   					});
	        	   				});
	        	   			});
	        	   				});	
        			});//arr3
        		});//arr2
        	});//arr1
       });//arr1


    
    
	}
