// configurando o servidor
const express = require('express') //pegando o framework express
const server = express() //chamando a função express


// configurar para apresentar arquivos estaticos
server.use(express.static('public')) // abre uma pasta com os arquivos estaticos extra

//pegar o body do formulario

server.use(express.urlencoded({extended: true}))

// configurar conexão com o banco de dados PostgreSQL
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: '140402',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})


// configurar template engine - deixar o html mais dinamico; atualizar o html
// permite usar variaveis no html, functions...
const nunjucks = require('nunjucks')
nunjucks.configure('./',{
    express: server,
    noCache: true, //caso nao carregue todos os doadores para o html
}) //recebe o diretorio e um objeto, respectivamente


// configurar apresentação da página 
server.get('/', function (req, res){
    db.query('SELECT * FROM donors', function(err, result){
        if (err) return res.send('erro')
        
        const donors = result.rows
        return res.render('index.html', { donors }) //com a ajuda do nunjucks
    })
})

// requisição do usuario
server.post('/', function (req, res){
    //pegar dados do formulario
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if (name ==''|| email =='' || blood ==''){
        return res.send('Todos os campos sao obrigatorios')
    }
    //colocar valores dentro do banco de dados
    const query = `
    INSERT INTO donors ("name", "email", "blood")
    VALUES ($1, $2, $3)`

    const values = [name, email, blood]
    db.query(query, values, function (err){
        // fluxo de erro
        if (err) return res.send('erro no banco de dados')
        
        // fluxo ideal
        return res.redirect('/') // retornar para o get

    })

    
})

// ligar o servidor e permitir acesso a ele na porta 3000
server.listen(3000, function () {
    console.log('Servidor iniciado!')
})
