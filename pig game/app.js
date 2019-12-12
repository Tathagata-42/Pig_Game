/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores,roundscore,activeplayer,gameplaying=true;

init();

/*var scores=[0,0];
var roundscore=0;
var activeplayer=0; /* to choose player */



//document.querySelector('#current-'+activeplayer).textContent=dice;




//document.querySelector("#current-"+activeplayer).innerHTML='<em>' + dice +'</em>';




var x= document.querySelector('#score-0').textContent; //used for reading

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';


document.getElementById('current-1').textContent='0';

// function btn{
    
//do something here



 // document.querySelector('.btn-roll').addEventListener('click',btn);


 document.querySelector('.btn-roll').addEventListener('click', function()
                                                      {
     
     
     if(gameplaying)
         {
             
         
     var dice=Math.floor(Math.random()*6)+1;//random number
     
     
     var diceDom=document.querySelector('.dice');
     
     diceDom.style.display='block';
     
     diceDom.src='dice-'+dice+'.png';
     
     
     if(dice>1)
         {
             //add score
             roundscore=roundscore+dice;
            document.querySelector('#current-'+activeplayer).textContent=roundscore
             
         }
     
     else
         nextplayer();
         }
     
     
             
             
             
             //next player
         
     
     
     
     
     
 });


document.querySelector('.btn-hold').addEventListener('click' , function()
                                                   {
    
    
    //add curent score to global score
    
    // Update the UI
    
    // Check if player won the game
    
    if(gameplaying)
        {
            
        
    
    scores[activeplayer]=scores[activeplayer]+roundscore;
    
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    
    
    
    if(scores[activeplayer]>=100)
        {
            document.querySelector("#name-"+activeplayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
            gameplaying=false;
        }
    
    
    
    else{
        
    
   nextplayer();
    }
        }
    
});
      


function nextplayer()
{
    
      if(activeplayer==0)
                 activeplayer=1;
             else
                 activeplayer=0;
             
             roundscore=0;
             
             
             document.getElementById('current-0').textContent=0;
             document.getElementById('current-1').textContent=0;
             
             
             document.querySelector('.player-0-panel').classList.toggle('active');
             
             document.querySelector('.player-1-panel').classList.toggle('active');
             
             document.querySelector('.dice').style.display='none';
    
}


document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    scores=[0,0];
    activeplayer=0;
    roundscore=0;
    document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';


document.getElementById('current-1').textContent='0';

    
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    
}














