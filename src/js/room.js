class Room {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.floor);

    return this.group;
  }

  get floor() {
    let wood = THREE.Cache.get('wood.jpg');

    let geometry = new THREE.PlaneGeometry(500, 500);
        geometry.rotateX(1.57);

    let material = new THREE.MeshPhongMaterial({
      map: wood,
      side: THREE.BackSide
    });
    let mesh = new THREE.Mesh(geometry, material);

    return mesh;
  }
}

module.exports = new Room;
