FROM node

WORKDIR /mnt/c/Users/pedro/Documents/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

