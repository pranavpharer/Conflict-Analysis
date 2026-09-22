# Build the React application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# The package homepage targets GitHub Pages. Override it for the container,
# which serves the application from the web-server root instead.
ENV PUBLIC_URL=/
RUN npm run build

# Serve the built application with Nginx
FROM nginx:1.27-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
