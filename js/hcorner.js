!(function($) {
	$.fn.hcorner = function(options, callback) {
		var defaults = {
			position: "rtop",
			size: [20,20],
			color:"blue",
			style:"normal"
		},
		settings = $.extend({
			position: ["rtop","ltop","rbottom","lbottom"],
			size: [20,20],
			color:"red",
			style:["normal","out-fillet","in-fillet"]
			//内置的三种风格，为 正常 ，外圆角，内圆角，圆角状况下，size只允许为一个值，内圆角情况下，颜色设置无用
		}, defaults,options);
		return this.each(function() {
				var size= getSize() ,
				element,
				color = getColor(),
				position=getPositon(),
                deg = getDeg(),
                distance = getDistance(),
				style = settings.style;
				var background = $(this).css("background-color");
				switch (style){
					case "normal":
						element = "<div style='width:0;height:0;position:absolute;"+position[0]+":0;"+position[1]+":0;"
						+position[3]+":"+size[0]+"px solid "+color+";"+position[2]+":"+size[1]+"px solid transparent;'></div>";
                        $(this).css('background','linear-gradient('+deg+'deg, transparent '+distance+'px, '+background+' 0)');
                        break;
					case "out-fillet":
						element = "<div style='width:"+size[0]+"px;height:"+size[0]+"px;position:absolute;"+position[0]+":0;"+position[1]+":0;"+position[4]+":"+size[0]+"px; background-color:"+color+";background:linear-gradient("+deg+"deg, transparent "+distance+"px, "+color+" 0)'></div>";
                        $(this).css('background','linear-gradient('+deg+'deg, transparent '+distance+'px, '+background+' 0)');
                        break;
					case "in-fillet":
                        $(this).css('background','radial-gradient(circle at '+position[1]+' '+position[0]+',transparent '+size[0]+'px, '+background+' 0)');
                        break;
				}
				


      			return $(this).append(element).css('position', 'relative');
		});
        function getSize(){
        	if(settings.size instanceof Array)
        	{
        		return settings.size;
        	}
        	else if (typeof(settings.size) =="number"){
        		return [settings.size,settings.size];
        	}
					
		}
        function getDeg(){
            var deg=settings.size instanceof Array?Math.atan2(settings.size[1],settings.size[0])*180/Math.PI:45;
                switch (settings.position){
                    case "rtop":
                        deg=180+deg;
                        break;
                    case "ltop":
                        deg=180-deg;
                        break;
                    case "rbottom":
                        deg = -deg;
                        break;
                    case "lbottom":
                        deg=deg;
                        break;
                }

                return deg;
        }
        function getDistance(){
            if(settings.size instanceof Array)
            {
                return (settings.size[1]*settings.size[0])/Math.sqrt(Math.pow(settings.size[1],2)+Math.pow(settings.size[0],2));
            }
            else if(typeof(settings.size) =="number"){
                return settings.size*(Math.sqrt(2)/2);
            }
        }
        function getColor(){
        	if (typeof(settings.color) =="string"){
        		return settings.color;
        	}
        }
        function getPositon(){
        	var posSetting;
        	switch (settings.position){
        		case "rtop":
        			posSetting=["right","top","border-top","border-left","border-bottom-left-radius"];
        			break;
        		case "ltop":
        			posSetting=["left","top","border-top","border-right","border-bottom-right-radius"];
        			break;
        		case "rbottom":
        			posSetting=["right","bottom","border-bottom","border-left","border-top-left-radius"];
        			break;
        		case "lbottom":
        			posSetting=["left","bottom","border-bottom","border-right","border-top-right-radius"];
        			break;
        	}
        	return posSetting;
        	
        }
	}

})(jQuery);