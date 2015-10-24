class Lamp {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.light);

    return this.group;
  }
  get light() {
    let light = new THREE.PointLight( 0x404040, 15, 150 );

    return light;
  }
}

module.exports = Lamp;
