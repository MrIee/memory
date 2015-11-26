#Memory
by Alex Lee

http://alexwlee89.github.io/memory/

* [About](#about)
* [Approach](#approach)
* [Features](#features)
* [Libraries](#libraries)


##<a name="about"></a>About
Memory is a card game that can be played by one or more players. This version is built for only one player.
The game starts by spreading even number of cards face down over a playing surface. Players or player then take(s) turns flipping two cards over. If the cards match, then they remain flipped over. The aim of the game is to flip all of the cards over.


##<a name="approach"></a>Approach
I approached the challenge of creating a jQuery based Memory game by coding the dom manipulation first then adding the program/backend logic. The dom manipulation was created using several jQuery plugins which helped to automate many of the more complicated manipulations e.g (moving the cards to the right spot on the grid, flipping the cards in "3D").

Once the dom manipulation was in place however, attaching the logic to it was a simple matter of determining which pieces of data would/could be taken from the dom and which needed to be stored in javascript.


##<a name="features"></a>Features
* Single player
* 3 different board sizes ( small[5x4], medium[6x5] and large[7x6] )
* 3D Flipping Effect
* Sounds


##<a name="libraries"></a>Libraries
* jQuery-ui		(https://jqueryui.com/)
  - Required jQuery UI to use .position/Position to move card elements
  
* jQuery flip	(https://nnattawat.github.io/flip/)
  - Flip library used for 3D card flipping effect
  
* ion.sound 		(https://github.com/IonDen/ion.sound)
  - For playing playing audio files