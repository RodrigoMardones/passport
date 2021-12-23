FROM node:16.3.0-alpine

WORKDIR /app

# copia de configuraciones
COPY package*.json ./
COPY tsconfig.json ./

# instalacion de typescript y otros elementos
RUN npm install -g typescript  
RUN npm install
# copia de distribution
COPY . .
#compilado
CMD ["npm","run" ,"start"]