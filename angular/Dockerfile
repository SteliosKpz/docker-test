FROM node:18-alpine as build 

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf node_modules

FROM nginx:alpine
COPY --from=build /app/dist/docker-test/browser /usr/share/nginx/html/angular