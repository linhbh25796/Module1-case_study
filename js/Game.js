var Game = function () {
    this.canvas = null;
    this.context = null;
    this.resource = null;
    this.chickens = [];
    this.eggs = [];
    this.bar = null;
    this.bowl = null;
    this.resourceLoaded = false;
    this.score = 0;

    var self = this;

    this.init = function () {
        this.canvas = document.createElement('canvas');

        this.canvas.width = 450;
        this.canvas.height = 400;
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        // create object
        this.background = new Background(this)
        this.resource = new GameResource(this);
        this.bar = new Bar(this);
        this.resource.load();
        this.chickens = [
            new Chicken(this, 50, 25),
            new Chicken(this, 150, 25),
            new Chicken(this, 250, 25),
            new Chicken(this, 350, 25)
        ];

        this.bowl = new Bowl(this);
        this.bowl.init();

        setInterval(self.createNewEgg, 500);
    };

    this.start = function () {
        this.loop();
    };

    this.loop = function () {
        self.update();
        self.draw();
        setTimeout(self.loop, 20);
    };
    this.update = function(){
        this.updateAllEggs();
    };
    
    this.restart = function () {
        location.reload();
    };

    this.updateAllEggs = function(){
        for (var i = 0; i < this.eggs.length; i++){
            this.eggs[i].update();
        }
    };

    this.draw = function () {
        self.context.fillStyle = "#3e738e";
        self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        if (self.resourceLoaded == false) {
            self.drawLoading();
        } else {
            self.drawTheWorld();
        }
    };


    this.drawTheWorld = function () {
        self.background.draw();
        this.bar.draw();
        this.bowl.draw();
        self.drawChickens();
        self.drawEggs();
        self.drawScore();
    };

    this.drawChickens = function () {
        for (var i = 0; i < this.chickens.length; i++) {
            this.chickens[i].draw();
        }
    };

    this.drawLoading = function () {   // painting loading
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Loading...', 100, 100);
    };

    this.createNewEgg = function () {
        if (self.resourceLoaded) {
            let newEgg = new Egg(self);
            newEgg.init();
            self.eggs.push(newEgg); // push egg to array of eggs
        }
    };

    this.drawEggs = function () {
        for (let i =0;i<this.eggs.length;i++){
            this.eggs[i].draw();
        }
    }

    this.drawScore = function(){
        self.context.fillStyle = '#ffffff';
        self.context.font = '15px Arial';
        self.context.fillText('Score: ' + this.score, 10, 30);
    }
    
    
};