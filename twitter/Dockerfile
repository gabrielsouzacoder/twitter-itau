FROM node:12.3 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build --prod

FROM debian:latest
EXPOSE 8080
RUN apt update -y

RUN apt install -y nginx libnginx-mod-http-headers-more-filter libnginx-mod-http-lua gettext-base
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY entrypoint.sh /entrypoint.sh

RUN chgrp -R 0 /usr/share/nginx/html/ && \
  chmod -R g=u /usr/share/nginx/html/ && \
  chgrp -R 0 /entrypoint.sh && \
  chmod -R g=u /entrypoint.sh

ENTRYPOINT ["sh","/entrypoint.sh"]

CMD nginx
