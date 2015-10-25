require('babelify/polyfill');

global.THREE = require('three.js');
global.COLORS = require('./colors.js');
THREE.Cache.enabled = true;

var MainScene = {
  init: function() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene = new THREE.Scene();
    //this.scene.fog = new THREE.Fog(COLORS.black, 1, 700);

    this.initCamera();
    this.initRenderer();
    this.initLight();

    let lamp = require('./lamp.js');
    let lamp1 = new lamp();
    lamp1.position.set(0, 100, 0);
    this.scene.add(lamp1);

    let room = require('./room.js');
    this.scene.add(room);

    let table = require('./table.js');
        table.translateY(60);

    this.scene.add(table);

    let ball = require('./ball.js');
    let ball1 = new ball();
        ball1.position.set(0, 64, 0);
    this.scene.add(ball1);

    //var axisHelper = new THREE.AxisHelper( 30 );
    //this.scene.add( axisHelper );

    this.camera.position.z = 300;
    this.render();

    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onResize.bind(this));
  },
  onResize: function() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.renderer.setSize( this.width, this.height );
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  },
  initLight: function() {
    let ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.scene.add(ambientLight);

    let hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    this.scene.add(hemisphereLight);
  },
  initCamera: function() {
    let OrbitControls = require('three-orbit-controls')(THREE);

    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 1000);
    this.controls = new OrbitControls(this.camera);

    //this.controls.minDistance = 100;
    //this.controls.maxDistance = 400;
    //this.controls.maxPolarAngle = 1.4; // radians
  },
  initRenderer: function() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;
    //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  },
  render: function() {
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
};

let loader = require('./loader.js');
new loader().then(() => {
  MainScene.init();
});
