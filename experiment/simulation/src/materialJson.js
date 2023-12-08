tempMasterJson = {};
var masterJsonArr = [];
var  fluxDensityValue= [];
masterJson = {};


fluxDensityAs = ["0.40","0.45","0.50","0.55","0.60","0.65","0.70","0.75","0.80"];

masterJson = {
	"materialType": "As",
	"range": fluxDensityAs,
	"temperature":"20",	
};

masterJsonArr.push(masterJson);

fluxDensityBi = ["0.113"];

masterJson = {
	"materialType": "Bi",
	"range": fluxDensityBi,
	"temperature":"20",	
};

masterJsonArr.push(masterJson);

fluxDensityC = ["0.4","0.6","0.7","0.9","1.0","1.2","1.4","1.6","1.8"];

masterJson = {
	"materialType": "C",
	"range": fluxDensityC,
	"temperature":"30",	
};

masterJsonArr.push(masterJson);
fluxDensityCu = ["0.8","1.0","1.2","1.4","1.6","1.8","2.0","2.2"];

masterJson = {
	"materialType": "Cu",
	"range": fluxDensityCu,
	"temperature":"20",	
};

masterJsonArr.push(masterJson);
fluxDensityFe = ["1.7"];

masterJson = {
	"materialType": "Fe",
	"range": fluxDensityFe,
	"temperature":"25",	
};

masterJsonArr.push(masterJson);


fluxDensityGe = ["0.001","0.008","0.010","0.015","0.030","0.060","0.75","0.080","0.1","0.3","0.6","0.8"];

masterJson = {
	"materialType": "Ge",
	"range": fluxDensityGe,
	"temperature":"25",	
};
masterJsonArr.push(masterJson);


fluxDensitySi = ["2"];

masterJson = {
	"materialType": "Si",
	"range": fluxDensitySi,
	"temperature":"25",	
};
masterJsonArr.push(masterJson);


fluxDensitySn = ["0.4"];

masterJson = {
	"materialType": "Sn",
	"range": fluxDensitySn,
	"temperature":"25",	
};
masterJsonArr.push(masterJson);


fluxDensityTe = ["0.3","0.4","0.5","0.6","0.7","0.8","0.9"];

masterJson = {
	"materialType": "Te",
	"range": fluxDensityTe,
	"temperature":"20",	
};
masterJsonArr.push(masterJson);
//tempMasterJson.demo = masterJsonArr;
//console.log(masterJsonArr);









