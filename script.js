// Test connection message
console.log("JavaScript is successfully connected!");
// --- Feature 1: Dark Mode Toggle ---
const themeToggleButton = document.querySelector('#theme-toggle');

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = '☀️ Light Mode';
        } else {
            themeToggleButton.textContent = '🌙 Dark Mode';
        }
    });
}

// --- Feature 2: Mobile Navigation Menu ---
const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
}

// --- Feature 3: Interactive Size Selector ---
const sizeButtons = document.querySelectorAll('.size-btn');
const sizeMessage = document.querySelector('#size-message');

sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        sizeButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        if (sizeMessage) {
            sizeMessage.textContent = 'Selected Size: ' + button.textContent;
        }
    });
});

// --- Feature 4: Interactive Toast Notification ---
const toast = document.querySelector('#toast-notification');
const toastCloseBtn = document.querySelector('#toast-close-btn');

function showToast(message) {
    if (!toast) return;
    const toastMessage = document.querySelector('#toast-message');
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(function() {
        toast.classList.add('hidden');
    }, 4000);
}

if (toastCloseBtn && toast) {
    toastCloseBtn.addEventListener('click', function() {
        toast.classList.add('hidden');
    });
}

const sizeButtonsForToast = document.querySelectorAll('.size-btn');
sizeButtonsForToast.forEach(function(button) {
    button.addEventListener('click', function() {
        showToast("✨ Size " + button.textContent + " added to selection!");
    });
});

// --- Week 8: Live Form Validation ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const subjectSelect = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const formSuccess = document.getElementById('formSuccess');

  // Helper: Show specific error message & style
  function showError(input, message) {
    const errorSpan = document.getElementById(`${input.id}-error`);
    input.classList.add('input-error');
    input.classList.remove('input-valid');
    input.setAttribute('aria-invalid', 'true');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  // Helper: Clear error & mark field valid
  function clearError(input) {
    const errorSpan = document.getElementById(`${input.id}-error`);
    input.classList.remove('input-error');
    input.classList.add('input-valid');
    input.removeAttribute('aria-invalid');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
  }

  // 1. Validate Full Name
  function validateName() {
    const value = nameInput.value.trim();
    if (value === '') {
      showError(nameInput, 'Full name is required.');
      return false;
    }
    if (value.length < 2) {
      showError(nameInput, 'Name must be at least 2 characters long.');
      return false;
    }
    clearError(nameInput);
    return true;
  }

  // 2. Validate Email Address
  function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      showError(emailInput, 'Email address is required.');
      return false;
    }
    if (!emailPattern.test(value)) {
      showError(emailInput, 'Enter a valid email address (e.g., name@example.com).');
      return false;
    }
    clearError(emailInput);
    return true;
  }

  // 3. Validate Phone Number (Optional field, only checks if user types something)
  function validatePhone() {
    const value = phoneInput.value.trim();
    if (value === '') {
      phoneInput.classList.remove('input-error', 'input-valid');
      phoneInput.removeAttribute('aria-invalid');
      document.getElementById('phone-error').textContent = '';
      return true;
    }
    const phonePattern = /^\+?[\d\s\-()]{7,15}$/;
    if (!phonePattern.test(value)) {
      showError(phoneInput, 'Enter a valid phone number (7–15 digits).');
      return false;
    }
    clearError(phoneInput);
    return true;
  }

  // 4. Validate Subject Dropdown
  function validateSubject() {
    if (subjectSelect.value === '') {
      showError(subjectSelect, 'Please select a subject for your inquiry.');
      return false;
    }
    clearError(subjectSelect);
    return true;
  }

  // 5. Validate Message Textarea
  function validateMessage() {
    const value = messageInput.value.trim();
    if (value === '') {
      showError(messageInput, 'Please enter your message.');
      return false;
    }
    if (value.length < 10) {
      showError(messageInput, `Message must be at least 10 characters (currently ${value.length}).`);
      return false;
    }
    clearError(messageInput);
    return true;
  }
  // --- Step 4: Live Validation Event Listeners ---
  nameInput.addEventListener('input', validateName);
  nameInput.addEventListener('blur', validateName);

  emailInput.addEventListener('input', validateEmail);
  emailInput.addEventListener('blur', validateEmail);

  phoneInput.addEventListener('input', validatePhone);
  phoneInput.addEventListener('blur', validatePhone);

  subjectSelect.addEventListener('change', validateSubject);
  subjectSelect.addEventListener('blur', validateSubject);

  messageInput.addEventListener('input', validateMessage);
  messageInput.addEventListener('blur', validateMessage);

  // --- Step 5: Handle Form Submit & Success State ---
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop default page reload

    // Run all checks so every invalid field shows its error at once
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    const isFormValid =
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isSubjectValid &&
      isMessageValid;

    if (!isFormValid) {
      formSuccess.hidden = true;
      // Move keyboard focus to the first invalid field
      const firstInvalid = contactForm.querySelector('.input-error');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // All fields valid: Show success message & reset form
    formSuccess.hidden = false;
    contactForm.reset();

    // Remove green valid borders after reset
    [nameInput, emailInput, phoneInput, subjectSelect, messageInput].forEach(
      (field) => field.classList.remove('input-valid')
    );
  });
}

// ===== Week 9: Projects Board with localStorage =====
const STORAGE_KEY = "maisonStudioBoardItems";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskCategory = document.getElementById("taskCategory");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-chip");

if (taskForm && taskList) {
  let tasks = loadTasks();
  let currentFilter = "all";

  function loadTasks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  function getFilteredTasks() {
    if (currentFilter === "active") {
      return tasks.filter((task) => !task.completed);
    }
    if (currentFilter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }

  function renderTasks() {
    const visibleTasks = getFilteredTasks();
    taskList.innerHTML = "";

    if (emptyState) {
      emptyState.style.display = visibleTasks.length === 0 ? "block" : "none";
    }

    visibleTasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item${task.completed ? " is-completed" : ""}`;

      const mainDiv = document.createElement("div");
      mainDiv.className = "task-main";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = Boolean(task.completed);
      checkbox.setAttribute("aria-label", `Mark "${task.title}" as done`);
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      const titleSpan = document.createElement("span");
      titleSpan.className = "task-title";
      titleSpan.textContent = task.title;

      const stageBadge = document.createElement("span");
      stageBadge.className = "task-stage";
      stageBadge.textContent = task.stage;

      mainDiv.append(checkbox, titleSpan, stageBadge);

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "task-actions";

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        const updatedTitle = prompt("Update board item:", task.title);
        if (updatedTitle !== null && updatedTitle.trim() !== "") {
          task.title = updatedTitle.trim();
          saveTasks();
          renderTasks();
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter((item) => item.id !== task.id);
        saveTasks();
        renderTasks();
      });

      actionsDiv.append(editBtn, deleteBtn);
      li.append(mainDiv, actionsDiv);
      taskList.appendChild(li);
    });
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      stage: taskCategory ? taskCategory.value : "Fit Check",
      completed: false,
    };

    tasks.unshift(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter || "all";
      filterButtons.forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      renderTasks();
    });
  });

  renderTasks();
}