  if (this.mro.body.y <= game.world.width - this.mro.body.width - 50 && isFacingRight) {
            this.mro.body.velocity.x = 300;
        } else {
            isFacingRight = false;
            this.mro.anchor.setTo(.5,1);
            this.mro.scale.y = 1;
            this.mro.body.velocity.x = 300;
        }