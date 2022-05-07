import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// É uma forma de não permitir frontend inadequado acessar o backend.
// so o endereço que você passar, no caso atul tds podem acessar.
/* 
    app.use(cors({
        origin: 'http://...'
    }));
*/
app.use(cors());
// reconhecer o json
app.use(express.json());
// usar rotas do arquivo de rotas
app.use(routes);






// vai ouvir a porta 3333
app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!')
})

