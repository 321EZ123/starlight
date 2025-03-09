# Use the official Node.js image as a base
FROM node:20.4-bookworm-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Install dependencies directly (if you have a way to specify them, else this step assumes they are already included)
RUN npm install

# Expose the port the app runs on
EXPOSE 8181

# Command to run the application
CMD ["node", "index.js"]
