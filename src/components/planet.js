import * as THREE from 'three';

const normalTexture = new THREE.TextureLoader().load('static/normal.jpeg');

export function createPlanet(texture, radius) {
    const planetTexture = new THREE.TextureLoader().load(
        `static/${texture}.jpeg`
    );

    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, 32, 32),
        new THREE.MeshStandardMaterial({
            map: planetTexture,
            normalMap: normalTexture,
        })
    );
}
