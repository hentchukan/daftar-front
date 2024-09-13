FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
ARG VUE_APP_MODE
COPY .env.$VUE_APP_MODE .env
RUN npm run build --mode=$VUE_APP_MODE

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf