FROM node:16

WORKDIR /usr/build/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY .  .

EXPOSE 3000

CMD ["npm", "start"]



