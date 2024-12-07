# Use the official Node.js image for building the app
FROM node:22-alpine AS build

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React app source code
COPY . .

# Build the React app
RUN npm run build && ls -la /src/dist

# Use an Nginx image to serve the built app
FROM nginx:latest

# Copy the built app from the builder stage
COPY --from=build /src/dist /usr/share/nginx/html

# Expose the port Nginx will use
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]