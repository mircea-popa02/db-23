import * as THREE from 'three'
import GSAP from 'gsap'
import Experience from '../Experience.js'

export default class Bike {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.debug = this.experience.debug
    this.plateforme10 = this.resources.items.plateforme10
    this.actualPlateforme10 = this.plateforme10.scene
    this.plateforme10Children = {}

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1
    }

    // Debug
    if(this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('plateforme10')
      this.obj = {
        colorObj: {r:0 , g: 0, b: 0}
      }
    }

    this.setPlateforme10Model()
  }

  setPlateforme10Model() {
    const monkyTexture = this.resources.items.monkyTexture
    monkyTexture.flipY = false
    monkyTexture.encoding = THREE.sRGBEncoding
    const materialMonky = new THREE.MeshBasicMaterial({ map: monkyTexture })

    this.actualPlateforme10.traverse((child) => {
      if (child.isMesh) {
        child.material = materialMonky
        child.scale.set(11, 1, 8) // Make the mesh bigger
      }
    })

    this.scene.add(this.actualPlateforme10)
  }

  resize() {}

  update() {
  }
}
