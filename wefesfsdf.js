if (this.mro.body.x <= game.world.width - 50 && isFacingRight) {
            this.mro.body.velocity.x = 300;//is going to right of screen going this fast
            this.mro.anchor.setTo(.5,1);//will flip to the left
            this.mro.scale.x = 1;//will flip to the left
        } else if (this.mro.body.x !== 0){//makes mario flip
            isFacingRight = false;//causes him to go left
            this.mro.anchor.setTo(.5,1);//will flip to the right
            this.mro.scale.x = -1;//will flip to the right
            this.mro.body.velocity.x = -300;//is going to the left of the screen going this fast
        } else {
            isFacingRight = true;
            
        }