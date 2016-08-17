var calculator=(function(){
    var input= [0];
    var finalString= "";

    //cache DOM
    var $screen=$('.screen');
    var $keyboard=$('.keyboard');

    //bind events
    $keyboard.on('click',".digit",addToCaluculation);

    function _render(){
      $screen.html(finalString);
    }

    function addToCaluculation(event){
      finalString+=(typeof event === "string")?event:$(event.target).html();
      render();
    }

    return {add: addToCaluculation};
  })();
