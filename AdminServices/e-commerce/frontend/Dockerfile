# Use a lightweight Node.js image as the base (replace with desired version if needed)
FROM node:18-alpine AS builder

# Set working directory within the builder stage
WORKDIR /app

# Copy package.json and package-lock.json for dependency management
COPY package*.json ./

# Install dependencies using npm (adjust if using yarn)
RUN npm install

# Copy the rest of the frontend application code
COPY . .


# Set working directory within the runner stage
WORKDIR /app

# Expose the port used by your development server 
EXPOSE 5173

# Start the development server using the appropriate command
CMD [ "npm", "run", "dev" ]
