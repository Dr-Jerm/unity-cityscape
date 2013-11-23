#pragma strict

function randomBoolean ():boolean {
    if (Random.value >= 0.5)
    {
        return true;
    }
    return false;
}

function drawWindow (px :int, py :int, w :int, h :int, lit, texture :Texture2D) {

	var randR = 0.0;
	var randG = 0.0;
	var randB = 0.0;

	for (var x = px; x < px+w; x++) {
		for (var y = py; y < py+h; y++) {
			if (x == px || y == py) { //draw top and left corner edges of window
				texture.SetPixel(x,y, Color.black);
			 } else if (lit) {
			 	randR = Random.value / 5.0;
				randG = Random.value / 5.0;
				randB = Random.value / 5.0;
				texture.SetPixel(x,y, Color(0.8-randR, 0.8-randG, 0.8-randB));
			 } else {
			 	randR = Random.value / 5;
				randG = Random.value / 5;
				randB = Random.value / 5;
				texture.SetPixel(x,y, Color(0.2-randR, 0.2-randG, 0.2-randB));
			 }
		 }
	 } 
}


function Start () {
	var textureDim = 512;
	// Create a new texture ARGB32 (32 bit with alpha) and no mipmaps
	var texture = new Texture2D(textureDim, textureDim, TextureFormat.ARGB32, true);
	
	for (var x = 0; x < textureDim; x += 8) {
		for (var y = 0; y < textureDim; y += 8) {
			//texture.SetPixel(x,y, Color(Random.value, Random.value, Random.value, Random.value));
			drawWindow(x,y,8,8,randomBoolean(), texture);
	 	}
 	}
	 
	// Apply all SetPixel calls
	texture.Apply();
	 
	// connect texture to material of GameObject this script is attached to
	renderer.material.mainTexture = texture;
}

function Update () {

}