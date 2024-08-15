// Menu Hamburguer

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});



// Redes Sociais evento

// instagram
const imagem = document.querySelector('.rede-insta img');

const svgOriginal = 'images/square-instagram-brands-solid (2).svg';
const svgHover = 'images/square-instagram-brands-solid (3).svg';


imagem.addEventListener('mouseover', function(){
    this.src = svgHover;
});

imagem.addEventListener('mouseout', function(){
    this.src = svgOriginal;
});

// facebook
const imagemFace = document.querySelector('.rede-face img');

const svgOriginalFace = 'images/square-facebook-brands-solid (2).svg';
const svgHoverFace = 'images/square-facebook-brands-solid (3).svg';


imagemFace.addEventListener('mouseover', function(){
    this.src = svgHoverFace;
});

imagemFace.addEventListener('mouseout', function(){
    this.src = svgOriginalFace;
});


// whatsapp
const imagemGit = document.querySelector('.rede-github img');

const svgOriginalGit = 'images/square-github-brands-solid.svg';
const svgHoverGit = 'images/square-github-brands-solid (1).svg';

imagemGit.addEventListener('mouseover', function() {
    this.src = svgHoverGit;
});

imagemGit.addEventListener('mouseout', function() {
    this.src = svgOriginalGit
});

// Curtir trilha
const imagemCurtir = document.querySelector('.curtir-trilha img');

const srcOriginalCurtir = 'images/icons8-gostar-50.png';
const srcAtivoCurtir = 'images/icons8-heart-50.png'; 

let curtirAtivo = false;

// Eventos de mouseover e mouseout para alteração de imagem
imagemCurtir.addEventListener('mouseover', function() {
    if (!curtirAtivo) { 
        this.src = srcAtivoCurtir; 
    }
});

imagemCurtir.addEventListener('mouseout', function() {
    if (!curtirAtivo) { 
        this.src = srcOriginalCurtir;
    }
});

imagemCurtir.addEventListener('click', function() {
    curtirAtivo = !curtirAtivo; 
    
    this.src = curtirAtivo ? srcAtivoCurtir : srcOriginalCurtir;
});


// Background Srcrool Imagem

document.addEventListener('DOMContentLoaded', function(){
    const images =[
        'images/imagem(1).jpg',
        'images/imagem(2).jpg',
        'images/imagem(3).jpg',
        
    ];

    let currentIndex = 0;
    const imgElement = document.querySelector('.bg-images .current-img');

    function showImage(index) {
        imgElement.src = images[index]; 
      }

      document.querySelector('.next-btn-up').addEventListener('click', function (event) {
        event.preventDefault(); 
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        showImage(currentIndex);
      });
    
      document.querySelector('.next-btn-down').addEventListener('click', function (event) {
        event.preventDefault(); 
        currentIndex = (currentIndex + 1) % images.length; 
        showImage(currentIndex);
      });
    
      // Inicializa com a primeira imagem
      showImage(currentIndex);

});


// Função Ativar e Esconder Postagens

function showPost(type) {
  // Seleciona posts e botões para o container de posts móveis
  const postsMobile = document.querySelectorAll('.info-post-mobile');
  const buttonsMobile = document.querySelectorAll('.btn-post');

  // Seleciona posts e botões para o container de posts recentes
  const postsRecent = document.querySelectorAll('.conteudo-post');
  const buttonsRecent = document.querySelectorAll('.btn-post');

  // Primeiro, esconda todos os posts em ambos os containers
  postsMobile.forEach(post => post.style.display = 'none');
  postsRecent.forEach(post => post.style.display = 'none');

  // Exibe apenas os posts que correspondem ao tipo selecionado
  postsMobile.forEach(post => {
    if (post.classList.contains(type)) {
      post.style.display = 'block'; // Display 'block' para garantir que o display seja aplicado corretamente
    }
  });

  postsRecent.forEach(post => {
    if (post.classList.contains(type)) {
      post.style.display = 'flex'; // 'flex' pode ser usado para alinhar os posts corretamente
    }
  });

  // Remove a classe 'active' de todos os botões
  buttonsMobile.forEach(button => button.classList.remove('active'));
  buttonsRecent.forEach(button => button.classList.remove('active'));

  // Adiciona a classe 'active' ao botão correspondente
  document.getElementById(`${type}-post`).classList.add('active');
}



