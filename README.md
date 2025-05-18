# Receitas Italianas - Sistema de Carrinho

Este projeto é uma aplicação simples de um sistema de cardápio italiano com funcionalidade de carrinho de compras, aplicação de cupom de desconto e finalização de pedido.

## Funcionalidades
- Adicionar itens no carrinho de compras
- Exibir os itens adicionados no carrinho
- Aplicar cupom de desconto (`ITALIADESCONTO` - 15% de desconto)
- Impedir a aplicação do cupom em um carrinho vazio
- Finalizar o pedido e limpar o carrinho

## Estrutura do Projeto
```
/
├── index.html
├── carbonara.html
├── lasanha.html
├── pizza.html
├── tiramisu.html
├── styles.css
├── script.js
└── README.md
```

- `index.html`: Estrutura HTML da página principal.
- `styles.css`: Estilos básicos para centralizar e organizar os elementos da página.
- `script.js`: Lógica JavaScript para o carrinho, aplicação de cupom e finalização do pedido.

## Como Utilizar
1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador.
3. Adicione itens ao carrinho clicando em "Adicionar no carrinho".
4. Insira o cupom `ITALIADESCONTO` para aplicar o desconto.
5. Clique em "Finalizar Pedido" para concluir a compra e limpar o carrinho.

## Validação do Cupom
- O cupom de desconto `ITALIADESCONTO` só pode ser aplicado quando houver itens no carrinho.
- Caso o cupom seja inválido ou o carrinho esteja vazio, uma mensagem de erro será exibida.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## Autor
- Italo Dutra

## Licença
Este projeto está licenciado sob a MIT License.
