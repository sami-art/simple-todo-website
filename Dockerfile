FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY behaviour.js /usr/share/nginx/html/behaviour.js

EXPOSE 80
