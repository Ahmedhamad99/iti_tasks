var toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    toggleButton.classList.toggle('dark-mode');
    toggleButton.classList.toggle('light-mode');
});

document.body.classList.add('light-mode');
toggleButton.classList.add('light-mode');