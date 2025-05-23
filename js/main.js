$(document).ready(function(){

	$('#click-next').on('click',function (){
		$('#respuesta').css('opacity', '1');
		$(this).css({
			"opacity":"0",
			"cursor":"initial"
		});
		$('#click-close').css("display", "block");
		setTimeout(function (){
			$('#click-close').css("opacity", "1");
		}, 100);

	});

	$('#click-close').on('click', function (){
		$('#pregunta-box').removeClass('active');
		$('#respuesta').css('opacity', '0');
		setTimeout(function (){
			$('#click-next').css({
				"opacity":"1",
				"cursor":"pointer"
			});
			$('#click-close').css({
				"opacity":"0",
				"display":"none"
			});
		}, 1100);
	});

});

function launch(who) {
	console.log(who);

	$('#pregunta').html(qa[who].q);
	$('#respuesta').html(qa[who].a);
	$('#pregunta-imagen').attr('src', 'images/'+who+'.png');
	$('#pregunta-box').addClass('active');
}

const qa = {
	nabbit: {
		q: "CÓMO FUNCIONA EL MUNDO. En la actividad del recorrido al huerto de kinder, ¿Qué sentidos utilizaste?",
		a: "Vista y olfato.",
	},
	goomba: {
		q: "HOW THE WORLD WORKS. Which are the three states of matter?",
		a: "Solid, liquid and gas.",
	},
	luigi: {
		q: "DÓNDE NOS ENCONTRAMOS EN EL TIEMPO Y EL ESPACIO. ¿Qué es una reliquia?",
		a: "Objeto antiguo que tiene un valor sentimental para la familia."
	},
	question: {
		q: "WHERE WE ARE IN PLACE AND TIME. In the interviews to grandparents, we observed things that can show both... ?",
		a: "Change and continuity."
	},
	koopa: {
		q: "QUIENES SOMOS. ¿Qué es una tradición y menciona algunas?",
		a: "Son eventos donde participa toda la comunidad porque forman parte de nuestra cultura como día de muertos, reyes magos o navidad."
	},
	coins: {
		q: "WHO WE ARE. What is a community?",
		a: "A group of people living or working together."
	},
	lakitul: {
		q: "CÓMO NOS ORGANIZAMOS. ¿Cuál es la diferencia entre ofrecer un producto y un servicio?",
		a: "Los productos se entregan, como ropa, comida o útiles. Los servicios se prestan, como lo hace un doctor o una maestra."
	},
	bobombs: {
		q: "HOW WE ORGANIZE OURSELVES. What is the difference between buying and bartering?",
		a: "When you buy you exchange for money, when you barter you exchange for other objects."
	},
	yoshi: {
		q: "CÓMO NOS EXPRESAMOS. Menciona algunos medios de comunicación.",
		a: "Televisión, radio, streaming."
	},
	piranha: {
		q: "HOW WE EXPRESS OURSELVES.  Name a form of expression.",
		a: "Painting, singing, dancing, writing, etc."
	},
	mario: {
		q: "CÓMO COMPARTIMOS EL PLANETA. ¿Cuáles son las tres R?",
		a: "Reducir, reutilizar y reciclar."
	},
	peachette: {
		q: "SHARING THE PLANET. How do we call the process of rain falling to the ground and evaporating again into the sky?",
		a: "The water cycle."
	}
};