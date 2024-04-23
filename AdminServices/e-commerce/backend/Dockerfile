# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency management
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Expose the port used by your Express app (replace 5000 if needed)
EXPOSE 5000

# Set MongoDB connection string as environment variable
ENV MONGODB_URI=mongodb://host.docker.internal:27017

# Start the application using the appropriate command
CMD ["node", "app.js"]
