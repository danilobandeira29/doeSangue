# DOE SANGUE
Projeto realizado no MaratonaDev03, Rocketseat

# Demo da aplicação
[Youtube](https://www.youtube.com/watch?v=2FUKIQ6BYiE&feature=youtu.be)


# Descrição
Cadastro de doador de sangue, onde são informados:
- Nome
- Email
- Tipo sanguíneo


# Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Nunjucks
- Nodemon
- PostgreSQL
- Postbird

# Dependências
No arquivo <em>package.json</em> localizado na pasta raíz, contém no campo <em>"dependencies"</em> todas as dependências para executar a aplicação.

```
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.2",
    "nunjucks": "^3.2.0",
    "pg": "^7.18.2"
  }
```
# Tutorial para configuração de algumas dependências
## Criando Banco de Dados PostgreSQL
Com o PostgreSQL instalado:
 - Abra o pgAdmin 4(versão utilizada na criação da aplicação)
 - Acesse no menu lateral os itens: **Servers** > **PostgreSQL** > **Database**, clique com o botão direito sobre ele, selecione **Create** e em seguida **Database...**
 - No campo **Database**, inserir o nome para o banco, neste caso **doe**
 - No campo **Owner**, o usuario **postgres**. Clique em **Save** e pronto, o banco de dados está criado
 
      *Altere o campo **Owner** de acordo com seu usuário ou necessidade*
 - Agora clique com o botão direito no banco **doe**, selecione **Query Tool...** e insira o comando: 
   ```
   CREATE TABLE donors(
      id SERIAL NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      blood VARCHAR(255) NOT NULL
   )
   ```
  
  - logo em seguida clique em **executar** ou pressione **F5**
  

## Setando o Banco de dados na aplicação
- Abra o arquivo **server.js** e procure por está linha:
  ```
  const db = new Pool({
      user: 'postgres',
      password: 'insira-sua-senha',
      host: 'localhost',
      port: 5432,
      database: 'doe'
  })
  ```
- No campo **password**, insira sua senha de usuario entra aspas. Exemplo: **'0000'**

     *Altere os itens **user**, **port**, **database**, de acordo com a necessidade requirida pelo seu acesso ao PostgreSQL*
- Com as alterações necessárias feitas, basta salvar.


# Inicialização da aplicação
  Vá ao terminal node e utilize **npm start** para iniciar o servidor. Com o servidor já inicializado, basta ir ao navegador e acessar http://localhost:3000/
  
  *Verifique se o diretório do terminal está de acordo com o diretório da aplicação*
