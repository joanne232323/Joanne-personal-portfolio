'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");
  var closeBtn = document.querySelector(".close");

  // Ensure the modal and close button exist
  if (!modal || !closeBtn) {
      console.error('Modal or close button not found!');
      return;
  }

  document.querySelectorAll('.blog-post-item').forEach(function(item) {
      item.addEventListener('click', function() {
          var mediaUrl = this.getAttribute('data-pdf-url') || this.getAttribute('data-video-url');

          if (!mediaUrl) {
              console.error('No media URL found!');
              return;
          }

          var contentElement;
          if (mediaUrl.endsWith('.pdf')) {
              contentElement = document.createElement('iframe');
              contentElement.style.height = '500px';
          } else if (mediaUrl.endsWith('.mp4')) {
              contentElement = document.createElement('video');
              contentElement.controls = true;
              contentElement.style.height = '500px';
          }

          if (contentElement) {
              contentElement.src = mediaUrl;
              contentElement.style.width = '100%';

              // Clear existing content and add new content
              modal.querySelector('.modal-content').innerHTML = '';
              modal.querySelector('.modal-content').appendChild(contentElement);

              modal.style.display = 'block';
          }
      });
  });

  closeBtn.onclick = function() {
      modal.style.display = 'none';
  };

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
});



