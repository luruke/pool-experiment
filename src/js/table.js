class Table {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.base);
    this.group.add(this.surface);

    return this.group;
  }
  get surface() {
    let texture = THREE.Cache.get('pool_texture.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(50, 50);

    let geometry = new THREE.PlaneGeometry(200, 100);
        geometry.rotateX(1.57);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.green,
      side: THREE.BackSide,
      shininess: 0,
      map: texture,
      depthWrite: false
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 0.2;
    //mesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), 1.57);

    return mesh;
  }
  get base() {
    let geometry = new THREE.CylinderGeometry(70, 60, 50, 4, 1);
        geometry.rotateY(-0.78);
        geometry.scale(2, 1.0, 1.0);
        geometry.translate(0, -(geometry.parameters.height / 2), 0);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.black,
      depthWrite: false
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 0.1;

    return mesh;
  }
}

module.exports = new Table();
