FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

# Create the directory for app logs defined in nginx.conf
RUN mkdir -p /var/log/app_engine

# Simple health check
RUN mkdir -p /usr/share/nginx/www/_ah && \
    echo "healthy" > /usr/share/nginx/www/_ah/health

ADD build/ /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www