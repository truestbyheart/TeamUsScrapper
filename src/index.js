import express from 'express';
import bodyparser from 'body-parser';


import route from './routes/todaytv';

const app = express();

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'welcome to the TeamUsScrapper, please signUp and read the docs',
  });
});

app.use('/series', route);


const PORT = process.env.PORT || 3000;
app.listen(PORT);

export default app;
