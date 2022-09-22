FROM node:lts-alpine
WORKDIR /react
ADD package.* ./
RUN npm install
COPY . .
RUN npm run build




