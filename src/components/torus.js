import * as THREE from 'three';

const torusGeometry = new THREE.TorusGeometry(10, 2, 46, 100);
const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6347,
});
export const Torus = new THREE.Mesh(torusGeometry, torusMaterial);
