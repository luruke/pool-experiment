class Ball {
  constructor() {
    this.group = new THREE.Object3D();
    this.group.add(this.ball);

    return this.group;
  }
  get ball() {
    let geometry = new THREE.SphereGeometry( 3, 32, 32 );
    let material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
    let mesh = new THREE.Mesh( geometry, material );
        mesh.castShadow = true;
        mesh.receiveShadow = true;

    return mesh;
  }
}

module.exports = Ball;
