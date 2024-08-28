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
const imagemCurtir = document.querySelectorAll('.curtir-trilha img');

const srcOriginalCurtir = 'images/icons8-gostar-50.png';
const srcAtivoCurtir = 'images/icons8-heart-50.png'; 

imagemCurtir.forEach(function(imagemCurtir){
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


// Function esconder Galeria

document.querySelectorAll('.toggleMore').forEach(button => {
  button.addEventListener('click', function() {
    const galleries = this.closest('.bg-box-trilha').querySelectorAll('.more-galleries');
    const itemsShow = 1;
    let shownCount = Array.from(galleries).filter(el => el.style.display === 'flex').length;
    let iniciotIndex, fimIndex;

    if (shownCount < galleries.length) {
      iniciotIndex = shownCount;
      fimIndex = Math.min(shownCount + itemsShow, galleries.length);

      for (let i = iniciotIndex; i < fimIndex; i++) {
        galleries[i].style.display = 'flex';
      }

      // Atualizar o texto do botão 
      if (fimIndex >= galleries.length) {
        this.textContent = 'Clique para Esconder';
      }
    } else {
      // Esconder itens
      for (let i = 0; i < galleries.length; i++) {
        galleries[i].style.display = 'none';
      }
      this.textContent = 'Clique para Mostrar Mais';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const moreToggle = document.querySelector('.moreToggle');
  const moreGallerie = document.querySelectorAll('.more-gallerie');

  // Inicialmente, oculta todos os elementos
  moreGallerie.forEach(element => {
    element.style.display = 'none';
  });

  let currentIndex = 0;
  const itemsToShow = 1;
  let allShown = false;

  moreToggle.addEventListener('click', function() {
    if (!allShown) {
      // Mostrar os próximos itens
      const endIndex = Math.min(currentIndex + itemsToShow, moreGallerie.length);

      for (let i = currentIndex; i < endIndex; i++) {
        moreGallerie[i].style.display = 'flex'; // Torna os elementos visíveis
      }

      currentIndex = endIndex;

      // Verifica se todos os itens foram mostrados
      if (currentIndex >= moreGallerie.length) {
        moreToggle.textContent = 'Clique para Esconder';
        allShown = true;
      }
    } else {
      // Esconder todos os itens
      moreGallerie.forEach(element => {
        element.style.display = 'none';
      });

      currentIndex = 0;
      moreToggle.textContent = 'Clique para Mostrar Mais';
      allShown = false;
    }
  });
});


// Function esconder boxes trilha

document.querySelectorAll('.trilha-link').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Esconde todas as trilhas
      document.querySelectorAll('.bg-box-trilha').forEach(function(trilha) {
          trilha.classList.remove('active');
      });

      // Exibe a trilha correspondente
      const target = link.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
      
      // Rola a página para o topo
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Adiciona um efeito suave ao rolar
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Configuração das galerias
  const galerias = [
      {
          esquerda: '.nav-arrow-left',   // Classe da seta esquerda para a primeira galeria
          direita: '.nav-arrow-right',   // Classe da seta direita para a primeira galeria
          container: '.galeria-scroll',  // Classe do contêiner da primeira galeria
          quantidadeRolagem: 200         // Quantidade de rolagem para a primeira galeria
      },
      {
          esquerda: '.seta-esquerda',    // Classe da seta esquerda para a segunda galeria
          direita: '.seta-direita',      // Classe da seta direita para a segunda galeria
          container: '.container-cards', // Classe do contêiner da segunda galeria
          quantidadeRolagem: 200         // Quantidade de rolagem para a segunda galeria
      }
  ];

  // Função para rolar a galeria
  function configurarGaleria(galeria) {
      const setaEsquerda = document.querySelector(galeria.esquerda);
      const setaDireita = document.querySelector(galeria.direita);
      const container = document.querySelector(galeria.container);

      if (setaEsquerda && setaDireita && container) {
          function rolarGaleria(direcao) {
              if (direcao === 'esquerda') {
                  container.scrollBy({ left: -galeria.quantidadeRolagem, behavior: 'smooth' });
              } else if (direcao === 'direita') {
                  container.scrollBy({ left: galeria.quantidadeRolagem, behavior: 'smooth' });
              }
          }

          setaEsquerda.addEventListener('click', () => rolarGaleria('esquerda'));
          setaDireita.addEventListener('click', () => rolarGaleria('direita'));

          container.addEventListener('scroll', () => {
              const rolagemEsquerda = container.scrollLeft;
              const larguraRolagem = container.scrollWidth;
              const larguraVisivel = container.clientWidth;

              setaEsquerda.style.display = rolagemEsquerda > 0 ? 'block' : 'none';
              setaDireita.style.display = rolagemEsquerda < larguraRolagem - larguraVisivel ? 'block' : 'none';
          });

          container.dispatchEvent(new Event('scroll'));
      } else {
          console.error('Um ou mais elementos não foram encontrados.');
      }
  }

  // Configura ambas as galerias
  galerias.forEach(configurarGaleria);
});

