$('#start').on('click',function() {
       game.start();
    
})


var questions =[{
    question:"When was the Fortnite game created?",
    answers:["July 25, 2017", "January 5, 2012", "April 6, 2016", "March 4, 2018"],
    correctAnswer:"July 25,2017"
}, {
    question:"An in-game purchase in Fortnite Battle Royale is called?",
    answers:["Free Gift", "Battle Passes", "Battle Goods", "Lucky Wallet"],
    correctAnswer:"Battle Passes",
}, {
    question:"What is the first weapon you are given in the game?",
    answers:["Pick Axe", "Sniper Rifle", "Knuckles", "Grenade"],
    correctAnswer:"Pick Axe"
}, {
    question:"Who Developed the Game?",
    answers:["Disney & Marvel", "DC & Motion Pictures", "Epic Games & People Can Fly", "Marvel comics & DC Movies"],
    correctAnswer:"Epic games & People Can Fly",
}, {
    question:"How many players participate in Fortnite Battle Royale?",
    answers:["12", "2", "100", "400"],
    correctAnswer:"100",
}, {
    question:"How many modes does the game have?",
    answers:["2","18", "13", "19"],
    correctAnswer:"2",
}, {
    question:"The shrinking of the map in Fortnite Battle Royale is called?",
    answers:["The Shrink", "The storm", "The break end"],
    correctAnswer:"The storm",
}, {
    question:"In Fortnite Battle Royale, the name of the hot air balloon is called?",
    answers:["Battle bus", "The carrier", "The mover", "Battle mileage"],
    correctAnswer:"Battle bus",
}, {
    question:"What are the two modes in the game?",
    answers:["Save the world and battle royale", "Earth defence and weapon collector", "Solo mode and freestyle mode", "Survival mode and death mode"],
    correctAnswer:"Save the world and battle royale",
},  {
    question:"What can players use to create defenses?",
    answers:["Trees", "Brick", "Grenades", "Metal"],
    correctAnswer:"Brick",
}];

var game ={
    correct:0,
    incorrect:0,
    counter:120,
    countdown:function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    
    },
    start: function(){
        timer=setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2> Time Remaining: <span id="counter">120/span>Seconds</h2>');
        
         $('#start').remove();
         for(var i=0; i<questions.length; i++){
            $('#subwrapper').append('<h2>' + questions[i].question +'</h2>');
            for(var j=0; j<questions[i].answers.length; j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+ questions[i].answers[j])
            }
        }

        $("#subwrapper").append("<br><button id ='submitButton'>Click to Submit</button>")
    
    },
    done: function(){
         $.each($('input[name=question-0]:checked'),function(){
            if($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
            });
            $.each($('input[name=question-1]:checked'),function(){
                if($(this).val()==questions[1].correctAnswer) {
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });
             $.each($('input[name=question-2]:checked'),function(){
                 if($(this).val()==questions[2].correctAnswer) {
                    game.correct++;
                 } else{
                    game.incorrect++;
                    }
             });
             $.each($('input[name=question-3]:checked'),function(){
                 if($(this).val()==questions[3].correctAnswer) {
                    game.correct++;
                 } else{
                    game.incorrect++;
                }
            });
            $.each($('input[name=question-4]:checked'),function(){
                if($(this).val()==questions[4].correctAnswer) {
                    game.correct++;
                } else{
                    game.incorrect++;
                }
                });
                $.each($('input[name=question-5]:checked'),function(){
                    if($(this).val()==questions[5].correctAnswer) {
                        game.correct++;
                    } else{
                        game.incorrect++;
                }
                });
                $.each($('input[name=question-6]:checked'),function(){
                    if($(this).val()==questions[6].correctAnswer) {
                        game.correct++;
                    } else{
                        game.incorrect++;
                    }
                    });
        
                    $.each($('input[name=question-7]:checked'),function(){
                        if($(this).val()==questions[7].correctAnswer) {
                            game.correct++;
                        } else{
                            game.incorrect++;
                        }
                        });
                        $.each($('input[name=question-8]:checked'),function(){
                            if($(this).val()==questions[8].correctAnswer) {
                                game.correct++;
                            } else{
                                game.incorrect++;
                            }
                            });
                            $.each($('input[name=question-9]:checked'),function(){
                                if($(this).val()==questions[9].correctAnswer) {
                                    game.correct++;
                                } else{
                                    game.incorrect++;
                                }
                                });
                    
            
        this.result();
       },
       result: function(){
           clearInterval(timer);
           $('#subwrapper h2').remove();

           $('#subwrapper').html("<h2> ALL DONE!</h2>");
           $('#subwrapper').append("<h3> Correct Answers:  "+this.correct +"</h3>");
           $('#subwrapper').append("<h3> Incorrect Answers:  "+this.incorrect +"</h3>"); 
           var unanswered=10-(this.correct+ this.incorrect)
           $('#subwrapper').append("<h3> Unanswered: "+ unanswered + "</h3> ")
       }
        
    }
    $(document).on("click","#submitButton",function(){
        game.done();
    })
