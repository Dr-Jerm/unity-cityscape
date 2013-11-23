#pragma strict


function Start () {
	var buildingCount = 300;
	var citySize = 500;
	var baseBuildingSize = 10;
	var baseBuildingHeight = 50;
	for (var b = 0; b < buildingCount; b++) {
		var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
		
		var randomBuildingSizeX = 25 * Random.value;
		var randomBuildingSizeZ = 25 * Random.value;
		var randomBuildingHeight = 150 * Random.value;
		
		var sY = baseBuildingHeight + randomBuildingHeight;
		var sX = baseBuildingSize + randomBuildingSizeX;
		var sZ = baseBuildingSize + randomBuildingSizeZ;
		
		var tX = ((Random.value-0.5)*2)*citySize;	
		var tZ = ((Random.value-0.5)*2)*citySize;
		var tY = sY/2;
		
		var rY = Random.value*45;
        
        //cube.AddComponent(Rigidbody);
        cube.transform.position = Vector3 (tX, tY, tZ);
        cube.transform.localScale = Vector3 (sX, sY, sZ);
        cube.transform.Rotate(0, rY, 0);
    }
}

function Update () {

}