var gameImage = function (name) {
    this.img = null; // image
    this.name = name;
    this.loaded = false; // status load image
    var self = this;

    this.load = function () {
        this.img = new Image();
        this.img.onload = function () {
            self.loaded = true; // load image
        };
        this.img.src = 'images/' + name + '.png';
    }
};

let GameResource = function (game) {
    this.game = game;
    this.background = new gameImage('sky');
    this.bar = new gameImage('bar');
    this.bowl = new gameImage('bowl');
    this.chicken = new gameImage('chicken');
    this.egg1 = new gameImage('egg1');
    this.egg2 = new gameImage('egg2');
    this.egg_popped = new gameImage('egg-popped');
    this.shit = new gameImage('shit');


    var self = this;

    //load all image
    this.load = function () {
        this.background.load();
        this.bar.load();
        this.bowl.load();
        this.chicken.load();
        this.egg1.load();
        this.egg2.load();
        this.egg_popped.load();
        this.shit.load();

        setInterval(function () {
            self.checkAllImageLoaded();
        }, 500)
    };

    this.checkAllImageLoaded = function () {
        if (
            (this.background.loaded)&&
            (this.bar.loaded)&&
            (this.bowl.loaded)&&
            (this.chicken.loaded)&&
            (this.egg1.loaded)&&
            (this.egg2.loaded)&&
            (this.egg_popped.loaded)&&
            (this.shit.loaded)
        ) {
            this.game.resourceLoaded = true;
        }
    }
};