class Table {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.base);
    this.group.add(this.surface);

    let leg1 = new TableLeg();
        leg1.translateX(78);
        leg1.translateZ(35);

    let leg2 = new TableLeg();
        leg2.translateX(-78);
        leg2.translateZ(-35);

    let leg3 = new TableLeg();
        leg3.translateX(-78);
        leg3.translateZ(35);

    let leg4 = new TableLeg();
        leg4.translateX(78);
        leg4.translateZ(-35);

    this.group.add(leg1);
    this.group.add(leg2);
    this.group.add(leg3);
    this.group.add(leg4);

    return this.group;
  }
  get surface() {
    let texture = THREE.Cache.get('pool_texture.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(50, 50);

    let bump = THREE.Cache.get('pool_bump.jpg');
        bump.wrapS = THREE.RepeatWrapping;
        bump.wrapT = THREE.RepeatWrapping;
        bump.repeat.set(50, 50);

    let geometry = new THREE.PlaneGeometry(200, 100);
        geometry.rotateX(1.57);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.green,
      side: THREE.DoubleSide,
      shininess: 0,
      map: texture,
      bumpMap: bump,
      depthWrite: false
    });

    let mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = 0.2;
        mesh.receiveShadow = true;
        mesh.castShadow = true;

    return mesh;
  }
  get base() {
    let geometry = new THREE.CylinderGeometry(70, 60, 50, 4, 1);
        geometry.rotateY(0.78);
        geometry.scale(2, 1.0, 1.0);
        geometry.translate(0, -(geometry.parameters.height / 2), 0);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.black,
      depthWrite: false
    });

    let mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = 0.1;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

    return mesh;
  }
}

class TableLeg {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.leg);

    return this.group;
  }
  get leg() {
    let geometry = new THREE.CylinderGeometry(7, 3, 10, 32);
        geometry.translate(0, -55, 0);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.black
    });
    let mesh = new THREE.Mesh(geometry, material);

    return mesh;
  }
}

module.exports = new Table();
