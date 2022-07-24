import * as THREE from '../three.js-master/three.js-master/build/three.module.js';

import { RGBELoader } from '../three.js-master/three.js-master/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from '../three.js-master/three.js-master/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from '../three.js-master/three.js-master/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from '../three.js-master/three.js-master/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer;

let controls;

const container = document.getElementById( 'container' );

function car_render() {

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( container.devicePixelRatio );
    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setAnimationLoop( render );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );

    //

    camera = new THREE.PerspectiveCamera( 20, container.clientWidth / container.clientHeight, 0.1, 100 );
    camera.position.set( -11, 4, 7 );

    controls = new OrbitControls( camera, container );
    controls.target.set( -20, 1.2, -6 );
    controls.update();

    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment() ).texture;
    scene.fog = new THREE.Fog( 0xeeeeee, 50, 100 );

    //
    new RGBELoader()
        .setPath( './three.js-master/three.js-master/examples/textures/equirectangular/' )
        .load( 'pedestrian_overpass_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

        });

    // Car

    const loader = new GLTFLoader();

    loader.load('./assets/chevorlot.glb', function(glb){
        const root = glb.scene;
        root.scale.set(2,2,2);
        root.position.set(-20,0,-6.8);
        root.rotateY(THREE.Math.degToRad(180))
    
        scene.add(root);
    }, function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + '% loaded')
    }, function(error){
        console.log('An error occurred')
    })

}

function onWindowResize() {

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( container.clientWidth, container.clientHeight );

}

function render() {

    const time = - performance.now() / 1000;

    renderer.render( scene, camera );

}

let car_render_chk = false;
$(document).on('click', '.rotate_loading', function(){
    car_render_chk = true;
    if (car_render_chk == true) {
        setTimeout(() => {
            car_render();
        }, 10);
    }
})