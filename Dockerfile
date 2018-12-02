# Create container from the alpine linux image
FROM alpine:3.7

# Add nginx and nodejs
RUN apk add --update nginx nodejs

# Create the directories we will need
RUN mkdir -p /tmp/nginx/client
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the respective nginx configuration files
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

# Set directory we want to run the next commands for
WORKDIR /tmp/nginx/client
# Copy code into the container
COPY . .
# Install dependencies, can be commente
RUN npm install

# run webpack and the vue-loader
RUN npm run build

#copy built app to serve directory
RUN cp -r dist/* /var/www/html

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding
CMD ["nginx", "-g", "daemon off;"]