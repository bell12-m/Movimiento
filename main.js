//Importar y crear escena:
import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';
const scene = new THREE.Scene();

//Crear cámara:
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x06021f); //colocito de fondo pa chicanear na mas :b
document.body.appendChild( renderer.domElement );

//Crear figura geometrica:
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x3bbad4 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Ajustar luz:
const light = new THREE.DirectionalLight(0xbe70c2, 1);
light.position.set(5, 5, 5);
scene.add(light);

//Configurar vector dirección:
let direction = new THREE.Vector3(-5, 0.5, 0)
direction.normalize();

let speed = 2;

//Límite simple (ajustalo si el cubo se sale muy rápido o le falta)
const limiteX = 4;
const limiteY = 2.5;

//Tiempo:
const clock = new THREE.Clock();

//Animar:
function animate() {
    requestAnimationFrame(animate);

    let delta = clock.getDelta();

    //Fórmula matemáica aplicada
    cube.position.add( direction.clone().multiplyScalar(speed * delta) );

    //Lo que hace el rebote:
    if (cube.position.x > limiteX || cube.position.x < -limiteX) {     //Los "limite" preguntan si el cubito ya paso por el limite X y Y
        direction.x *= -1; //Lo que hace ta vaina es que lo multiplica por -1, al multiplicarlo lo invierte
    }
    if (cube.position.y > limiteY || cube.position.y < -limiteY) {
        direction.y *= -1;
    } 
    renderer.render(scene, camera);
}

animate();