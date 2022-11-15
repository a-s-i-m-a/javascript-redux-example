FROM node:15-alpine as build
RUN npm install -g serve

WORKDIR /app

COPY . /app/

RUN npm install --force

RUN npm run build

LABEL traefik.enable="true"
LABEL traefik.http.routers.web_front.rule="Host(`yul.app.amics-tech.ru`)"
LABEL traefik.http.routers.web_front.entrypoints="websecure"
LABEL traefik.http.services.web_front.loadbalancer.server.port="5000"
LABEL traefik.http.routers.web_front.service="web_front"
LABEL traefik.http.routers.web_front.tls.certresolver="leresolver"

CMD serve -d -s /app/build


