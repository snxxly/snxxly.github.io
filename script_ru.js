const toggleButtons = document.querySelectorAll('.toggle-info');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const member = this.parentElement;
        const extraInfo = member.querySelector('.extra-info');

        member.classList.toggle('open');
        
        if (member.classList.contains('open')) {
            this.textContent = 'Показать меньше';
            extraInfo.style.maxHeight = extraInfo.scrollHeight + 'px'; // Устанавливаем высоту для раскрытия
        } else {
            this.textContent = 'Показать больше';
            extraInfo.style.maxHeight = '0'; // Сворачиваем карточку
        }
    });
});
