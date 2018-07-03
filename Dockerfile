# Source: https://github.com/TripleParity/docks-ui

FROM node:9.8.0-alpine as builder

WORKDIR /app
RUN apk add --update python

COPY package.json .
RUN npm install

COPY . .
RUN npm run-script build

FROM nginx:alpine
EXPOSE 80

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist .