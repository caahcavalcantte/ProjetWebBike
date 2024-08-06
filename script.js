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
