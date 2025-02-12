FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf