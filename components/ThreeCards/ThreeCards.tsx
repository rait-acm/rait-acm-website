import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCards = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Type the ref as potentially null
  const mouse = useRef(new THREE.Vector2());
  const isTouchActive = useRef(false);

  const settings = {
    sizes: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    boxDimensions: {
      h: 1.4,
      w: 1,
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return; // Check if canvasRef is not null

    // textures
    const textureLoader = new THREE.TextureLoader();
    const photoTexture = textureLoader.load("/images/events/kleosupcoming.png");
    const photoTexture02 = textureLoader.load("/images/events/test.png");
    const photoTexture03 = textureLoader.load("/images/events/elixir.jpg");
    photoTexture.wrapS = THREE.RepeatWrapping;
    photoTexture.wrapT = THREE.RepeatWrapping;
    photoTexture.repeat.set(0.1, 0.1);

    // init
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      settings.sizes.width / settings.sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const planeGeometry = new THREE.PlaneGeometry(
      settings.boxDimensions.w,
      settings.boxDimensions.h
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current, // Safe access
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);

    // Ensure the canvas background is transparent
    canvasRef.current.style.background = "transparent";

    class RoundedPortalPhotoPlane extends THREE.Mesh {
      constructor(geometry: THREE.BufferGeometry, photoTexture: THREE.Texture) {
        const material = new THREE.MeshMatcapMaterial({
          matcap: photoTexture,
          transparent: true,
        });

        material.onBeforeCompile = (shader) => {
          shader.vertexShader = shader.vertexShader.replace(
            "#include <common>",
            `
                  #include <common>
                  varying vec4 vPosition;
                  varying vec2 vUv;
              `
          );
          shader.vertexShader = shader.vertexShader.replace(
            "#include <fog_vertex>",
            `
                    #include <fog_vertex>
                    vPosition = mvPosition;
                    vUv = uv;
                `
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            `#include <common>`,
            `
                #include <common>
                varying vec4 vPosition;
                varying vec2 vUv;
                float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
                    return length(max(abs(CenterPosition)-Size+Radius,0.0))-Radius;
                  }
                `
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            `#include <dithering_fragment>`,
            `
                #include <dithering_fragment>
      
                // The pixel space scale of the rectangle.
                vec2 size = vec2(1.0, 1.0);
                // How soft the edges should be (in pixels). Higher values could be used to simulate a drop shadow.
                float edgeSoftness  = 0.001;
                // The radius of the corners (in pixels).
                float radius = 0.08;
                // Calculate distance to edge.
                float distance  = roundedBoxSDF(vUv.xy - (size/2.0), size/2.0, radius);
                // Smooth the result (free antialiasing).
                float smoothedAlpha =  1.0-smoothstep(0.0, edgeSoftness * 2.0,distance);
                // Return the resultant shape.
                gl_FragColor = vec4(outgoingLight, smoothedAlpha);
              `
          );
        };

        // Call the parent constructor to initialize the mesh with geometry and material
        super(geometry, material);
      }
    }

    // planes
    const planeGroup = new THREE.Group();

    const photoPlane01 = new RoundedPortalPhotoPlane(
      planeGeometry,
      photoTexture02
    );
    photoPlane01.position.set(-1, 0, 1);
    photoPlane01.rotation.y = Math.PI * 0.1;
    photoPlane01.name = "plane1";
    planeGroup.add(photoPlane01);

    const photoPlane02 = new RoundedPortalPhotoPlane(
      planeGeometry,
      photoTexture
    );
    photoPlane02.position.set(0, 0, 0.5);
    photoPlane02.name = "plane2";
    planeGroup.add(photoPlane02);

    const photoPlane03 = new RoundedPortalPhotoPlane(
      planeGeometry,
      photoTexture03
    );
    photoPlane03.position.set(1, 0, 1);
    photoPlane03.rotation.y = Math.PI * -0.1;
    photoPlane03.name = "plane3";
    planeGroup.add(photoPlane03);
    scene.add(planeGroup);

    const xParallaxFactor = -0.3;
    const yParallaxFactor = 0.3;

    // Map touch/mouse positions to normalized values
    function mapToNormalized(x: number, y: number) {
      mouse.current.x = (x / settings.sizes.width) * 2 - 1;
      mouse.current.y = -(y / settings.sizes.height) * 2 + 1;
    }

    // Add mousemove event for desktop
    window.addEventListener("mousemove", (event) => {
      mapToNormalized(event.clientX, event.clientY);
    });

    // Add touch events for mobile
    window.addEventListener("touchstart", (event) => {
      isTouchActive.current = true;
      const touchPoint = event.touches[0];
      mapToNormalized(touchPoint.clientX, touchPoint.clientY);
    });

    window.addEventListener("touchmove", (event) => {
      if (!isTouchActive.current) return;
      const touchPoint = event.touches[0];
      mapToNormalized(touchPoint.clientX, touchPoint.clientY);
    });

    window.addEventListener("touchend", () => {
      isTouchActive.current = false;
    });

    // Function to reposition planes based on viewport size
    function updatePlanePositions() {
      if (window.innerWidth < 768) {
        // Mobile view: Align cards horizontally with adjusted aspect ratio
        photoPlane01.position.set(0, 1.2, 0);
        photoPlane01.rotation.set(0, 0, 0);

        photoPlane02.position.set(0, 0, 0);
        photoPlane02.rotation.set(0, 0, 0);

        photoPlane03.position.set(0, -1.2, 0);
        photoPlane03.rotation.set(0, 0, 0);

        //adjust the aspect ratio for a horizontal rectangle
        const width = 1.8; // Adjusted width
        const height = 1.0; // Adjusted height
        photoPlane01.geometry = new THREE.PlaneGeometry(width, height);
        photoPlane02.geometry = new THREE.PlaneGeometry(width, height);
        photoPlane03.geometry = new THREE.PlaneGeometry(width, height);
      } else {
        // Default desktop view
        photoPlane01.position.set(-1, 0, 1);
        photoPlane01.rotation.y = Math.PI * 0.1;

        photoPlane02.position.set(0, 0, 0.5);
        photoPlane02.rotation.y = 0;

        photoPlane03.position.set(1, 0, 1);
        photoPlane03.rotation.y = Math.PI * -0.1;
      }
    }

    // Listen for window resize events
    window.addEventListener("resize", () => {
      updatePlanePositions();
    });

    // Call the function initially to set up the correct positions
    updatePlanePositions();

    // animation
    const clock = new THREE.Clock();
    let previousTime = 0;

    function animation() {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      const parallaxX = mouse.current.x * xParallaxFactor;
      const parallaxY = mouse.current.y * yParallaxFactor;
      planeGroup.rotation.y +=
        (parallaxX - planeGroup.rotation.y) * 3 * deltaTime;
      planeGroup.rotation.x +=
        (parallaxY - planeGroup.rotation.x) * 3 * deltaTime;

      renderer.render(scene, camera);
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeCards;
