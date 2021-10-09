import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { addStar } from './components/space';
import { Avatar } from './components/avatar';
import { Torus } from './components/torus';
import { createPlanet } from './components/planet';

const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load('static/space.jpeg');
scene.background = spaceTexture;

const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
);
camera.position.setZ(60);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

Torus.position.set(12, 7, -40);
scene.add(Torus);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

Array(300)
    .fill()
    .forEach(() => addStar(scene));

scene.add(Avatar);

const Moon = createPlanet('moon', 2);
Moon.position.set(16, 16, 16);
scene.add(Moon);

const Sun = createPlanet('sun', 9);
Sun.position.set(-16, 16, 16);
scene.add(Sun);

const Earth = createPlanet('earth', 5);
Earth.position.set(9, -9, +9);
scene.add(Earth);

let a = 16;
const movement = 0.05;
function animate() {
    requestAnimationFrame(animate);
    Torus.rotation.x += 0.01;
    Torus.rotation.y += 0.005;
    Torus.rotation.z += 0.01;
    Moon.rotation.x -= 0.01;
    Moon.rotation.y -= 0.005;
    Moon.rotation.z -= 0.01;
    Sun.rotation.x += 0.003;
    Sun.rotation.y += 0.003;
    Sun.rotation.z += 0.003;
    Avatar.rotation.x -= 0.005;
    Avatar.rotation.y -= 0.005;
    Avatar.rotation.z -= 0.005;
    Avatar.position.set(
        Math.cos(a + movement),
        Math.cos(a + movement),
        Math.cos(a + movement)
    );
    const er = Earth.rotation.toArray();
    Earth.rotation.set(er[0], er[1] + 0.005, er[2] + 0);
    controls.update();
    renderer.render(scene, camera);
}

animate();
