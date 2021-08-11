var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;


        



 
        
        var sprite5 = new cc.Sprite.create(res.BG_png);
        sprite5.setAnchorPoint(cc.p(0.5,0.5));
        sprite5.setPosition(cc.p(size.width/2,size.height/2.25));
        this.addChild(sprite5,0);

        var sprite_action = cc.ScaleTo.create(0,.80,.80);
        sprite5.runAction(sprite_action);


        var label = new cc.LabelTTF("Spin To Earn A Reward","Arial");
        label.setFontSize(30);
        label.setPosition(cc.p(size.width/2,size.height/1.3));
        label.setColor(cc.color(255,255,255));
        this.addChild(label);

        
        



        var sprite1 = new cc.Sprite.create(res.Spin_png);
        sprite1.setAnchorPoint(cc.p(0.5,0.5));
        sprite1.setPosition(cc.p(size.width/2.8,size.height/2.6));
        this.addChild(sprite1,0);


        var sprite_action = cc.ScaleTo.create(0,.5,.5);
        sprite1.runAction(sprite_action);

        var sprite_action = cc.RotateBy.create(.05,40);
        var repeat_action = cc.Repeat.create(sprite_action, 97);
        //sprite1.runAction(repeat_action);
        

        

        var sprite2 = new cc.Sprite.create(res.Border0_png);
        sprite2.setAnchorPoint(cc.p(0.5,0.5));
        sprite2.setPosition(cc.p(size.width/2.8,size.height/2));
        sprite2.setScale(.6,.6);
        this.addChild(sprite2);
                

        cc.spriteFrameCache.addSpriteFrames(res.spriteSheet2_plist);
        var spriteTexture = cc.textureCache.addImage(res.spriteSheet2_png),
            spriteImages  = cc.SpriteBatchNode.create(spriteTexture);
        this.addChild(spriteImages);

        var animFrames = [];
        var str = "";
        for (var i = 0; i < 6; i++) {
            str = "border_" + i + ".png";
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(str);
            var animFrame = new cc.AnimationFrame();
                animFrame.initWithSpriteFrame(spriteFrame, 1, null);
            animFrames.push(animFrame);
        }
        var animation = cc.Animation.create(animFrames, 0.3, 2.5);
        var animate   = cc.Animate.create(animation); 

        


        var sprite8 = new cc.Sprite.create(res.Niddle_png);
        sprite8.setAnchorPoint(cc.p(0.5,0.01));
        sprite8.setPosition(cc.p(size.width/2.8,size.height/1.8));
        this.addChild(sprite8,0);

        var sprite9 = new cc.Sprite.create(res.GO_png);
        sprite9.setAnchorPoint(cc.p(0.5,0.55));
        sprite9.setPosition(cc.p(size.width/2.8,size.height/2.50));
        this.addChild(sprite9,0);

        var sprite_action = cc.ScaleTo.create(0,.6,.6);
        sprite9.runAction(sprite_action);





        


        var sprite10 = new cc.Sprite.create(res.scoreBoard_png);
        sprite10.setAnchorPoint(cc.p(0.5,0.55));
        sprite10.setPosition(cc.p(size.width/1.35,size.height/2));
        this.addChild(sprite10,0);

        var sprite_action = cc.ScaleTo.create(0,.35,.35);
        sprite10.runAction(sprite_action);

        var sprite11 = new cc.Sprite.create(res.berry1_png);
        sprite11.setAnchorPoint(cc.p(0.5,0.55));
        sprite11.setPosition(cc.p(size.width/1.57,size.height/2.7));
        this.addChild(sprite11,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite11.runAction(sprite_action);

        var sprite12 = new cc.Sprite.create(res.berry2_png);
        sprite12.setAnchorPoint(cc.p(0.5,0.55));
        sprite12.setPosition(cc.p(size.width/1.50,size.height/2.7));
        this.addChild(sprite12,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite12.runAction(sprite_action);

        var sprite13 = new cc.Sprite.create(res.berry3_png);
        sprite13.setAnchorPoint(cc.p(0.5,0.55));
        sprite13.setPosition(cc.p(size.width/1.43,size.height/2.7));
        this.addChild(sprite13,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite13.runAction(sprite_action);


        var sprite14 = new cc.Sprite.create(res.berry4_png);
        sprite14.setAnchorPoint(cc.p(0.5,0.55));
        sprite14.setPosition(cc.p(size.width/1.57,size.height/2.3));
        this.addChild(sprite14,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite14.runAction(sprite_action);

        var sprite15 = new cc.Sprite.create(res.berry5_png);
        sprite15.setAnchorPoint(cc.p(0.5,0.55));
        sprite15.setPosition(cc.p(size.width/1.50,size.height/2.3));
        this.addChild(sprite15,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite15.runAction(sprite_action);

        var sprite16 = new cc.Sprite.create(res.berry6_png);
        sprite16.setAnchorPoint(cc.p(0.5,0.55));
        sprite16.setPosition(cc.p(size.width/1.57,size.height/2));
        this.addChild(sprite16,0);

        var sprite_action = cc.ScaleTo.create(0,.05,.05);
        sprite16.runAction(sprite_action);



        var scoreText;
        scoreText = cc.LabelTTF.create("Score:  0","Arial","24",cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(scoreText);
        scoreText.setPosition(550,120);

        var scoreText3;
        scoreText3 = cc.LabelTTF.create("(80-100)","Arial","20",cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(scoreText3);
        scoreText3.setPosition(625,165);

        var scoreText4;
        scoreText4 = cc.LabelTTF.create("(50-79)","Arial","20",cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(scoreText4);
        scoreText4.setPosition(625,195);

        var scoreText5;
        scoreText5 = cc.LabelTTF.create("(0-50)","Arial","20",cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(scoreText5);
        scoreText5.setPosition(625,225);

        var scoreText6;
        scoreText6 = cc.LabelTTF.create("You have Won 0 Berrie(s)","Arial","24",cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(scoreText6);
        scoreText6.setPosition(570,60);

        /*var scoreText2;
        scoreText2 = cc.LabelTTF.create("Total Rewards:","Arial","24",cc.TEXT_ALIGNMENT_RIGHT);
        this.addChild(scoreText2);
        scoreText2.setPosition(660,260);*/



        let count=0;
        var temp=0;
        var totalRotate=0;
        var final=0;       
        var totalScore=0;
        var finalCorrect=0;
        var timer=3000;
      
        var listener1 = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
        swallowTouches: true,
        //onTouchBegan event callback function                      
        onTouchBegan: function (touch, event) { 
            // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.   
            var target = event.getCurrentTarget();  
            
            
            //Get the position of the current point relative to the button
            var locationInNode = target.convertToNodeSpace(touch.getLocation());    
            var s = target.getContentSize();
            var rect = cc.rect(0, 0, s.width, s.height);
            
            //Check the click area
            if (cc.rectContainsPoint(rect, locationInNode)) {       
                
                    sprite1.runAction(repeat_action); 
                    sprite2.runAction(animate); 
                    count++;
                       
                    totalRotate = totalRotate+(40*97);
                    temp = totalRotate % 360;
                    final = Math.ceil(temp/45);
                    cc.log(totalRotate);
                    cc.log(temp);
                    cc.log(final);

                    

                   
                    
                    finalCorrect = finalCorrect+10;
                    final = (final*10)+finalCorrect;
                    //totalScore = totalScore+final;

                    
                    
                    for(i=1;i<=count;i++){
                        timer=timer+4000;

                    }
                    
                        
                    function delayTime(){
                    scoreText.setString("Score: "+final);
                    //scoreText2.setString("Total Rewards: "+totalScore); 
                    if (final>=80){
                        scoreText6.setString("You have Won 3 Berries");
                    }
                    else if (final<80 && final>=50){
                        scoreText6.setString("You have Won 2 Berries");
                    }
                    else {scoreText6.setString("You have Won a Berry");}
                    }

                    setInterval(delayTime,timer);
                    
                    
                return true;
            }
            
            return false;
           
        }
        
        });

       cc.eventManager.addListener(listener1, sprite9);

       


        return true;
    }

    
});




       




var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

