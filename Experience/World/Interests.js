import * as THREE from "three";
import Experience from "../Experience.js";
import { EventEmitter } from "events";
import gsap from "gsap";

export default class Interests {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;
    this.debug = this.experience.debug;
    this.device = this.sizes.device;
    this.scrolling = this.experience.scrolling;

    this.sizes.on("switchdevice", (device) => {
      this.device = device;
      console.log(device);
    });

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("interest1");
    }

    this.obj = {
      x: 4,
      y: 1.2,
      z: 0.5,
    };

    // Setup
    this.points = [];
    this.raycaster = new THREE.Raycaster();
    this.setInterests();
    this.showInfos();
  }

  setInterests() {
    this.points = [
      {
        position: new THREE.Vector3(2.62, 0.17, 0.9),
        element: document.querySelector(".mcba"),
      },
      {
        position: new THREE.Vector3(-3.75, 0.17, 0.25),
        element: document.querySelector(".mudac"),
      },
      {
        position: new THREE.Vector3(-3.75, 0.17, -1.55),
        element: document.querySelector(".elysee"),
      },
      {
        position: new THREE.Vector3(-0.65, 0.17, -1.2),
        element: document.querySelector(".arcadia"),
      },
      {
        position: new THREE.Vector3(3.12, 0.17, 0.41),
        element: document.querySelector(".nabi"),
      },
      {
        position: new THREE.Vector3(-4.26, 0.17, 0.66),
        element: document.querySelector(".lumen"),
      },
    ];

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.points[2].position, "x")
        .name("x2")
        .min(-10)
        .max(10)
        .step(0.01);

      this.debugFolder
        .add(this.points[2].position, "y")
        .name("y2")
        .min(-10)
        .max(10)
        .step(0.01);

      this.debugFolder
        .add(this.points[2].position, "z")
        .name("z2")
        .min(-10)
        .max(10)
        .step(0.01);

      this.debugFolder
        .add(this.points[1].position, "x")
        .name("x1")
        .min(-10)
        .max(10)
        .step(0.01);

      this.debugFolder
        .add(this.points[1].position, "y")
        .name("y1")
        .min(-10)
        .max(10)
        .step(0.01);

      this.debugFolder
        .add(this.points[1].position, "z")
        .name("z1")
        .min(-10)
        .max(10)
        .step(0.01);
    }
  }

  showInfos() {
    const mcba = document.querySelector(".mcba");
    const mudac = document.querySelector(".mudac");
    const elysee = document.querySelector(".elysee");
    const arcadia = document.querySelector(".arcadia");
    const nabi = document.querySelector(".nabi");
    const lumen = document.querySelector(".lumen");

    const closeIcn = document.querySelector(".close");
    console.log(closeIcn);

    const infoPanel = document.querySelector(".info-panel");
    const infoPanelImage = document.querySelector(".info-panel-image");
    const infoPanelLogo = document.querySelector(".info-panel-logo");
    const infoPanelTitle = document.querySelector(".info-panel-title");
    const infoPanelLead = document.querySelector(".info-panel-lead");
    const infoPanelDescription = document.querySelector(
      ".info-panel-description"
    );
    const infoPanelMo = document.querySelector(".info-panel-monday");
    const infoDay = document.querySelector(".col-min");
    const infoPanelPhone = document.querySelector(".info-panel-phone");
    const infoPanelEmail = document.querySelector(".info-panel-email");
    const infoPanelWebsite = document.querySelector(".info-panel-website");
    let infoPanelRightStyle = "0";

    const infos = [
      // Museums
      {
        image: "/images/eco1.jpeg",
        title: "Greening on Nehoiu",
        day: "7 January 2024",
        lead: "Be the change! Come with us on a day of green action Are you passionate about nature and want to contribute to protecting the environment? The EcoWarriors Romania team is organizing a large greening action in the heart of the Pârângu Mare forest and needs strong arms and dedicated hearts!",
        description: "",
        schedule: ["14:00 - 18:00"],
        contact: ["0746 139 493", "50 coins"],
        website: "http://localhost:3000/action",
      },
      {
        image: "/images/ecologizare.jpeg",
        title: "Greening Action in Parangu Mare",
        day: "17 December 2023",
        lead: "Be the change! Come with us on a day of green action Are you passionate about nature and want to contribute to protecting the environment? The EcoWarriors Romania team is organizing a large greening action in the heart of the Pârângu Mare forest and needs strong arms and dedicated hearts!",
        description: "",
        schedule: ["10:00 - 18:00"],
        contact: ["0771 009 761", "200 coins"],
        website: "http://localhost:3000/action",
      },
      {
        image: "/images/eco2.jpeg",
        day: "14 February 2024",
        title: "Greening in Teius",
        lead: "Make a difference! Participate in a day dedicated to protecting the environment! Are you passionate about the environment and want to actively contribute to nature conservation? The Green Team for the Future is organizing an important ecological action in the city of Teiuș and is looking for energetic and dedicated volunteers! ",
        description: ``,
        schedule: ["10:00 - 18:00"],
        contact: ["0772 655 554", "200 coins"],
        website: "http://localhost:3000/action",
      },
      {
        image: "/images/eco3.jpeg",
        day: "12 March 2024",
        title: "Tree planting in Medias",
        lead: "Make a difference! Participate in a day dedicated to protecting the environment! Are you passionate about the environment and want to actively contribute to nature conservation? The Green Team for the Future is organizing an important ecological action in the city of Teiuș and is looking for energetic and dedicated volunteers! ",
        description: "",
        schedule: ["10:00 - 23:00"],
        contact: ["0742 124 332", "200 coins"],
        website: "http://localhost:3000/action",
      },
      {
        image: "/images/eco-garbage.jpeg",
        day: "10 April 2024",
        title: "Greening in Lepsa",
        lead: "Be the change! Come with us on a day of green action Are you passionate about nature and want to contribute to protecting the environment? The EcoWarriors Romania team is organizing a large greening action in the heart of the Pârângu Mare forest and needs strong arms and dedicated hearts!",
        description: "",
        schedule: ["09:30 - 18:00"],
        contact: ["0733 405 460", "100 coins"],
        website: "http://localhost:3000/action",
      },
      {
        image: "/images/copac.jpeg",
        day: "10 May 2024",
        title: "Tree planting in Parcul National Retezat",
        lead: `Be the Change! Join us in a day of greening the Retezat National Park! 🌳 Are you a nature lover and want to leave a positive mark on the environment? The "EcoWarriors Romania" team invites you to join forces with ours in a tree planting mission, vital for maintaining the ecological balance in the heart of the Retezat National Park!`,
        description: ``,
        schedule: ["10:00 - 18:00"],
        contact: ["0713 110 290", "200 coins"],
        website: "http://localhost:3000/action",
      },
    ];

    if (this.device === "desktop") {
      infoPanelRightStyle = "-33%";
    } else {
      infoPanelRightStyle = "-100%";
    }

    mcba.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[0].image;
      infoPanelLogo.src = infos[0].logo;
      infoPanelTitle.innerHTML = infos[0].title;
      infoPanelLead.innerHTML = infos[0].lead;
      infoPanelDescription.innerHTML = infos[0].description;
      infoPanelMo.innerHTML = infos[0].schedule[0];
      infoDay.innerHTML = infos[0].day;
      infoPanelPhone.innerHTML = infos[0].contact[0];
      infoPanelEmail.innerHTML = infos[0].contact[1];
      infoPanelWebsite.href = infos[0].website;
    });

    mudac.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[1].image;
      infoPanelLogo.src = infos[1].logo;
      infoPanelTitle.innerHTML = infos[1].title;
      infoPanelLead.innerHTML = infos[1].lead;
      infoPanelDescription.innerHTML = infos[1].description;
      infoPanelMo.innerHTML = infos[1].schedule[0];
      infoDay.innerHTML = infos[1].day;
      infoPanelPhone.innerHTML = infos[1].contact[0];
      infoPanelEmail.innerHTML = infos[1].contact[1];
      infoPanelWebsite.href = infos[1].website;
    });

    elysee.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[2].image;
      infoPanelLogo.src = infos[2].logo;
      infoPanelTitle.innerHTML = infos[2].title;
      infoPanelLead.innerHTML = infos[2].lead;
      infoPanelDescription.innerHTML = infos[2].description;
      infoPanelMo.innerHTML = infos[2].schedule[0];
      infoDay.innerHTML = infos[2].day;
      infoPanelPhone.innerHTML = infos[2].contact[0];
      infoPanelEmail.innerHTML = infos[2].contact[1];
      infoPanelWebsite.href = infos[2].website;
    });

    arcadia.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[3].image;
      infoPanelLogo.src = infos[3].logo;
      infoPanelTitle.innerHTML = infos[3].title;
      infoPanelLead.innerHTML = infos[3].lead;
      infoPanelDescription.innerHTML = infos[3].description;
      infoPanelMo.innerHTML = infos[3].schedule[0];
      infoDay.innerHTML = infos[3].day;
      infoPanelPhone.innerHTML = infos[3].contact[0];
      infoPanelEmail.innerHTML = infos[3].contact[1];
      infoPanelWebsite.href = infos[3].website;
    });

    nabi.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[4].image;
      infoPanelLogo.src = infos[4].logo;
      infoPanelTitle.innerHTML = infos[4].title;
      infoPanelLead.innerHTML = infos[4].lead;
      infoPanelDescription.innerHTML = infos[4].description;
      infoPanelMo.innerHTML = infos[4].schedule[0];
      infoDay.innerHTML = infos[4].day;
      infoPanelPhone.innerHTML = infos[4].contact[0];
      infoPanelEmail.innerHTML = infos[4].contact[1];
      infoPanelWebsite.href = infos[4].website;
    });

    lumen.addEventListener("click", () => {
      this.scrolling.target = 0;
      infoPanel.style.right = "0";
      infoPanelImage.src = infos[5].image;
      infoPanelLogo.src = infos[5].logo;
      infoPanelTitle.innerHTML = infos[5].title;
      infoPanelLead.innerHTML = infos[5].lead;
      infoPanelDescription.innerHTML = infos[5].description;
      infoPanelMo.innerHTML = infos[5].schedule[0];
      infoDay.innerHTML = infos[5].day;
      infoPanelPhone.innerHTML = infos[5].contact[0];
      infoPanelEmail.innerHTML = infos[5].contact[1];
      infoPanelWebsite.href = infos[5].website;
    });

    closeIcn.addEventListener("click", () => {
      infoPanel.style.right = infoPanelRightStyle;
    });
  }

  resize() {}

  update() {
    for (const point of this.points) {
      const screenPosition = point.position.clone();
      screenPosition.project(this.camera.orthographicCamera);

      point.element.classList.add("visible");

      // this.raycaster.setFromCamera(screenPosition, this.camera.orthographicCamera)
      // const intersects = this.raycaster.intersectObjects(this.scene.children, true)

      // if(intersects.length === 0) {
      //   point.element.classList.add('visible')
      // } else {
      //   const intersectionDistance = intersects[0].distance
      //   const pointDistance = point.position.distanceTo(this.camera.orthographicCamera.position)

      //   if(intersectionDistance < pointDistance) {
      //     point.element.classList.remove('visible')
      //   } else {
      //     point.element.classList.add('visible')
      //   }
      // }

      const translateX = screenPosition.x * this.sizes.width * 0.5;
      const translateY = -screenPosition.y * this.sizes.height * 0.5;
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    }
  }
}
