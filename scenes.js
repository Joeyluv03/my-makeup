
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// example of global var that can be used between scenes


////////////////////////////// Scene 1 /////////////////

function intro()  {

    var playButton;
    var helpButton;
    var infoButton;  
    
    this.setup = function() {
      console.log("Scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

     
      textAlign(CENTER);
      textSize(29);
    
      playButton = new Button({
        x: width/2,	y: height/2,
        width: 180,		height: 70,
        align_x: 0,		align_y: 0,
        content: 'Play',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 36,
           text_font: loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
            
        },

        style_pressed: {
           color: '#fff',
           background: '#ffcea6',
           text_size: 36,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },
        on_press() {
           mgr.showScene(scene2, true);
           playclick();
        },

        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });


     helpButton = new Button({
      x: width/2,	y: 500,
      width: 180,		height: 70,
      align_x: 0,		align_y: 0,
      content: 'Help',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
         text_font: loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(help, true);
         playclick();

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   infoButton = new Button({
    x: 40,	y: 760,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Info',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 36,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(info, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("Scene1");
     
    }

    this.draw = function()
    {
       
        image(bg, 0, 0, width, height);
      

        textAlign(CENTER);
        // textSize(80);
        fill(255);

        playButton.draw();
        //dressupButton.draw();
        helpButton.draw();
        infoButton.draw();


        push();
        //
        translate(width/2,height/2);
        fill(240, 110, 160);
        textSize(90);
        text("My Makeup", 0, -140);
        
      
        pop();


      }

      this.mousePressed = function()
      {
          if (click.isPlaying()) {
  
              click.pause(); // .play() will resume from .pause() position
  
          } else {
              click.play();
  
          }
  
  
       }
  
  } 






///////////////////////  2  ////////////////////////

function scene2()  {

  let hairdown;
  let buns;
  let straight;
  let highBun;
  
  let currentImage;
  let currentImage2;
  let currentImage3;
  let currentImage4;
  let currentImage5;


  var helpButton;
  var titleButton;
  var saveButton;
  var infoButton;
  var hairswitchButton;
  var linerswitchButton; 
  var shadowswitchButton;
  var blushswitchButton;
  var lipswitchButton;
  var freckleswitchButton;


  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
    
      //set up for me and the bg
      bg2 = loadImage("assets/makeup-room.jpg");
      tank = loadImage("assets/tank.png");

      //Hair
      currentImage = loadImage("assets/high-bun.png");
      highBun = loadImage("assets/high-bun.png");
      hairdown = loadImage("assets/hair-down.png");
      buns = loadImage("assets/buns.png");
      straight = loadImage("assets/straight-hair.png");

      //eyeshadow
      currentImage3 = loadImage("assets/black-eyeshadow.PNG");
      blackEye = loadImage("assets/black-eyeshadow.PNG");
      brownEye = loadImage("assets/brown-eyeshadow.PNG");
      redEye = loadImage("assets/red-eyeshadow.PNG");
      pinkEye = loadImage("assets/pink-eyeshadow.PNG");


      //eyeliner
      currentImage2 = loadImage("assets/small-liner.png");
      sBlack = loadImage("assets/small-liner.png");
      bBlack = loadImage("assets/long-liner.png");
      brown = loadImage("assets/brown-liner.png");
      white = loadImage("assets/white-liner.png");


      //blush
      currentImage4 = loadImage("assets/pink-blush.PNG");
      pinkBlush = loadImage("assets/pink-blush.PNG");
      redBlush = loadImage("assets/red-blush.PNG");
      peachBlush = loadImage("assets/peach-blush.PNG");

      //Lips
      currentImage5 = loadImage("assets/pink-lip.PNG");
      pinkLip = loadImage("assets/pink-lip.PNG");
      pinkLiner = loadImage("assets/pink-liner.PNG");
      redLip = loadImage("assets/red-lip.PNG");
      redLiner = loadImage("assets/red-liner.PNG");

      //freckles
      currentImage6 = loadImage("assets/freckles.PNG");
      freckles = loadImage("assets/freckles.PNG");
      noFreckles = loadImage("assets/no-freckles.png");

       //fg
       foreground = loadImage("assets/foreground.png");

//hair
      hairswitchButton = new Button({
        x: 80,	y: 120,
        width: 50,		height: 50,
        align_x: 0,		align_y: 0,
        content: 'Hair',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 24,
           text_font: loadFont('assets/heart-font.ttf'),
           //text_font: 'serif',
           border_width: 0,
           border_color: '',
           border_radius: 5
           
        },
  
        style_pressed: {
           color: '#fff',
           background: '#f2b6cd',
           text_size: 24,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },

        on_press() {
           playclick();

           if(currentImage == highBun){
            currentImage = hairdown;
          }else if(currentImage == hairdown){
            currentImage = buns;
          }else if(currentImage == buns){
            currentImage = straight;
          }else{
            currentImage = highBun;
          };
        },
  
        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });

//eyeliner
     linerswitchButton = new Button({
      x: 510,	y: 120,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Liner',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#f2b6cd',
         text_size: 24,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },

      on_press() {
         playclick();
     
         if(currentImage2 == sBlack){
          currentImage2 = bBlack;
        }else if(currentImage2 == bBlack){
          currentImage2 = brown;
        }else if(currentImage2 == brown){
          currentImage2 = white;
        }else{
         currentImage2 = sBlack;
       };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });

//shadow
   shadowswitchButton = new Button({
      x: 80,	y: 220,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Shadow',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#f2b6cd',
         text_size: 24,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
     
         if(currentImage3 == blackEye){
          currentImage3 = brownEye;
        }else if(currentImage3 == brownEye){
          currentImage3 = redEye;
        }else if(currentImage3 == redEye){
          currentImage3 = pinkEye;
        }else{
         currentImage3 = blackEye;
       };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });

//blush
   blushswitchButton = new Button({
      x: 510,	y: 220,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Blush',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#f2b6cd',
         text_size: 24,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
     
         if(currentImage4 == pinkBlush){
          currentImage4 = redBlush;
        }else if(currentImage4 == redBlush){
          currentImage4 = peachBlush;
        }else{
         currentImage4 = pinkBlush;
       };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });

//lip button
   lipswitchButton = new Button({
      x: 510,	y: 330,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Lips',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#f2b6cd',
         text_size: 24,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
   
         if(currentImage5 == pinkLip){
            currentImage5 = pinkLiner;
          }else if(currentImage5 == pinkLiner){
            currentImage5 = redLip;
          }else if(currentImage5 == redLip){
           currentImage5 = redLiner;
         } else {
            currentImage5 = pinkLip;
         };  

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });

//freckles
freckleswitchButton = new Button({
   x: 80,	y: 330,
   width: 50,		height: 50,
   align_x: 0,		align_y: 0,
   content: 'Freckles',
   style_default: {
      color: '#fff',
      background: '#f56998',
      text_size: 24,
      text_font: loadFont('assets/heart-font.ttf'),
      //text_font: 'serif',
      border_width: 0,
      border_color: '',
      border_radius: 5
      
   },

   style_pressed: {
      color: '#fff',
      background: '#f2b6cd',
      text_size: 24,
      text_font:  loadFont('assets/heart-font.ttf'),
      border_width: 0,
      border_color: '',
      border_radius: 5
   },
   on_press() {
      //mgr.showScene(help, true);
      playclick();
  
      if(currentImage6 == freckles){
       currentImage6 = noFreckles;
     }else{
       currentImage6 = freckles;
     };

   },

   style_hover: {
     background: '#f2b6cd',
     color: '#111',
   },
});


      helpButton = new Button({
        x: 40,	y: 40,
        width: 50,		height: 50,
        align_x: 0,		align_y: 0,
        content: '?',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 36,
          //  text_font: loadFont('assets/heart-font.ttf'),
           text_font: 'serif',
           border_width: 0,
           border_color: '',
           border_radius: 5
           
        },
  
        style_pressed: {
           color: '#fff',
           background: '#ffcea6',
           text_size: 36,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },
        on_press() {
           mgr.showScene(help, true);
           playclick();
  
        },
  
        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });


     titleButton = new Button({
      x: 560,	y: 40,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Home',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(intro, true);
         playclick();

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   saveButton = new Button({
    x: 560,	y: 760,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Save',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       playclick();
       saveFrames('image-0', 'png', 1, 1);

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });


 infoButton = new Button({
  x: 40,	y: 760,
  width: 50,		height: 50,
  align_x: 0,		align_y: 0,
  content: 'Info',
  style_default: {
     color: '#fff',
     background: '#f56998',
     text_size: 36,
     text_font: loadFont('assets/heart-font.ttf'),
     //text_font: 'serif',
     border_width: 0,
     border_color: '',
     border_radius: 5
     
  },

  style_pressed: {
     color: '#fff',
     background: '#ffcea6',
     text_size: 36,
     text_font:  loadFont('assets/heart-font.ttf'),
     border_width: 0,
     border_color: '',
     border_radius: 5
  },
  on_press() {
     mgr.showScene(info, true);
     playclick();

  },

  style_hover: {
    background: '#f2b6cd',
    color: '#111',
  },
});

  }

  this.enter = function()
  {

      //console.log("We are at  scene2 (again?)");
     
  }

    this.draw = function()
    {



      background(0);
      image(bg2, 0, 0, width, height);


   
     //freckles
     image(currentImage6, 0, 0, width, height);
     //blush
      image(currentImage4, 0, 0, width, height);
      //shadow
      image(currentImage3, 0, 0, width, height);
     //eyeliner
      image(currentImage2, 0, 0, width, height);
      //lips
      image(currentImage5, 0, 0, width, height);
      //hairstyle
     image(currentImage, 0, 0, width, height);
 
 
      image(tank, 0, 0, width, height);




     //foreground
    image(foreground, 0, 0, width, height);


      

      lipswitchButton.draw();
      hairswitchButton.draw();
      linerswitchButton.draw();
      shadowswitchButton.draw();
      blushswitchButton.draw();
      freckleswitchButton.draw();
      helpButton.draw();
      titleButton.draw();
      infoButton.draw();
      saveButton.draw();
     

      

      
      
    }


    this.mousePressed = function() {
      //console.log("exit");
      //this.sceneManager.showNextScene();

    }





}


//////////////////////info page/////////////////////////


function info()  {

  var titleButton;
  


  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.

    background(255, 205, 158);
   
    textAlign(CENTER);
    textSize(29);
  

   titleButton = new Button({
    x: 560,	y: 40,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Home',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(intro, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      // textX = 10;
      // textY = 0;

    // loy = 100;
   // background("red");

  }

  this.draw = function()
  {
     
     // image(bg, 0, 0, width, height);
      background(255, 205, 158);
      textAlign(CENTER);
      // textSize(80);
      fill(240, 110, 160);
      textSize(64);
      text("Statement", 100, 50);

      
      titleButton.draw();
    


      push();
      //
      translate(105,130);
      fill(240, 110, 160);
      textSize(26);


      text("Welcome to My Makeup! \nIn this game, I invite players to help me paint my face.\n The player will be given a series of options that change \ncertain aspects of my face. Decorate me as you see fit.\n In this game, I want players to be able to judge me while they see fit. \nThey can change me if they want to. Which makeup of mine are their favorite?", 200,100);
      text("The thought of having others judge \nme was a bit overwhelming at first. In the beginning of my life, \nI often dressed and acted according to the trends at the time. \nWe as a society feel the pressure to go with the trends otherwise we may be \nobjected to bullying or feeling ostracized.", 200,300);
      text(" I based the aesthetic to be doll-like \nto emphasize the fact that I am not in control of what I look like. \nThe main character and the assets are all based around me and my \npersonal makeup routine. This is because this concept is very personal\n to me because I want to face the judgement head on, \nwhen I didn't get to in the past.", 200,500);
      
    
      pop();


    }

    this.mousePressed = function()
    {
        if (click.isPlaying()) {

            click.pause(); // .play() will resume from .pause() position

        } else {
            click.play();

        }

     }

} 



//////////////////help/////////////////

function help()  {

  
  var titleButton;


  this.setup = function() {
   //  console.log("We are at setup for scene1");

    textAlign(CENTER);
    textSize(29);
  
    playButton = new Button({
      x: width/2,	y: height/2,
      width: 180,		height: 70,
      align_x: 0,		align_y: 0,
      content: 'Play',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
         text_font: loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(scene2, true);
         playclick();
      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   titleButton = new Button({
    x: 560,	y: 40,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Home',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(intro, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });


saveButton = new Button({
   x: 100,	y: 200,
   width: 50,		height: 50,
   align_x: 0,		align_y: 0,
   content: 'Save',
   style_default: {
      color: '#fff',
      background: '#f56998',
      text_size: 24,
      text_font: loadFont('assets/heart-font.ttf'),
      //text_font: 'serif',
      border_width: 0,
      border_color: '',
      border_radius: 5
      
   },

   style_pressed: {
      color: '#fff',
      background: '#ffcea6',
      text_size: 36,
      text_font:  loadFont('assets/heart-font.ttf'),
      border_width: 0,
      border_color: '',
      border_radius: 5
   },
   on_press() {
   },

   style_hover: {
     background: '#f2b6cd',
     color: '#111',
   },
});



  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
     

  }

  this.draw = function()
  {
     
      //image(bg, 0, 0, width, height);

      background(255, 205, 158);

    

      textAlign(CENTER);
      // textSize(80);
      fill(255);

      
      titleButton.draw();
      saveButton.draw();


      fill(240, 110, 160);
      textSize(60);
      text("Controls", 100, 50);

      
      fill(240, 110, 160);
      textSize(32);
      text("This button allows you to save your work", 380, 200);

      
      fill(240, 110, 160);
      textSize(60);
      text("Shortcuts", 100, 350);

   
      fill(240, 110, 160);
      textSize(40);
      text("One key is Title Page", width/2, 400);
      text("Two key is Main Page", width/2, 440);
      text("Three key is Info Page", width/2, 480);
      text("Four, H, and h key is Help Page", width/2, 520);

    }

    this.mousePressed = function()
    {
        if (click.isPlaying()) {

            click.pause(); // .play() will resume from .pause() position

        } else {
            click.play();

        }

     }

} 


