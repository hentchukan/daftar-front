# Set environment variable for Vue during build time
ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=$VUE_APP_BASE_URL

# Debug the build process to check if the ARG is set correctly
RUN echo "VUE_APP_BASE_URL is set to $VUE_APP_BASE_URL"

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