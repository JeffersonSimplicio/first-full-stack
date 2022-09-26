<h1 align="center">TO DO LIST FULL-STACK 📓</h1>

## Descrição
Esse To Do List é uma aplicação full-stack, ou seja, á uma divisão de responsabilidade. O back-end desenvolvido em node.js com uma arquitetura MSC (Model-Service-Controller), é possível criar, ler, editar e deletar(CRUD) as tarefas. O front-end, construído em React, interage com o banc-end, não sendo necessário guardar qualquer arquivo na máquina do usuário.

## Tecnologias
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

O front-end foi desenvolvido com **React**, o código foi componentizado visando uma maior facilidade em futuras manutenções, atualizações e a reutilização de código. A comunicação entre os componentes foi feitai utilizando uma tecnologia interna do react, o **Context API**, dispensando a instalação de bibliotecas externas.

O back-end foi desenvolvido em javascript com **node.js**, utilizando a lib **Express** para a estruturação da API, é usada uma arquitetura **MSC**(Model-Service-Controller) para distribuir responsabilidades, além de facilitar futuras manutenções e melhorias. As tarefas são salvas em um arquivo .JSON, que é editado usando ferramentas internas. 