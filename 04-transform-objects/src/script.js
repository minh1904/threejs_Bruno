import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
group.scale.y = 1;
group.rotation.y = 0.2;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' })
);

cube1.rotation.set(0, 2, 0);

group.add(cube1);

const wheel1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.4, 0.4),
  new THREE.MeshBasicMaterial({ color: 'red' })
);
wheel1.rotation.set(0, 0.5, 0);
wheel1.position.set(-0.67, -0.69, -1);
group.add(wheel1);

const wheel2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.4, 0.4),
  new THREE.MeshBasicMaterial({ color: 'red' })
);
wheel2.rotation.set(0, 0.5, 0);
wheel2.position.set(0.07, -0.69, 0.7);
group.add(wheel2);

const wheel3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.4, 0.4),
  new THREE.MeshBasicMaterial({ color: 'red' })
);
wheel3.rotation.set(0, 0.5, 0);
wheel3.position.set(0.62, -0.69, 0.6);
group.add(wheel3);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'yellow' })
);

cube3.position.x = -1.5;
group.add(cube3);
// mesh.position.y = 1;
// mesh.position.x = 0;
// mesh.position.z = 0.5;

// mesh.position.set(1, 2, 0);
// mesh.position.normalize();
// console.log(mesh.position.normalize());
// scene.add(mesh);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// mesh.scale.x = 2;
// mesh.scale.y = 1;
// mesh.scale.z = 1;

// mesh.rotateX(1.4);
// mesh.rotateY(1.5);
// mesh.rotateZ(0.1);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, -0.5, 3);
scene.add(camera);

// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
