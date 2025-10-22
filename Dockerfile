# Use official Node LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies (none in this simple app)
COPY package.json ./
RUN npm install --production

# Copy app files
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
