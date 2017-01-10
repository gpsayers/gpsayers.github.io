var createChar = function () {};

var input = "";

createChar.prototype = {

    preload: function () {
        game.load.atlas('button','assets/SpriteSheet.png', 'assets/SpriteJSON.json' );
    },

    create: function () {



      game.add.plugin(Fabrique.Plugins.InputField);

        input = game.add.inputField(10,
            90,
            {
                zoom: false
            });

       input.setText("Fred");

       Fabrique.Plugins.InputField.onKeyboardOpen.add(function () {
           
       });
       Fabrique.Plugins.InputField.onKeyboardClose.add(function () {
           this.resizeBackgroundImage();
       });

        var button = game.add.button(100, 150,'button', this.getData, this, 'g21776.png','g21766.png','g21786.png','g21766.png' );

        button.width = 50;
        button.height = 50;
        
    },

    update: function () {

    },

    getData: function () {

        //gameVariables.player.name = input.value;
        playerName = input.value; // document.getElementById("name").value;

        
        game.state.start("gameMain");


        //div.style.visibility = 'hidden';

    },


};
