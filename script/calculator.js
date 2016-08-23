var calculator = (function() {
    var input = '0';
    var operatorClicked = false;


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
        console.log("----------------");
        if ($(event.target).hasClass('binary')) {
            if (operatorClicked) {
                console.log("return bin");
                return;
            }
            console.log("bin");
            operatorClicked = true;
        }

        if ($(event.target).hasClass('digit') || $(event.target).hasClass('comma')) {
            operatorClicked = false;
        }

        if (input === '0') {
            input = $(event.target).html();
        } else {
            input += $(event.target).html();
        }

        _render();
    }

    function calculate(event) {
        if ($(event.target).hasClass('equals') && operatorClicked) {
            console.log("return eq");
            return;
        }
        input = input.replace('x', '*');

        var str = eval(input);

        console.log(input + " = " + str);

        input = (""+str);
        _render();
    }

    function reset(event) {
        var sign = $(event.target).html();
        input = "0";

        $keyboard.find(".binary").addClass("key-hover");
        $keyboard.find(".clicked").removeClass("clicked");
        _render();
    }

})();
