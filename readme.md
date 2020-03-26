# node-express-sequelize-jwt

#### Clone & setup

1. `git clone https://github.com/chrifts/node-express-sequelize-jwt.git`

2. Go to file 'cloned-folder/config/config.json' and edit. Setup DB credentials here. First need to have a schema created. You can do it runing on MySQL: "CREATE DATABASE db_name_you_like"

3. Go to 'cloned-folder/' and run `npm install`

4. run `npm start`

5. You need to have sequelize CLI installed (see https://www.npmjs.com/package/sequelize-cli),then you can run: `sequelize db:migrate` Now you have the *Users* table created in your selected database. You can also run: `sequelize db:migrate:undo:all` to revert migrations.