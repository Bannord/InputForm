
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');
const modalForm = document.getElementById('modalForm');


function openModal() {
    modal.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
}


openModalBtn.addEventListener('click', openModal);


closeModalBtn.addEventListener('click', closeModal);


modalForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    closeModal();
});
