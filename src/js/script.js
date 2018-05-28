import * as THREE from 'three';
import {TweenMax, Power0} from 'gsap/TweenMax';

const canvas = document.querySelector(`.c`);
const width = canvas.offsetWidth,
  height = canvas.offsetHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0x000000);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
camera.position.set(0, 0, 350);

const init = () => {

  renderer.render(scene, camera);
  console.log(TweenMax, Power0);


};

init();
