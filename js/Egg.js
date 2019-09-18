let Egg = function (game,) {
    this.game = game;
    this.x = 0;
    this.y = 80;
    this.img = null;
    this.type = 1;
    this.visible = true;
    this.popped = false;
    this.count = 0;
    this.addedScrore = false;
    let self = this;

    this.init = function () {
        this.img = this.game.resource.egg1.img;
        this.type = this.getRandomInt(1, 3); // type egg is 1 or 2
        if (this.type === 1) {
            this.img = this.game.resource.egg1.img;
        } else if (this.type === 2) {
            this.img = this.game.resource.shit.img;
        } else {
            this.img = this.game.resource.egg2.img;
        }
        var positions = [78, 178, 278, 378];
        this.x = positions[this.getRandomInt(0, 3)];
    };
    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.update = function () {
        // console.log("y1: "+this.y)
        if (this.y <= 380) {
            this.y += 5;
        } else if (this.type === 1 || this.type === 3) {
            this.popped = true;
        } else {
            this.visible = false;
            this.popped = false;
        }
        if (this.popped) {
            this.img = this.game.resource.egg_popped.img;
        }

        this.checkEggInBowl();

    };




    this.checkEggInBowl = function () {
        if (
            (this.x > this.game.bowl.x) &&
            (this.x < (this.game.bowl.x + this.game.resource.bowl.img.width))
            && (this.y > 380)

        ) {
            if (this.addedScrore == false) {
                if (this.type === 1) {
                    this.game.score += 5;
                    this.addedScrore = true;
                } else if (this.type === 3) {
                    this.game.score += 10;
                    this.addedScrore = true;
                } else if (this.type ===2){
                    this.game.score -= 50;
                    this.addedScrore = true;
                }
            }
            this.visible = false;
            if (this.game.score <0){
                alert("Game over: "+this.game.score);
                location.reload();
            }

        }

    };

    this.draw = function () {
        if (this.visible) {
            this.game.context.drawImage(
                self.img,
                this.x - (this.img.width / 2),
                this.y
            );
        }
    }
};