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
			  color: '#00c6f8',
			  text: ''
			},
			
		  {
			  color: '#280033',
			  text: ''
			},
			
		  {
			  color: '#01d2ee',
			  text: ''
			},
		   
		  {
			  color: ' #280033',
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

		//   let result = ranges.map((elm,i) => (deg >= elm) ? i:null).filter(elm => elm != null);
		//   console.log("result",result)
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
				if (currentA > 360) {
					return rotation();
				}
				if(currentA < 360 && currentA > 315){
					console.log("gano el Azul")
				}
				if(currentA < 315 && currentA > 225){
					console.log("gano el Azul")
				}
				if(currentA < 225 && currentA > 135){
					console.log("gano el Morado")
				}
				if(currentA < 135 && currentA > 0){
					console.log("gano el Morado")
				}
			  },
			  // TODO "la velocidad de la rotacion de la ruleta va a ser dependiendo del movimiento de la ruleta fisica"
			  duration: speed
			});
		  }
  
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

//----------- ROULETTE 3 -------------------//

/**
 * Roulette logic
 */
const spin = async () => {

    const degBase= 1440;//To simulate at least 4 spins of the roulette
    const deg = await randomSpinDeg();//Get Random Extra Degrees to spin the roulette     
    const section = getSection(deg);//Get the section according with the random degrees
    const totalDeg = deg+degBase;//Total degrees of the roulette going to spin
    const sectionsElm = document.querySelectorAll('.optionRoulette');//Get all sections in the roulette
    const roulette = document.querySelector('#roulette');
    
    console.log(section);

    btnSpin.disabled = true;//Avoid user spin the roulette in each click over the button
    roulette.classList.remove('transition')
    roulette.style.transform= `rotate(0deg)`;
    sectionsElm.forEach(function(elm,i) {   
                elm.classList.add('brightness')// Add brightness in the section selected 
        });
  
    setTimeout( ()=>{
        roulette.classList.add('transition')
        roulette.style.transform= `rotate(${totalDeg}deg)`; 
    },10)
  
    setTimeout( ()=>{   
      sectionsElm.forEach(function(elm,i) {   
                elm.classList.remove('brightness')// Add brightness in the section selected 
        });
        sectionsElm.forEach(function(elm,i) {                        
            if( i === section){
                elm.classList.add('brightness')// Add brightness in the section selected
            }
            else{
                elm.classList.add('opacity')//Add opacity in all elements no selected
            }
        });
        document.querySelector('.container').classList.add('flyTop')//Add class to hide the roulette after the animation
      btnSpin.disabled = false;
    },4000);// !!This setTimeOut need to have the same Time as in the CSS class 'transition'   
}


/**
 * Return the number of the section selected (acording with the elements in the array  called sectionsArray)
 * 
 * @param {number} deg 
 */
const getSection = (deg) =>{
    
    let sectionsArray = ['Red','Green','Blue','OtherBlue','Purple','Yellow'];//Array with all the sections on the roulette
    let sectionLength = sectionsArray.length;//Get total number of sections
    let degBySection = 360 / sectionLength;//Get the corresponding grades to each section
    let ranges = [];
    let value = 360;//Total Degrees

    /**
     * Get all the limit Degrees of each section
     */
    for (let i = 0; i < sectionLength ; i++) {
        value -= (i===0)?  degBySection / 2  :  degBySection;        
        ranges.push(value);        
    }

    let result = ranges.map( (elm,i)=> (deg >= elm)? i:null ).filter(elm => elm != null);

    return  (result.length === 0 )? 0 : result[0]    
}

/**
 * Retun a Random Number [1-360]
 */
const randomSpinDeg  = ()=>{
    return  Math.floor(Math.random() * (360 - 0 + 1) ) + 0 ;
}

const main = ()=>{
    const btnSpin = document.querySelector('#btnSpin');
    btnSpin.addEventListener('click', spin);
}

main();

//----------- END ROULETTE 3 -------------------//

	const functionOne = () => {
		console.log("opcion 1")
	}

	const functionTwo = () => {
		console.log("opcion 2")
	}

	const functionThree = () => {
		console.log("opcion 3")
	}

	const functionFour = () => {
		console.log("opcion 4")
	}