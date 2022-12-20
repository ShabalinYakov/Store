const initDatabase = require('./srartUp/initDatabase');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const config = require('config');
const chalk = require('chalk');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = config.get('PORT') ?? 8080;
// if (process.env.NODE_ENV === 'production') {
//   console.log('Production');
// } else {
//   console.log('Development');
// }

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase();
    });
    await mongoose.connect(config.get('MONGO_URI'));
    console.log(chalk.green('MongoDB connected.'));
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}`));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
