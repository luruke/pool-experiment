class Lamp {
  constructor() {
    this.group = new THREE.Object3D();

    let light = this.light;

    this.group.add(light);
    this.group.add(new THREE.CameraHelper( light.shadow.camera ));

    var SpotLightHelper = new THREE.SpotLightHelper(light);
    this.group.add( SpotLightHelper );

    this.group.castShadow = true;
    this.group.receiveShadow = true;

    return this.group;
  }
  get light() {
    //SpotLight(hex, intensity, distance, angle, exponent, decay)
    let light = new THREE.SpotLight( 0xffffff, 10 );
    //light.position.set( 0, 1, 0 );
    light.castShadow = true;
    light.shadow.camera.lookAt(new THREE.Vector3(0,0,0));

    light.shadowBias = 0;
    light.shadowMapWidth = 100;
    light.shadowMapHeight = 100;

    light.shadowCameraNear = 70;
    light.shadowCameraFar = 200;
    light.shadowCameraFov = 100;

    return light;
  }
}

module.exports = Lamp;
