FROM node:24-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy site files
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
