<p align="center" >
    <img alt="capa" src="./assets-readme/Capa.png">
</p>
<p aling="center">

# NLW Return - Impulse 🚀
Projeto desenvolvido em conjunto com a [Rocketseat](https://www.rocketseat.com.br/) durante a Next Level Week Return, trilha Impulse, entre os dias 01/05/2022 e 08/05/2022.

## 💻 Projeto 
- Consiste em um componente Widget para envios de feedbacks que pode ser utilizado em qualquer site.
- Ao ser tocado abre um pop-up que é possível fazer o registro de seu feedback.

## 🧪 Tecnologias
- React
- NodeJS
- TailWind CSS
- Headless UI
- Prisma
- Jest
- Vite
- MailTrap
- Railway
- Vercel

## 🛠️ Feactures
- É possível anexar uma screenshot ao feedback.
- Todo o sistema é funcional apenas com o teclado.
- O tema será alterado Light/Dark de acordo com o tema do sistema do usuário.

## 🔮 Layout
Acesse o layout do projeto através do [Figma](https://www.figma.com/community/file/1102912516166573468).

## 📄Como executar
Faça o download das dependências na pasta `web` e na pasta `server`.
```bash
$ npm install
```
- Na pasta `web` crie um `.env.local` com a URL do seu database
```bash
VITE_API_URL = ""
```
- Na pasta `server` crie um `.env` com o caminho do `dev.db` do seu database de desenvolvimento na pasta `prisma`.
```bash
DATABASE_URL=""
```
    Ex: "file:./dev.db"

## 💭 Extra
- Acesse o projeto no ar por [aqui](https://nlw-return-impulse-sigma.vercel.app/).