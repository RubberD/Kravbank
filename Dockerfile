FROM node:24-alpine

WORKDIR /app

# Oppgrader npm for å fjerne sårbar bundlet tar-versjon (CVE-2026-53655)
RUN npm install -g npm@latest

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy site files
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
