document.addEventListener('DOMContentLoaded', function() {
  // Função para alternar entre as abas
  function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }

  // Fazendo requisição para o arquivo ofertas.json para o slider
  fetch('ofertas.json')
    .then(response => response.json())
    .then(data => {
      // Criando um elemento div para conter o slider
      const sliderContainer = document.getElementById('slider-container');
      const sliderDiv = document.createElement('div');
      sliderDiv.classList.add('slider');

      // Iterando sobre cada oferta no arquivo ofertas.json
      data.forEach(oferta => {
        // Criando um elemento div para cada slide do slider
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        // Criando uma imagem para cada slide
        const slideImage = document.createElement('img');
        slideImage.src = oferta.image;
        slideImage.alt = 'Oferta';

        // Adicionando a imagem ao slide
        slideDiv.appendChild(slideImage);

        // Adicionando o slide ao slider
        sliderDiv.appendChild(slideDiv);
      });

      // Adicionando o slider ao container
      sliderContainer.appendChild(sliderDiv);

      // Inicializando o slick carousel
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Tempo de exibição de cada slide em milissegundos
        dots: true, // Mostrar pontos de navegação
        arrows: false, // Ocultar as setas de navegação padrão
        infinite: true, // Loop infinito
        speed: 500, // Velocidade da transição entre slides em milissegundos
        slidesToShow: 1, // Quantidade de slides a serem exibidos ao mesmo tempo
        slidesToScroll: 1 // Quantidade de slides a serem rolados ao avançar/retroceder
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao carregar as ofertas:', error);
    });

  const catalogoDiv = document.getElementById('catalogo');

  // Fazendo requisição para o arquivo catalogo.json
  fetch('catalogo.json')
    .then(response => response.json())
    .then(data => {
      // Iterando sobre cada veículo no catálogo
      data.forEach(veiculo => {
        // Criando um elemento div para cada veículo
        const veiculoDiv = document.createElement('div');
        veiculoDiv.classList.add('veiculo');

        // Criando título do veículo
        const veiculoTitle = document.createElement('h2');
        veiculoTitle.textContent = veiculo.title;

        // Criando imagem do veículo
        const veiculoImage = document.createElement('img');
        veiculoImage.src = veiculo.image;
        veiculoImage.alt = veiculo.title;

        // Criando valor do veículo
        const veiculoValue = document.createElement('p');
        veiculoValue.textContent = veiculo.value;

        // Criando descrição do veículo
        const veiculoDescription = document.createElement('p');
        veiculoDescription.textContent = veiculo.description;

        // Adicionando elementos à div do veículo
        veiculoDiv.appendChild(veiculoTitle);
        veiculoDiv.appendChild(veiculoImage);
        veiculoDiv.appendChild(veiculoValue);
        veiculoDiv.appendChild(veiculoDescription);

        // Adicionando div do veículo ao catálogo
        catalogoDiv.appendChild(veiculoDiv);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao carregar o catálogo:', error);
    });
});
