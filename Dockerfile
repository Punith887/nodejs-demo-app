# Use official Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy dependency specifications
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Use non-root node user for security
USER node

# Start application
CMD ["npm", "start"]
