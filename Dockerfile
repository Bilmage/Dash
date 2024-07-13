# Use an official Node.js runtime as the base image
FROM node:20.5.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@latest
RUN npm install --save-dev @nrwl/cli

# Copy the rest of the application code
COPY . .

# Build the Angular app (replace 'your-app' with your actual app name)
RUN npx nx build biz-resolve-frontend --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx web root folder
COPY --from=build /app/dist/biz-resolve-frontend /usr/share/nginx/html

# Copy a custom nginx configuration (optional)
# COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
