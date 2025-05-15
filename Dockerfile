# Use a Node.js base image.  Pick a specific version for consistency.
FROM node:18-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory.
COPY package.json ./
COPY package-lock.json ./

# Install application dependencies.  Use --frozen-lockfile for production builds.
RUN npm install --frozen-lockfile

# Copy the rest of the application code into the container.
COPY . .

# Expose the port your application listens on (e.g., 3000, 8080).
EXPOSE 8080

# Define the command to run your application.
CMD [ "npm", "start" ]
