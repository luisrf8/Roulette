//--------- ROULETTE 1 ------------//
(function($) {
	$.fn.extend({
	  roulette: function(options) {
		//basic data roulette  
		var defaults = {
		  angle: 0,
		  angleOffset: -45,
		  speed: 10000,
		  easing: "easeInOutElastic",
		};
  
		var opt = $.extend(defaults, options);
  
		return this.each(function() {
		  var o = opt;
			// triangles data inner roulette 
		  var data = [
		  {
			  color: '#c926d2',
			  text: ''
			},
			
		  {
			  color: '#3bc3e7',
			  text: ''
			},
			
		  {
			  color: '#c926d2',
			  text: ''
			},
		   
		  {
			  color: ' #3bc3e7',
			  text: ''
			},
		  ];
  
		  var $wrap = $(this);
		  // variable assignment to html components
		  var $btnStart = $wrap.find("#btn-start");
		  var $roulette = $wrap.find(".roulette");
		  var wrapW = $wrap.width();
		  // variable assignment to roullette
		  var angle = o.angle;
		  var angleOffset = o.angleOffset;
		  var speed = o.speed;
		  var esing = o.easing;
		  var itemSize = data.length;
		  var itemSelector = "item";
		  var labelSelector = "label";
		  var d = 360 / itemSize;
		  var borderTopWidth = wrapW;
		  var borderRightWidth = tanDeg(d);
		  let ranges = []; 
		  let value = 360; 

		  for (i = 0; i < data.length; i++) {
			value -= (i===0) ? d / 2 : d;
			ranges.push(value)
			console.log(ranges)
		  }

		  // creating roulette splits
		  for (i = 1; i <= itemSize; i += 1) {
			var idx = i - 1;
			var rt = i * d + angleOffset;
			var itemHTML = $('<div class="' + itemSelector + '">');
			var labelHTML = '';
				labelHTML += '<p class="' + labelSelector + '">';
				labelHTML += '	<span class="text">' + data[idx].text + '<\/span>';
				labelHTML += '<\/p>';
			
			$roulette.append(itemHTML);
			$roulette.children("." + itemSelector).eq(idx).append(labelHTML);
			$roulette.children("." + itemSelector).eq(idx).css({
			  "left": wrapW / 2,
			  "top": -wrapW / 2,
			  "border-top-width": borderTopWidth,
			  "border-right-width": borderRightWidth,
			  "border-top-color": data[idx].color,
			  "transform": "rotate(" + rt + "deg)"
			});
  
			var textH = parseInt(((2 * Math.PI * wrapW) / d) * .5);
  
			$roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
			  "height": textH + 'px',
			  "line-height": textH + 'px',
			  "transform": 'translateX(' + (textH * 1.03) + 'px) translateY(' + (wrapW * -.25) + 'px) rotateZ(' + (90 + d * .5) + 'deg)'
			});
  
		  }
		  
		  function tanDeg(deg) {
			var rad = deg * Math.PI / 180;
			return wrapW / (1 / Math.tan(rad));
		  }
  
		  // spin function 
		  // AQUI ESTA LA FUNCION PARA QUE LA RULETA GIRE
		  $btnStart.on("click", function() {
			rotation();
		  });
		  
		  function rotation() {
			// roulette rotation 
			var completeA = 360 * r(5, 10) + r(0, 360);
			$roulette.rotate({
			  angle: angle,
			  animateTo: completeA,
			  center: ["50%", "50%"],
			  easing: $.easing.esing,
			  callback: function() {
				// getting data from the angle of the roulette rotation 
				// TODO "asignar colores dependiendo del angulo de la ruleta para asignar ganador"
				var currentA = $(this).getRotateAngle()/10;
  
				console.log("roulette angle",currentA);

				if(currentA < 360 && currentA > 315){
					console.log("gano el Azul")
					document.getElementById("fhase-three").style.display = "block";
					document.getElementById("fhase-two").style.display = "none";
				}
				if(currentA < 315 && currentA > 225){
					console.log("gano el Azul")
					document.getElementById("fhase-three").style.display = "block";
					document.getElementById("fhase-two").style.display = "none";

				}
				if(currentA < 225 && currentA > 135){
					console.log("gano el Morado")
					document.getElementById("fhase-three").style.display = "block";
					document.getElementById("fhase-two").style.display = "none";

				}
				if(currentA < 135 && currentA > 0){
					console.log("gano el Morado")
					document.getElementById("fhase-three").style.display = "block";
					document.getElementById("fhase-two").style.display = "none";

				}
				if (currentA >= 360) {
					document.getElementById("fhase-three").style.display = "block";
					document.getElementById("fhase-two").style.display = "none";
				
				}
			  },
			  duration: speed
			});
		  }

		  // FIN DE LA ROTACION DE LA RULETA

		  function r(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  }
  
		});
	  }
	});
  })(jQuery);
  
  $(function() {
  
	$('.box-roulette').roulette();
  
  });
//----------- END ROULETTE 1 ---------------// 

	function home() {
		document.getElementById('fhase-one').style.display = "block";
		document.getElementById('fhase-two').style.display = "none";
		document.getElementById('fhase-three').style.display = "none";
		document.getElementById('blue-card').style.display = "none";
		document.getElementById('pink-card').style.display = "none";
		document.getElementById('purple-card').style.display = "none";

	}
	function getValue(data) {
		let value = data;
		if (value === "blue") {
			document.getElementById('blue-card').style.display = "block";

		}
		if (value === "pink") {
			document.getElementById('pink-card').style.display = "block";

		}
		if (value === "purple") {
			document.getElementById('purple-card').style.display = "block";

		}
	}
	const functionFour = () => {
		document.getElementById('fhase-one').style.display = "none";
		document.getElementById('fhase-two').style.display = "block";
	}
//----------- FireWork ---------//