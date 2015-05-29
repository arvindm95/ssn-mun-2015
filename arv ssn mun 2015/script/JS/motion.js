// JavaScript Document

// @naamdesigns
var arv = (function(){
	
	var world = document.getElementById('world'),
		
		front = document.getElementById('top-left-fixed-block'),
		
		
		orientation = 0,
		perspective = {
			cx: 50, // current x
			cy: 50, // current y
			tx: 50, // target x
			ty: 50  // target y
		};
	
	function initialize() {
		
		addEventListener( 'mousemove', onMouseMove, false);
		
		addEventListener( 'orientationchange', onOrientationChange, false );
		addEventListener( 'devicemotion', onMotionChange, false );
		
		updateOrientation();
		update();
	}
	
	function onMouseMove( event ) {
		perspective.tx = Math.round( ( event.clientX / window.innerWidth ) * 100 );
		perspective.ty = Math.round( ( event.clientY / window.innerHeight ) * 100 );
	};
	
	function onOrientationChange( event ) {
		updateOrientation();
		
		event.preventDefault();
	}
	
	function onMotionChange( event ) {
		var beta = orientation === 1 ? -event.accelerationIncludingGravity.z : -event.accelerationIncludingGravity.z;
		var gamma = orientation === 1 ? -event.accelerationIncludingGravity.y : -event.accelerationIncludingGravity.x;
		
		perspective.tx = ( ( gamma / 5 ) + 0.5 ) * 120;
		perspective.ty = ( ( beta / 5 ) +1 ) * 150;
		
		event.preventDefault();
	}
	
	function updateOrientation() {
		
		if( window.orientation == 90 || window.orientation == -90 ) {
			orientation = 1;
		} else {
			orientation = 0;
		}
	}
	
	function update() {
		
		perspective.cx += ( perspective.tx - perspective.cx ) * 0.1;
		perspective.cy += ( perspective.ty - perspective.cy ) * 0.1;
		
		
		
		// Apply the current perspective
		world.style.webkitPerspectiveOrigin = perspective.cx + '% ' + perspective.cy + '%';
				world.style.mozPerspectiveOrigin = perspective.cx + '% ' + perspective.cy + '%';

		world.style.perspectiveOrigin = perspective.cx + '% ' + perspective.cy + '%';
		
		
		setTimeout( update, 1000 / 30 );
	}
	
	
	initialize();
	
})();