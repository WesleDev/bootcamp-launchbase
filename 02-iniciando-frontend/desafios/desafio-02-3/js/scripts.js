const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.curso');

for (let curso of cursos) {
    curso.addEventListener('click', function () {
        const cursoId = curso.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`;
    });
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
});

const selecionaModal = document.querySelector('.modal');
const modalConteudo = document.querySelector('.modal-content iframe');

const maximizeModal = document.querySelector('.maximize-modal').addEventListener('click', function () {
    if (selecionaModal.classList.contains("modalMaximizado")) {
        selecionaModal.classList.remove('modalMaximizado');
        modalConteudo.classList.remove('iframeMaximizado');
    } else {
        selecionaModal.classList.add('modalMaximizado');
        modalConteudo.classList.add('iframeMaximizado');
    }
});