FROM nginx
WORKDIR /COURS_CSS
COPY CSS /usr/share/nginx/html/css
COPY JS /usr/share/nginx/html/js
COPY index.html /usr/share/nginx/html/index.html
COPY Assets /usr/share/nginx/html/images
EXPOSE 8081