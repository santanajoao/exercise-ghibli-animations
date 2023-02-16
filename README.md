# Boas vindas ao exercício Ghibli Animations

Você trabalha como pessoa desenvolvedora Front-end no Studio Ghibli, um dos maiores estúdios de animação do Japão. A sua tarefa será criar uma aplicação que lista todos os filmes de animação produzidos pelo estúdio. A pessoa usuária poderá favoritar os filmes que desejar, que poderão ser acessados em uma outra página.

O layout proposto está nesse [figma](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)

## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Vá para a branch `main` do seu projeto e execute o comando `git branch` ou `git branch -a`.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você criará uma aplicação que exibe as principais animações do [Studio Ghibli](https://studioghibli.com.br/studioghibli/), além de possibilitar a pessoa usuária a favoritar uma animação e renderizá-los na página de favoritos.

> 👀 Dica: a estrutura de páginas e as rotas da aplicação já estão pronta!

Para se inspirar, o Figma da aplicação está nesse [link.](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary> <br />

  Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

  [FORMULÁRIO DE AVALIAÇÃO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH27-A&template=betrybe/sd-027-a-exercise-ghibli-animations)

</details>

<br />

# Exercícios

## Exercício 1 - Montando a estrutura

- Crie o `Context` dentro do arquivo `/src/context/FilmContext.js`;
- No componente `App`, utilize o Hook `useEffect` para fazer a chamada à API utilizando o endpoint `https://api-trybe-frontend.vercel.app/api/ghibli-animations`;
- Ainda no componente `App`, crie um estado que será o responsável por armazenar os dados retornados pela API.
- Com o Context criado, adicione o `FilmContext.Provider` no arquivo App.js, envolvendo todas as rotas.
- Adicione como valor do `Provider` o estado criado contendo os dados da API.

### Testes

- A API foi chamada com o endpoint corretamente - uma e apenas uma vez.
- Todos os componentes devem ser funcionais.

## Exercício 2 - Exibindo a lista de filmes na página Home

- No arquivo `/src/pages/Home`, liste os filmes recebidos pela API:
  - Liste o título (como h2), a imagem e a descrição de todos os filmes. A imagem deve ter a propriedade `alt` como sendo o nome do filme.
  - Adicione um botão, em cada filme, para salvar a animação na página de favoritos.

💡 Dica: Utilize o Hook `useContext` para recuperar os valores armazenados no `Provider`.

### Testes

- Todos os títulos, imagens e botões são exibidos na página Home

## Exercício 3 - Exibindo a lista de filmes favoritados na página Favorites

- No arquivo `src/pages/Favorites.js`, liste todos os filmes favoritados na página Home;
- Na página de filmes favoritados, cada filme deve possuir um botão que, ao ser clicado, remove o filme da lista de filmes favoritos.
- Você **deve** armazenar os itens favoritos no `Context`.

⚠️ Atenção: O mesmo filme não pode ser listado mais de uma vez na página de favoritos.

### Testes

- Clicar no botão de favoritar faz com que aquele filme apareça também na página de favoritos.
- Clicar no botão de favoritar em um filme que está na lista de favoritos faz com que aquele filme saia da página de favoritos.

## Exercício 4 (Bônus) - Estilizando a página

- Faça o CSS de acordo com o [figma do projeto](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)
