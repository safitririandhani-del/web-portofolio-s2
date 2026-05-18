// AOS

    AOS.init({
      duration: 1200,
      once: true
    });

    // TYPING EFFECT

    let typed = new Typed('.typing', {
      strings: [
        'Web Developer',
        'UI/UX Designer',
        'Frontend Developer'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // PARTICLES

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 70
        },
        color: {
          value: "#00e5ff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 3
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00e5ff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2
        }
      }
    });

    // SCROLL TOP

    const scrollTopBtn = document.querySelector('.scrollTop');

    window.addEventListener('scroll', () => {

      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }

    });

    scrollTopBtn.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // NAVBAR ACTIVE

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

      let current = "";

      sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }

      });

      navLinks.forEach(link => {

        link.classList.remove("text-info");

        if (link.getAttribute("href").includes(current)) {
          link.classList.add("text-info");
        }

      });

    });

    // FORM ALERT

    const btn = document.querySelector(".btn-custom");

    btn.addEventListener("click", () => {

      setTimeout(() => {
        alert("Message sent successfully!");
      }, 500);

    });

    const slider = document.getElementById("slider");

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // SKILL PROGRESS ANIMATION

    const progressBars = document.querySelectorAll(".progress-bar");
    const counters = document.querySelectorAll(".counter");

    function animateSkills() {

      progressBars.forEach(bar => {

        const width = bar.getAttribute("data-width");

        setTimeout(() => {
          bar.style.width = width;
        }, 300);

      });

      counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

          if (count < target) {

            count++;
            counter.innerText = count + "%";

            requestAnimationFrame(updateCounter);

          } else {

            counter.innerText = target + "%";

          }

        }

        updateCounter();

      });

    }

    window.addEventListener("load", animateSkills);


    // TYPING TITLE SERVICES

    function typingEffect(element, text, speed) {

      let i = 0;

      function typing() {

        if (i < text.length) {

          element.innerHTML += text.charAt(i);
          i++;

          setTimeout(typing, speed);

        }

      }

      typing();

    }

    window.addEventListener("load", () => {

      typingEffect(
        document.getElementById("service1"),
        "Web Development",
        80
      );

      typingEffect(
        document.getElementById("service2"),
        "UI/UX Design",
        80
      );

      typingEffect(
        document.getElementById("service3"),
        "Responsive Design",
        80
      );

    });

    
    // SLIDER BUTTON

const projectSlider = document.querySelector(".projects-slider");

document.getElementById("nextBtn").addEventListener("click", () => {

  projectSlider.scrollBy({
    left: 350,
    behavior: "smooth"
  });

});

document.getElementById("prevBtn").addEventListener("click", () => {

  projectSlider.scrollBy({
    left: -350,
    behavior: "smooth"
  });

});
