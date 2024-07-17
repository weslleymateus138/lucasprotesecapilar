document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio normal do formulário

    var nome = document.getElementById('nome').value;
    var celular = document.getElementById('celular').value;
    var mensagem = document.getElementById('mensagem').value;

    var url = `https://wa.me/5511989542983?text=Nome:%20${encodeURIComponent(nome)}%0ACelular:%20${encodeURIComponent(celular)}%0AMensagem:%20${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})