var calculator=(function(){
    var input= [0];

    // calculator logic variables
    var operation = function(){};
    var arg1=0;
    var arg2 =0;

    var arg1Precision=1;
    var arg2Precision=1;

    var isCommaPresent = false;

    var operatorClicked = false;
    //cache DOM
    var $screen=$('.screen');
    var $keyboard=$('.keyboard');

    //bind events
    $keyboard.on('click',".digit",addToCaluculation);
    $keyboard.on('click',".binary",setBinaryOperator);
    $keyboard.on('click',".comma",makeFloat);
  //  $keyboard.on('click',".func",reset);
    $keyboard.on('click',".equals",calculate);

    _render();

    function _render(){
      $screen.html(input.join(""));
    }

    function addToCaluculation(event){
      if(input[0] === 0){
        input[0]=$(event.target).html();
      } else {
        input.push($(event.target).html());
      }
      if(isCommaPresent){
        if(operatorClicked){
          arg2Precision++;
        } else{
          arg1Precision++;
        }
      }
      _render();
    }

    function setBinaryOperator(event){
      if(operatorClicked)return;
      operatorClicked = true;
      isCommaPresent = false;

      arg1=parseFloat(input.join(""));
      input = [0];
      _render();
      var $operator = $(event.target);

      $keyboard.find(".binary").removeClass("key-hover");
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
      arg2=parseFloat(input.join(""));
      // console.log(arg1+" "+arg1Precision+" "+arg2+" "+arg2Precision);
      // console.log(operation(arg1,arg2));
      var result = operation(arg1,arg2).toPrecision(2*((arg1Precision>arg2Precision)?arg1Precision:arg2Precision));
      // console.log(result);
      result = parseFloat(""+result);
      input = (""+result).split("");

      $keyboard.find(".binary").addClass("key-hover");
      $keyboard.find(".clicked").removeClass("clicked");
      _render();
    }

    function makeFloat(){
      input.push('.');
      isCommaPresent = true;
      _render();
    }

  })();
