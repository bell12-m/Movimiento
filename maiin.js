// ACTIVIDAD PT 2 !!!!

import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';
const scene = new THREE.Scene();

//Crear cámara:
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x06021f); 
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xb344c2} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.DirectionalLight(0xbe70c2, 1);
light.position.set(5, 5, 5);
scene.add(light);

//Dirección solo en Z
let direction = new THREE.Vector3(0, 0, -1)
direction.normalize();

let speed = 5;

//Límites que puse en Z
const limiteZmax = 4;   // queda re cerca
const limiteZmin = -10; // se va lejitos

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    let delta = clock.getDelta();

    //Fórmula matemáica aplicada
    cube.position.add( direction.clone().multiplyScalar(speed * delta) );

    //Lo mismo del rebote pero en z ;D
    if (cube.position.z > limiteZmax || cube.position.z < limiteZmin) {
        direction.z *= -1;
    }

    renderer.render(scene, camera);
}

animate();