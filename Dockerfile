# Multi Stage Build Dockerfile
# Stage 1 - Building dependency for npm packages
FROM node:16.14-alpine as build-deps
WORKDIR /usr/src/app

#Copying package files
COPY package.json package-lock.json ./

#Installing npm packages
RUN npm install

COPY . ./

#Building npm sources
RUN npm run build


# Stage 2 - Copying the files to nginx container to start the application
FROM nginx:1.20.2

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]