var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
    console.log("random palette got called")

	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];

	/*res.send('Your random palette is called: ' + randomPalette['title']);*/


   

    console.log(randomPalette['colors']['hex']);
    res.json(randomPalette['colors']);
    return randomPalette['colors'];
    // console.log( );
    //return randomPalette['colors']

}