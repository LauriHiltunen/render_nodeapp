FROM node:18.16.0
# Kopioidaan esimerkiksi package.json ja package-lock.json
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start" ]