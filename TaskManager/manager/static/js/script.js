
function showForm() {
    document.getElementById("adtsk-overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("adtsk-overlay").style.display = "none";
}

function editTask(id, title, description, startDate, endDate, priority) {
    document.querySelector('form').action = `/edit/${id}/`; 

    document.querySelector('input[name="title"]').value = title;
    document.querySelector('input[name="description"]').value = description;
    document.querySelector('input[name="startDate"]').value = startDate;
    document.querySelector('input[name="endDate"]').value = endDate;
    document.querySelector('select[name="priority"]').value = priority;

    document.querySelector('#adtsk-overlay h3').innerText = "EDIT TASK"; 
    document.querySelector('button[type="submit"]').innerText = "Update Task";

    showForm();
}

function editOngoingTask(id, title, description, startDate, endDate, priority) {
    document.querySelector('form').action = `/edit/ongoing/${id}/`;  // 👈 URL for onGoingTasks

    document.querySelector('input[name="title"]').value = title;
    document.querySelector('input[name="description"]').value = description;
    document.querySelector('input[name="startDate"]').value = startDate;
    document.querySelector('input[name="endDate"]').value = endDate;
    document.querySelector('select[name="priority"]').value = priority;

    document.querySelector('#adtsk-overlay h3').innerText = "EDIT ONGOING TASK";
    document.querySelector('button[type="submit"]').innerText = "Update Task";

    showForm();  // Show popup/modal with form
}


// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    
    // Link elements for our stylesheets
    const lightModeStyles = document.querySelector('link[href*="style.css"]');
    const darkModeStyles = document.querySelector('link[href*="dark_mode.css"]');
    
    // Function to enable dark mode
    function enableDarkMode() {
        lightModeStyles.disabled = true;
        darkModeStyles.disabled = false;
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    
    // Function to enable light mode
    function enableLightMode() {
        lightModeStyles.disabled = false;
        darkModeStyles.disabled = true;
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
    
    // Check for saved theme preference or use dark mode as default
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        enableLightMode();
    } else {
        // Default to dark mode if no preference is saved
        enableDarkMode();
    }
    
    // Toggle between themes when button is clicked
    themeToggle.addEventListener('click', function() {
        if (darkModeStyles.disabled) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });
    
    // Optional: Listen for system preference changes
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', (e) => {
        if (e.matches && !localStorage.getItem('theme')) {
            enableDarkMode();
        } else if (!e.matches && !localStorage.getItem('theme')) {
            enableLightMode();
        }
    });
});