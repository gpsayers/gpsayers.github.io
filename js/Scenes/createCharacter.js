var createChar = function () {};


createChar.prototype = {

    preload: function () {
        game.load.atlas('button','assets/SpriteSheet.png', 'assets/SpriteJSON.json' );
    },

    create: function () {

        var div = document.getElementById('gameForm');

        div.style.visibility = 'visible';

        var button = game.add.button(100, 150,'button', this.getData, this, 'g21776.png','g21766.png','g21786.png','g21766.png' );

        button.width = 50;
        button.height = 50;
    },

    update: function () {

    },

    getData: function () {

        playerName = document.getElementById("name").value;

        game.state.start("gameMain");

        var div = document.getElementById('gameForm');

        div.style.visibility = 'hidden';

        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
        }

    },


};

