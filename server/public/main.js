// socket
const socket = io();
let actual_competitor = '';
socket.on('competitors', function (data) {
    actual_competitor = data;
    knowValue(actual_competitor)
    // getCompetitors(actual_competitor)
})

//--------- ROULETTE 1 ------------//
var currentA = null;
// let lose = new Audio("./sounds/loseSound.wav");
// let roulette = new Audio("./sounds/rouletteSpin.mp3");
let sound = new Audio("./sounds/KYQDEJ4-jackpot.mp3")
let secondWinnerAudio = new Audio("./sounds/AJLHX4K-jackpot-2.mp3"); 
(function ($) {
  $.fn.extend({
    roulette: function (options) {
      //basic data roulette
      var defaults = {
        angle: 0,
        angleOffset: -45,
        speed: 10000,
        easing: "easeInOutElastic",
      };

      var opt = $.extend(defaults, options);

      return this.each(function () {
        var o = opt;
        // triangles data inner roulette
        var data = [
          {
            color: "#c926d2",
            text: "",
          },

          {
            color: "#3bc3e7",
            text: "",
          },

          {
            color: "#c926d2",
            text: "",
          },

          {
            color: " #3bc3e7",
            text: "",
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
          value -= i === 0 ? d / 2 : d;
          ranges.push(value);
          console.log(ranges);
        }

        // creating roulette splits
        for (i = 1; i <= itemSize; i += 1) {
          var idx = i - 1;
          var rt = i * d + angleOffset;
          var itemHTML = $('<div class="' + itemSelector + '">');
          var labelHTML = "";
          labelHTML += '<p class="' + labelSelector + '">';
          labelHTML += '	<span class="text">' + data[idx].text + "</span>";
          labelHTML += "</p>";

          $roulette.append(itemHTML);
          $roulette
            .children("." + itemSelector)
            .eq(idx)
            .append(labelHTML);
          $roulette
            .children("." + itemSelector)
            .eq(idx)
            .css({
              left: wrapW / 2,
              top: -wrapW / 2,
              "border-top-width": borderTopWidth,
              "border-right-width": borderRightWidth,
              "border-top-color": data[idx].color,
              transform: "rotate(" + rt + "deg)",
            });

          var textH = parseInt(((2 * Math.PI * wrapW) / d) * 0.5);

          $roulette
            .children("." + itemSelector)
            .eq(idx)
            .children("." + labelSelector)
            .css({
              height: textH + "px",
              "line-height": textH + "px",
              transform:
                "translateX(" +
                textH * 1.03 +
                "px) translateY(" +
                wrapW * -0.25 +
                "px) rotateZ(" +
                (90 + d * 0.5) +
                "deg)",
            });
        }

        function tanDeg(deg) {
          var rad = (deg * Math.PI) / 180;
          return wrapW / (1 / Math.tan(rad));
        }

        // spin function
        // AQUI ESTA LA FUNCION PARA QUE LA RULETA GIRE
        $btnStart.on("click", function () {
          rotation();
        });

        function rotation() {
          //ROULETTE SOUND
		      // roulette.play();


          // roulette rotation
          var completeA = 360 * r(5, 10) + r(0, 360);
          $roulette.rotate({
            angle: angle,
            animateTo: completeA,
            center: ["50%", "50%"],
            easing: $.easing.esing,
            callback: function () {
              // getting data from the angle of the roulette rotation
              // TODO "asignar colores dependiendo del angulo de la ruleta para asignar ganador"
              currentA = $(this).getRotateAngle() / 10;

              console.log("roulette angle", currentA);
              if (currentA < 360 && currentA > 315) {
                document.getElementById("fhase-three").style.display = "block";
                document.getElementById("fhase-two").style.display = "none";
				secondWinnerAudio.play();
              }
              if (currentA < 315 && currentA > 225) {
                document.getElementById("fhase-three").style.display = "block";
                document.getElementById("fhase-two").style.display = "none";
				secondWinnerAudio.play();
              }
              if (currentA < 225 && currentA > 135) {
                document.getElementById("fhase-three").style.display = "block";
                document.getElementById("fhase-two").style.display = "none";
				secondWinnerAudio.play();
              }
              if (currentA < 135 && currentA > 0) {
                document.getElementById("fhase-three").style.display = "block";
                document.getElementById("fhase-two").style.display = "none";
				secondWinnerAudio.play();
              }
              if (currentA >= 360) {
                document.getElementById("fhase-three").style.display = "block";
                document.getElementById("fhase-two").style.display = "none";
				secondWinnerAudio.play();
              }
            },
            duration: speed,
          });
        }

        // FIN DE LA ROTACION DE LA RULETA

        function r(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      });
    },
  });
})(jQuery);

$(function () {
  $(".box-roulette").roulette();
});
//----------- END ROULETTE 1 ---------------//

//----------- Cards Registration ----------//

const cards = [
  //------ Lote 1 -----//
  {
    id: "614b3722",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "c474e029",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "c42aca29",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "d4ae5229",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "c24a2020",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "d439b629",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "d2189920",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "c28af720",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "c286ac20",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "b21e6f49",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "29ab864",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  {
    id: "9358694",
    color: "Blue",
    value: "rgb(59,195,231)",
  },
  //----- END Lote 1 -----//
  //------ Lote 2 -----//
  {
    id: "92e99249",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "615f8f22",
    color: "Pink",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "d43c5429",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "834fb72d",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "83d0752d",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "c2206849",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "b2e91220",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "d2639a20",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "c438a529",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "d43cc029",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "22f66c20",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  {
    id: "c4b56e29",
    color: "Pink",
    value: "rgb(201, 38, 210)",
  },
  //----- END Lote 2 -----//
  //------ Lote 3 -----//
  {
    id: "51e0222",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "51aaf722",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "d27552dd",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "f2855849",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "83c26b2d",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "d4455529",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "c4b34429",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "b2d7820",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "c2a38e20",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "129b5f49",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "b2113520",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  {
    id: "d2259049",
    color: "Purple",
    value: "rgb(102, 36, 205)",
  },
  //----- END Lote 3 -----//
  //------ Lote 4 -----//
  {
    id: "61a17322",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "629e4f49",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "c488fd29",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "d484a629",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "831e622d",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "d45f9529",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "611c1622",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "311779d22",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "72f1c82d",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "42315c25",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "e3a52f94",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  {
    id: "c25c6320",
    color: "BlackPurple",
    value: "rgb(98, 8, 132)",
  },
  //----- END Lote 4 -----//
  //------ Comodines -----//
  {
    id: "c4f29c29",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  {
    id: "82855349",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  {
    id: "6136f322",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  {
    id: "51af1e22",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  {
    id: "6111eb22",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  {
    id: "51f9a422",
    color: "White",
    value: "rgb(255, 255, 255)",
  },
  //----- END Comodines -----//
];

//----------- END Cards Registration ----------//

function home() {
		document.getElementById("fhase-one").style.display = "block";
		document.getElementById("fhase-two").style.display = "none";
		document.getElementById("fhase-three").style.display = "none";
		document.getElementById("fhase-three-winner").style.display = "none";
		document.getElementById("fhase-three-comodin").style.display = "none";
}

var value = ""
// getting card value
async function getValue(data) {
  value = data;
}

// GUARDANDO DATOS EN UN ARREGLO 
// let competitorsValue = [] 
// function getCompetitors(competitor){
//   competitorsValue.push(competitor); 
//   const competitorWinner = competitorsValue[competitorsValue.length - 1];
//   console.log(competitorWinner);
//   //TODO al regresar al home se debe limpiar el array competitorsValue
// }


 // comparison roulette value against card value
function knowValue(competitor) {

	// here we got the roulette value
	// var winnerValue = document.getElementById("winner").value;
	//
  console.log('competitor', competitor)
  console.log('value', value)
  console.log("EMP")
  console.log(value.toString().trim() === competitor.toString().trim())
	if (value.toString().trim() === competitor.toString().trim()) {
		document.getElementById("fhase-one").style.display = "none";
  		document.getElementById("fhase-three-winner").style.display = "block";
		sound.play();
		initFireWorks();
		
	}else if(competitor.toString().trim() === "comodin"){
		document.getElementById("fhase-one").style.display = "none";
  		document.getElementById("fhase-three-comodin").style.display = "block";
		sound.play();
		initFireWorks();
	}
	else {
		console.log("USTED PERDIO");
    localStorage.play();
		document.getElementById("fhase-one").style.display = "none";
  		document.getElementById("fhase-two").style.display = "block";
	}
}
//----------- FireWork ---------//
// function initFireWorks(){
// 	const containers = document.querySelectorAll('.fireworks-container')
// 	containers.forEach((container,index) => {
// 	  index+=1;
// 	  const fireworks = new Fireworks(container, {
// 		hue: { min: 0, max: 360 },
// 		delay: { min: 50/index, max: 100/index },
// 		brightness: {min: 80, max: 100},
// 		rocketsPoint: 50,
// 		opacity: 1,
// 		speed: 1/index,
// 		acceleration: 1.05,
// 		friction: 0.97,
// 		gravity: 2,
// 		particles: 200/index,
// 		trace: 4/index,
// 		explosion: 40/index,
// 	  })
// 	  fireworks.start()
// 	})
//   }