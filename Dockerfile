FROM node:20.4-bookworm-slim

# Install Git and other necessary packages
RUN apt-get update && apt-get install -y git

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy the entire application code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Expose the application port
EXPOSE 8181

# Command to run the application
CMD ["pnpm", "start"]
