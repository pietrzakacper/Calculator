var calculator = (function() {
    var input = '0';
    var operatorClicked = false;
		var dotClicked = false;

    //cache DOM
    var $screen = $('.screen');
    var $keyboard = $('.keyboard');

    //bind events
    $keyboard.on('click', ".digit", addToCaluculation);
    $keyboard.on('click', ".binary", addToCaluculation);
    $keyboard.on('click', ".comma", addToCaluculation);
    $keyboard.on('click', ".func", reset);
    $keyboard.on('click', ".equals", calculate);

    _render();

    function _render() {
        $screen.html(input);
    }

    function addToCaluculation(event) {
			var $target = $(event.target);

				if ($target.hasClass('binary')) {
            if (operatorClicked) {
                return;
            }
            dotClicked = false;
            operatorClicked = true;
        }

        if ($target.hasClass('digit') || $target.hasClass('comma')) {
            operatorClicked = false;
        }

				if($target.hasClass('comma')){
					if(!dotClicked){
						dotClicked=true;
					} else{
						return;
					}
				}

        if (input === '0') {
            if(!$target.hasClass('binary'))input = $target.html();
        } else {
            input += $target.html();
        }
        _render();
    }

    function calculate(event) {
        if (!operatorClicked) {
            input = (""+eval(input.replace('x', '*')));
						_render();
						input = "0";
						dotClicked = false;
        }

    }

    function reset(event) {
        input = "0";
				dotClicked = false;
        $keyboard.find(".binary").addClass("key-hover");
        $keyboard.find(".clicked").removeClass("clicked");
        _render();
    }

})();
