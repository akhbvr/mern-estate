# Mern Estate
## Deploy to render

> [!NOTE]
> Deploy to render
> I - In [package.json](./package.json) we add to the scripts section:
>```
> "build": "npm install && npm install --prefix client && npm run build --prefix client"
>``` 
>
> II - We also add [index.html](./api/index.js)
>
> III - Go to [render.com](https://render.com/) > `Dashboard` > `New +` > `Web Service` > `Build and deploy from a Git repository` and `next` > select GitHub repo and `connect` > fill in the blanks + `Build Command: npm run build` + `Start Command: npm start` > click `Advanced --> Add Environment Variable` You write the data in `.env` here both front and back > `Create Web Service`
>

> [!TIP]
> Add this to [package.json](./package.json) in root if you get an error about `node index.js`
>```
>   "engines": {
        "node": ">=14.20.1"
    }
>```