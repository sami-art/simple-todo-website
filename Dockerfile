FROM public.ecr.aws/amazonlinux/amazonlinux:2

# Install packages
RUN yum update -y && \
    yum install -y httpd && \
    rm -rf /var/cache/yum/*

# Copy web files to the container
COPY index.html /var/www/html/index.html
COPY style.css /var/www/html/style.css
COPY behaviour.js /var/www/html/behaviour.js

# Expose port 80
EXPOSE 80

# Start Apache web server
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

