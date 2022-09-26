<h1 align="center">TO DO LIST FULL-STACK 📓</h1>

## Descrição
Esse To Do List é uma aplicação full-stack, ou seja, á uma divisão de responsabilidade. O back-end desenvolvido em node.js com uma arquitetura MSC (Model-Service-Controller), é possível criar, ler, editar e deletar(CRUD) as tarefas. O front-end, construído em React, interage com o banc-end, não sendo necessário guardar qualquer arquivo na máquina do usuário.

## Tecnologias
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

O front-end foi desenvolvido com **React**, o código foi componentizado visando uma maior facilidade em futuras manutenções, atualizações e a reutilização de código. A comunicação entre os componentes foi feitai utilizando uma tecnologia interna do react, o **Context API**, dispensando a instalação de bibliotecas externas.

O back-end foi desenvolvido em javascript com **node.js**, utilizando a lib **Express** para a estruturação da API, é usada uma arquitetura **MSC**(Model-Service-Controller) para distribuir responsabilidades, além de facilitar futuras manutenções e melhorias. As tarefas são salvas em um arquivo .JSON, que é editado usando ferramentas internas.

## Utilização

<details>
  <summary><strong>💻 Localmente</strong></summary>

  - Para rodar a aplicação, obrigatoriamente você deve ter o `node` instalado em seu computador.

  1. Clone o projeto para sua maquina
  ```
    git clone git@github.com:JeffersonSimplicio/first-full-stack.git
  ```

  2. Entre no diretório gerado  
  ```
    cd first-full-stack
  ```

  3. Entre no diretório de front-end e instale as dependências
  ```
    cd frontend/ && npm i && cd ..
  ```

  4. Entre no diretório de back-end e instale as dependências
  ```
    cd backend/ && npm i && cd ..
  ```

  5. Inicialize a aplicação back-end
  ```
    cd backend/ && npm start && cd ..
  ```

  6. Inicialize a aplicação front-end
  ```
    cd frontend/ && npm start && cd ..
  ```

  7. Abra o navegador e acesse a url: `http://localhost:3000/`
</details>

<details>
  <summary><strong>🐳 Docker</strong></summary>

  - Para rodar a aplicação com docker, é necessário ter instalando em sua maquina `Docker` e `Docker Compose`


  1. Clone o projeto para sua maquina
  ```
    git clone git@github.com:JeffersonSimplicio/first-full-stack.git
  ```

  2. Entre no diretório gerado  
  ```
    cd first-full-stack
  ```

  3. Suba o ambiente do docker
  ```
    docker-compose up -d --build
  ```

  4. Abra o navegador e acesse a url: `http://localhost:3000/`
</details>