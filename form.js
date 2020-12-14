class Form{
    constructor (){
        this.title=createElement('h1');
        this.button=createButton('DESTROY NOW');
        this.greetings=createElement('h3');
        this.story=createElement('h2')
        this.reset=createButton('Try Again')
    }
    display(){
        this.reset.hide();
        this.story.html("Jupiter has exploded now there are Asteroids flying in space.There were Aliens living on Jupiter their home has been destroyed so they came to look for a new home.")
        this.story.position(width/2-750,0)
        this.story.style('color','white')
        this.title.html("Pixel Shooter");
        this.title.position(width/2-55,200);
        this.title.style('color','white')
        this.button.position(windowWidth/2,windowHeight/2);
        this.button.style('background-color','grey')
        this.greetings.html("Shoot the asteroids and aliens and what ever you do SAVE THE EARTH. Your jet has three lives use those three wisely");
        this.greetings.style('color','white')
        this.greetings.position(width/2-500,height-100);
        this.button.mousePressed(()=>{
    
            this.title.hide();
            this.button.hide();
            gameState=1

        });
    }
    hide(){
        this.story.hide();
        this.title.hide();
        this.button.hide(); 
        this.greetings.hide();
        this.reset.hide();
    }
    end(){
   this.reset.show();
    this.reset.style('background-color','black')   
    this.reset.position(windowWidth/2,windowHeight/2-400);
  this.reset.style('color','white')
   this.reset.mousePressed(()=>{
clear();
    gameState=1;
   })

    }
    }