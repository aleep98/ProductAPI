
import express from 'express'
const server = express();
server.use(express.json());



const produtos = [
     { id: 1, nome: 'Notebook', preco: 2000 },
     { id: 2, nome: 'Teclado', preco: 450 },
     { id: 3, nome: 'Monitor', preco: 1800 }
];

//MIDDLEWARE GLOBAL

server.use((req, res, next) => {
     console.log(`CHAMADA URL: ${req.url}`);
     next();
})

function checkProduto(req, res, next) {
     if (!req.body.nome) {
          return res.status(404).json({error : "o nome do produto e obrigatorio"})
}

     if (!req.body.preco) {
          return res.status(404).json({error : "o preço do produto é obrigatorio"})
     }

     next();
}

server.get('/produtos' , ( req , res ) => {
     return res.json(produtos);

})

server.get('/produtos/:id' , ( req , res ) => {
     const id = parseInt(req.params.id)
     const produto = produtos.find(produto => produto.id === id)

     if (produto) {
          return res.json(produto);
     }

     return res.status(404).json({ error: 'Produto não encontrado' })
}
)


server.post('/produtos', checkProduto , ( req , res ) => {
   const { nome, preco } = req.body;
   const novoProduto = {
     id: produtos.length + 1,
     nome,
     preco
   };
   produtos.push(novoProduto);
   return res.status(201).json(novoProduto);
})

server.put('/produtos/:id', checkProduto , (req, res) =>{
     const { id } = req.params;
     const {nome, preco } = req.body

     const produto = produtos.find(produto => produto.id === parseInt(id));
     
     if(!produto){
     return res.status(404).json({error: 'Produto não encontrado'})
     }
          produto.nome = nome;
          produto.preco = preco;

          return res.json(produtos);
;})

server.delete('/produtos/:id', (req, res) => {

     const { id } = req.params;

     produtos.splice(id, 1)

     return res.json(produtos);})


server.listen(3000);