# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory to the root of your app (default is already root, so this is optional)
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Clean npm cache and install the dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 5001 for the service
EXPOSE 5001

# Command to run the application
CMD ["npm", "start"]
