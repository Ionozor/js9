exports.dotest = function(js9Test, s){
    var image = js9Test.image || "CTB 109 FITS";
    js9Test.doImageURL(image, null, function(){
	var d = "bin2/zoom2 region is the same as original region";
	js9Test.doMenuItem("wcs", "pixels");
	js9Test.doMenuItem("region", "circle");
	js9Test.doMenuItem("view", "Binning");
	js9Test.doXPath("//input[@name='bin']", {text: "2"});
	js9Test.doXPath("//input[@name='rebin']");
	js9Test.waitImage();
	js9Test.doXPath("//input[@name='close']");
	js9Test.doMenuItem("zoom", "zoom 2");
	js9Test.doMenuItem("region", "circle");
	js9Test.doMsg("regions", null, function(msg, opts, a){
	    var arr, r1, r2;
	    arr = a.split(";");
	    if( arr[1] && arr[2] ){
		r1 = arr[1].trim();
		r2 = arr[2].trim();
		if( r1 === r2 ){
		    js9Test.results("success", s, d);
		} else {
		    js9Test.results("FAILURE", s, d, r1, r2);
		}
	    } else {
		    js9Test.results("FAILURE", s, d, a);
	    }
	});
    });
}