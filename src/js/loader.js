class Loader {
  constructor() {
    let self = this;

    return new Promise((resolve, reject) => {
      self.resolve = resolve;
      self.reject = reject;
      self.init();
    });
  }

  init() {
    this.cache = THREE.Cache;
    this.manager = new THREE.LoadingManager();

    this.loadTextures([
      'pool_texture.png',
      'wood.jpg',
      'wood_bump.jpg',
      'wood_vio.jpg'
    ]);

    this.manager.onLoad = this.resolve;
    this.manager.onError = this.reject;
  }

  loadTextures(array) {
    this.textureLoader = new THREE.TextureLoader(this.manager);

    for(let i in array) {
      let filename = array[i];

      this.textureLoader.load(`img/${filename}`, texture => {
        this.cache.add(filename, texture);
      });
    }
  }
}

module.exports = Loader;
