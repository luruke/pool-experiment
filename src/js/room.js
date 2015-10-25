class Room {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.floor);

    var geometry = new THREE.BoxGeometry( 20, 20, 20 );
    var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    cube.translateY(80);

    //this.group.add(cube);

    return this.group;
  }

  get floor() {
    let wood = THREE.Cache.get('wood.jpg');
        wood.wrapS = THREE.RepeatWrapping;
        wood.wrapT = THREE.RepeatWrapping;
        wood.repeat.set(4, 4);

    let woodBump = THREE.Cache.get('wood_bump.jpg');
        woodBump.wrapS = THREE.RepeatWrapping;
        woodBump.wrapT = THREE.RepeatWrapping;
        woodBump.repeat.set(4, 4);

    let woodNormal = THREE.Cache.get('wood_normal.jpg');
        woodNormal.wrapS = THREE.RepeatWrapping;
        woodNormal.wrapT = THREE.RepeatWrapping;
        woodNormal.repeat.set(4, 4);

    let geometry = new THREE.PlaneGeometry(500, 500);
        geometry.rotateX(1.57);

    let material = new THREE.MeshPhongMaterial({
      color: COLORS.black,
      map: wood,
      bumpMap: woodBump,
      bumpScale: 3,
      normalMap: woodNormal,
      side: THREE.DoubleSide
    });

    let mesh = new THREE.Mesh(geometry, material);
        this.group.castShadow = true;
        mesh.receiveShadow = true;

    return mesh;
  }
}

module.exports = new Room;
