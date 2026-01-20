/**
 * Am Shalem USA - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Newsletter Form
  initNewsletterForm();

  // Smooth Scroll
  initSmoothScroll();

  // Active Nav Link
  setActiveNavLink();

  // Parallax Effect for Hero Section
  initParallaxHero();

  // Contact Form Switcher
  initContactFormSwitcher();
});

/**
 * Newsletter Form Handler
 */
function initNewsletterForm() {
  const newsletterForm = document.querySelector('.newsletter-form');
  const successMessage = document.querySelector('.newsletter-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email && isValidEmail(email)) {
        // Here you would typically send the data to a service like Formspree
        // For now, we'll just show the success message
        if (successMessage) {
          successMessage.style.display = 'block';
          emailInput.value = '';

          // Hide success message after 3 seconds
          setTimeout(function() {
            successMessage.style.display = 'none';
          }, 3000);
        }
      }
    });
  }
}

/**
 * Email Validation
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Set Active Navigation Link
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');

    // Remove active class from all links
    link.classList.remove('active');

    // Check if current path matches link href
    if (currentPath === href ||
        (currentPath === '/' && href === 'index.html') ||
        (currentPath.endsWith('/') && href === 'index.html') ||
        currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });
}

/**
 * Parallax Effect for Hero Section
 */
function initParallaxHero() {
  const hero = document.querySelector('.hero');
  
  if (!hero) return;

  // Create parallax background element
  const parallaxBg = document.createElement('div');
  parallaxBg.className = 'hero-parallax-bg';
  const bgImage = hero.style.backgroundImage;
  parallaxBg.style.backgroundImage = bgImage;
  parallaxBg.style.backgroundSize = 'cover';
  // Adjust focal point for page-hero (higher up on face)
  const isPageHero = hero.classList.contains('page-hero');
  parallaxBg.style.backgroundPosition = isPageHero ? 'center 15%' : 'center';
  parallaxBg.style.backgroundRepeat = 'no-repeat';
  parallaxBg.style.position = 'absolute';
  parallaxBg.style.top = '0';
  parallaxBg.style.left = '0';
  parallaxBg.style.width = '100%';
  parallaxBg.style.height = '120%';
  parallaxBg.style.zIndex = '0';
  parallaxBg.style.willChange = 'transform';
  
  hero.appendChild(parallaxBg);

  // Remove inline background-image from hero (now handled by parallax element)
  hero.style.backgroundImage = 'none';

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroTop = hero.offsetTop;
    const heroHeight = hero.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate parallax offset (move background slower than scroll)
    const parallaxSpeed = 0.5;
    const parallaxOffset = scrolled * parallaxSpeed;

    // Only apply parallax when hero is in viewport
    if (scrolled < heroTop + heroHeight && scrolled + windowHeight > heroTop) {
      parallaxBg.style.transform = `translateY(${parallaxOffset}px)`;
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  // Listen to scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Initial call
  updateParallax();
}

/**
 * Contact Form Handler (if using custom form)
 */
function initContactForm() {
  const contactForm = document.querySelector('.contact-form form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Form will submit to Formspree or similar service
      // Add any validation or pre-submit handling here

      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'red';
        } else {
          field.style.borderColor = '#ddd';
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  }
}

/**
 * Contact Form Switcher - handles multiple form types
 */
function initContactFormSwitcher() {
  const formTypeDropdown = document.getElementById('form-type');
  const forms = document.querySelectorAll('.contact-form-type');

  if (!formTypeDropdown || forms.length === 0) return;

  // Get form type from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const formParam = urlParams.get('form');

  // Set initial form based on URL parameter
  if (formParam) {
    switchToForm(formParam);
    formTypeDropdown.value = formParam;
  }

  // Handle dropdown change
  formTypeDropdown.addEventListener('change', function() {
    switchToForm(this.value);
  });

  function switchToForm(formType) {
    // Hide all forms
    forms.forEach(function(form) {
      form.classList.remove('active');
    });

    // Show selected form
    const targetForm = document.getElementById('form-' + formType);
    if (targetForm) {
      targetForm.classList.add('active');
    }
  }
}
