var calculator=(function(){
    var input= [0];

    // calculator logic variables
    var operation = function(){};
    var arg1=0;
    var arg2 =0;

    var operatorClicked = false;
    //cache DOM
    var $screen=$('.screen');
    var $keyboard=$('.keyboard');

    //bind events
    $keyboard.on('click',".digit",addToCaluculation);
    $keyboard.on('click',".binary",setBinaryOperator);
  //  $keyboard.on('click',".comma",makeFloat);
  //  $keyboard.on('click',".func",reset);
    $keyboard.on('click',".equals",calculate);
    function _render(){
      $screen.html(input.join(""));
    }

    function addToCaluculation(event){
      if(input[0] === 0){
        input[0]=$(event.target).html();
      } else {
        input.push($(event.target).html());
      }
      _render();
    }

    function setBinaryOperator(event){
      if(operatorClicked)return;
      operatorClicked = true;

      arg1=parseInt(input.join(""));
      console.log(arg1);
      input = [0];
      _render();
      var $operator = $(event.target);
      $operator.parent().addClass("clicked");
      switch($operator.html()){
        case 'x':
          operation=function(a,b){return a*b;};
            break;
        case '%':
          operation=function(a,b){return a/b;};
            break;
        case '+':
          operation=function(a,b){return a+b;};
            break;
        case '-':
          operation=function(a,b){return a-b;};
            break;
      }
    }

    function calculate(){
      arg2=parseInt(input.join(""));
      console.log(arg2);
      console.log(operation(arg1,arg2));
      input = (""+operation(arg1,arg2)).split("");
      _render();
    }

  })();
