let Background = function (game) {
    this.game = game;
    let self = this;

    this.draw = function () {
        self.game.context.drawImage (
            self.game.resource.background.img, 0, 0);
    }
};
