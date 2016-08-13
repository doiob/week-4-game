        var randomNumber = Math.floor((Math.random() * 100) + 50);
        var randomArray=[];
        randomArray = randomInt(randomArray);
        var purpleNumber = randomArray[0];
        var orangeNumber = randomArray[1];
        var rubyNumber = randomArray[2];
        var yellowNumber = randomArray[3];
        var total=0;
        var totalWin=0;
        var totalLoss=0;
        var gameOver=false;

        $("#playground").replaceWith("<p id=\"playground\">" +  randomNumber + "</p>");
        $("#purple").on('click', function(){
          $("#purple").attr("src","assets/images/purple.gif");
          total = scorecard(total,purpleNumber,randomNumber);
        });

        $("#orange").on('click', function(){
          $("#orange").attr("src","assets/images/orange.gif");
          total = scorecard(total,orangeNumber,randomNumber);
        });
        $("#ruby").on('click', function(){
          $("#ruby").attr("src","assets/images/ruby.gif");
          total = scorecard(total,rubyNumber,randomNumber);
        });
        $("#yellow").on('click', function(){
          $("#yellow").attr("src","assets/images/yellow.gif");
          total = scorecard(total,yellowNumber,randomNumber);
        });
        
        //reset everything
        $("#start").on('click', function(){
          randomArray=[];
          randomArray = randomInt(randomArray);
          $("#purple").attr("src","assets/images/purple.png");
          $("#orange").attr("src","assets/images/orange.png");
          $("#ruby").attr("src","assets/images/ruby.png");
          $("#yellow").attr("src","assets/images/yellow.png");
          randomNumber = Math.floor((Math.random() * 10) + 50);
          $("#playground").replaceWith("<p id=\"playground\">" +  randomNumber + "</p>");
          $("#total").replaceWith("<p id=\"total\"></p>");
          $("#result").replaceWith("<p id=\"result\"></p>");
          total=0;
          purpleNumber = randomArray[0];
          orangeNumber = randomArray[1];
          rubyNumber = randomArray[2];
          yellowNumber = randomArray[3];
          gameOver=false;
          
        });
        function scorecard(num,colorNum,rndNum){
          num = num + colorNum;
          $("#total").replaceWith("<p id=\"total\">" +  num + "</p>");
          if (( num > rndNum) && (!gameOver ))
          {
            $("#result").replaceWith("<p id=\"result\"> You Lose</p>");
            totalLoss++;
            $("#loss").replaceWith("<span id=\"loss\">Total loss  :" +totalLoss +"</span>")
            gameOver=true;
          }
          if (( num == rndNum)&& (!gameOver ))
          {
            $("#result").replaceWith("<span id=\"result\"> You Win</span>");
            totalWin++;
            $("#win").replaceWith("<span id=\"win\">Total Win :" + totalWin + "</span>")
            gameOver=true;
          }
          return num;
        }
        function randomInt(ary)
        {
          var found=true;
          var index=0;

          while(found)
          {
            num = Math.floor((Math.random() * 9) + 2);
            if (index == 0)
            {
              ary[0]=num;
              index = 1;
            }
            else
            {
              for(var i=0;i<index;i++){
                if(ary[i]==num)
                {
                  found=true;break;
                }
                else
                {
                  found = false;
                }
              }
              if(!found)
              {
                ary[index]=num;
                index= index + 1;
                found=true;
              }
              if ( index == 4 ) {return ary};
            }
          }
        }
        