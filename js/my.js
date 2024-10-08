const toggleBtn = document.getElementById('toggle-btn');
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');
        });