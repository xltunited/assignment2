$(document).ready(function(){

	var bigDisplay;

	var slideParent;

	$(document).on('click', '.carImg', function(){

		var whichCar = $(this).attr('data-display');

		bigDisplay = $('.' + whichCar);

		slideParent = bigDisplay.parent();

		bigDisplay.find('img').each(function(index){

			$(this).attr('src', $(this).attr('data-hd'));

			$(this).removeClass('carImg')

		});

		$('.modal-title').text(bigDisplay.attr('data-modalLabel'));

		$('.displayLink').attr('href', bigDisplay.attr('data-gameLink'));

		$('.displayLink').text(bigDisplay.attr('data-modalLabel'));

		$('.modal-body').empty();

		$('.modal-body').append(bigDisplay);

	});

	$('.displayLink').on('click', function(){

		$(this).attr('data-nowState', 'on');

	});

	$('.icon-prev').on('click', function(){

		$('.displayLink').attr('data-nowState', 'on');

	})

	$('.icon-next').on('click', function(){

		$('.displayLink').attr('data-nowState', 'on');

	})

	$('.carousel-control').on('click', function(){

		$('.displayLink').attr('data-nowState', 'on');

	})

	$('.carousel-indicators').on('click', function(){

		$('.displayLink').attr('data-nowState', 'on');

	})

	$('.modal-body').on('click', function(){

		$('.displayLink').attr('data-nowState', 'on');

	})

	$(document).on('click', function(){



		if($('.modal').css('display') == 'block' && $('.displayLink').attr('data-nowState') == 'off'){

			bigDisplay.find('img').each(function(index){

				$(this).attr('src', $(this).attr('data-pre'));

				$(this).addClass('carImg');

			});

			$(slideParent).prepend(bigDisplay);

		}

		if($('.displayLink').attr('data-nowState') == 'on'){

			$('.displayLink').attr('data-nowState', 'off');

		}


	});


});