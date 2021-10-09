import * as THREE from 'three';

const avatarTexture = new THREE.TextureLoader().load('static/yarden.jpg');
export const Avatar = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ map: avatarTexture })
);
