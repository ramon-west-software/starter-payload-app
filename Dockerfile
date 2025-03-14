# Linode instance
# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /payload-app-starter

# Copy package files first to optimize caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose the default Payload port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]