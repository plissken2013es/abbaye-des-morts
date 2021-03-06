//
// Copyright 2014, Carlos Asensio Martinez <c.asensio@lucera-project.com> (www.lucera-project.com)
//
// This file is part of the port to HTML5 of "Abbaye des morts", an original
// game created by locomalito (www.locomalito.com).
// (c) 2010 - Locomalito & Gryzor87
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License, or (at your option)
// any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program. If not, see <http://www.gnu.org/licenses/>.
//
/* jshint undef: true, unused: true  */
/* global Abbaye */
/* global Phaser */
/* global window */
//-------------------------------------
"use strict";
//-------------------------------------

//-------------------------------------
Abbaye.Boot = function(_game) 
{
	Phaser.State.call(this, _game);
	_game.state.add("Boot", this, false);
};

Abbaye.Boot.prototype = Object.create(Phaser.State.prototype);
Abbaye.Boot.prototype.constructor = Abbaye.Boot;

//-------------------------------------
Abbaye.Boot.prototype.preload = function() 
{
	// background color
	this.game.stage.backgroundColor = "#000";

	// Boot
    this.game.load.image("preloadBackground", Abbaye.BASE_PATH + "assets/graphics/load.png");
    this.game.load.image("preloadBar",        Abbaye.BASE_PATH + "assets/graphics/loadBar.png");
};

//-------------------------------------
Abbaye.Boot.prototype.create = function() 
{
	this.input.maxPointers = 2;
	
	this.stage.disableVisibilityChange = true;
	this.scale.pageAlignHorizontally   = true;
	this.scale.pageAlignVertically     = true;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.minWidth  = 256;
	this.scale.minHeight = 192;
	this.scale.maxWidth  = 1024;
	this.scale.maxHeight = 768;
	this.scale.setScreenSize(true);

	if (!this.game.device.desktop)
	{
//		this.scale.forceOrientation(true, false);
//		this.scale.hasResized.add(this.gameResized, this);
//		this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
//		this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
	}
	else
	{
		this.leaveIncorrectOrientation();
	}
	
	this.game.state.start("Loader");
};

//-------------------------------------
Abbaye.Boot.prototype.update = function() 
{
};

//-------------------------------------
Abbaye.Boot.prototype.render = function() 
{
};

//-------------------------------------
Abbaye.Boot.prototype.enterIncorrectOrientation = function() 
{
	Abbaye.orientated = false;
	document.getElementById('orientation').style.display = 'block';
};

//-------------------------------------
Abbaye.Boot.prototype.leaveIncorrectOrientation = function() 
{
	Abbaye.orientated = true;
	document.getElementById('orientation').style.display = 'none';
};