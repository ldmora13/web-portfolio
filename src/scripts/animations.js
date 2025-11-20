import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Función para inicializar todas las animaciones
export function initAnimations() {
  // Limpiar ScrollTriggers existentes
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // ============= HEADER ANIMATIONS =============
  const header = document.querySelector('header');
  if (header) {
    gsap.from(header, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animación del logo
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
      logoText.addEventListener('mouseenter', () => {
        gsap.to(logoText, {
          scale: 1.1,
          color: "#22c55e",
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      logoText.addEventListener('mouseleave', () => {
        gsap.to(logoText, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3
        });
      });
    }

    // Efecto de scroll en el header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(header, { y: -100, duration: 0.3 });
      } else {
        gsap.to(header, { y: 0, duration: 0.3 });
      }
      lastScroll = currentScroll;
    });
  }

  // ============= HERO ANIMATIONS =============
  const heroTitle = document.querySelector('#title');
  const heroSubtitle = document.querySelector('#subtitle');
  const heroInfo = document.querySelector('#info');

  if (heroTitle) {
    gsap.fromTo(heroTitle, 
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3,
      }
    );
  }

  if (heroSubtitle) {
    gsap.fromTo(heroSubtitle,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }

  if (heroInfo) {
    gsap.fromTo(heroInfo,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      }
    );
  }

  // Animación mejorada para los enlaces sociales
  document.querySelectorAll('.social-link').forEach((link, index) => {
    gsap.fromTo(link,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 1 + (index * 0.1),
        ease: "back.out(2)"
      }
    );

    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // ============= SKILLS ANIMATIONS =============
  const skillsTitle = document.querySelector('.skills-title');
  const skillsSubtitle = document.querySelector('.skills-subtitle');

  if (skillsTitle) {
    gsap.fromTo(skillsTitle,
      {
        scale: 0.3,
        opacity: 0,
        rotation: -10,
      },
      {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        scale: 1,
        opacity: 1,
        rotation: 0,
      }
    );
  }

  if (skillsSubtitle) {
    gsap.fromTo(skillsSubtitle,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
          end: "top 50%",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
      }
    );
  }

  const skillCards = document.querySelectorAll('.skill-card');
  if (skillCards.length > 0) {
    skillCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
        },
        {
          scrollTrigger: {
            trigger: "#skills-icons",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          scale: 1,
          opacity: 1,
          rotation: 0,
          delay: index * 0.1,
        }
      );

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(card, {
          rotateY: x / 10,
          rotateX: -y / 10,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  }

  // ============= PROJECTS ANIMATIONS =============
  const projectTitle = document.querySelector('.project-title');
  if (projectTitle) {
    gsap.fromTo(projectTitle,
      {
        x: -100,
        opacity: 0,
        rotation: -5,
      },
      {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        rotation: 0,
      }
    );
  }

  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          scrollTrigger: {
            trigger: "#projects",
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          scale: 1,
          delay: index * 0.2,
        }
      );

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // ============= ABOUT ANIMATIONS =============
  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) {
    gsap.fromTo(aboutTitle,
      {
        scale: 0.5,
        opacity: 0,
        rotation: 10,
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        scale: 1,
        opacity: 1,
        rotation: 0,
      }
    );
  }

  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    gsap.fromTo(aboutContent,
      {
        y: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        scale: 1,
      }
    );

    gsap.to(aboutContent, {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
      y: -30,
    });
  }

  const aboutParagraphs = document.querySelectorAll('.about-paragraph');
  if (aboutParagraphs.length > 0) {
    aboutParagraphs.forEach((paragraph, index) => {
      gsap.fromTo(paragraph,
        {
          x: -50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          x: 0,
          opacity: 1,
          delay: index * 0.2,
        }
      );

      paragraph.addEventListener('mouseenter', () => {
        gsap.to(paragraph, {
          x: 10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      paragraph.addEventListener('mouseleave', () => {
        gsap.to(paragraph, {
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // ============= CONTACT ANIMATIONS =============
  const contactTitle = document.querySelector('.contact-title');
  if (contactTitle) {
    gsap.fromTo(contactTitle,
      {
        rotation: -10,
        opacity: 0,
        scale: 0.7,
      },
      {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        rotation: 0,
        opacity: 1,
        scale: 1,
      }
    );
  }

  const contactContent = document.querySelector('.contact-content');
  if (contactContent) {
    gsap.fromTo(contactContent,
      {
        scale: 0.8,
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 1,
        opacity: 1,
        y: 0,
      }
    );
  }

  const contactItems = document.querySelectorAll('.contact-item');
  if (contactItems.length > 0) {
    contactItems.forEach((item, index) => {
      gsap.fromTo(item,
        {
          x: -100,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          x: 0,
          opacity: 1,
          delay: index * 0.2,
        }
      );

      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          x: 15,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(item, {
          rotateY: x / 20,
          rotateX: -y / 20,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  }
}

// Inicializar partículas del Hero
export function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}