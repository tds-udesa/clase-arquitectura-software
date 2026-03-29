FROM node:24.12 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --production && npm cache clean --force

COPY . .

FROM node:24.12-alpine AS production

WORKDIR /app

RUN addgroup -S udesa && adduser -S udesa -G udesa

COPY --from=builder --chown=udesa:udesa /app/node_modules ./node_modules
COPY --from=builder --chown=udesa:udesa /app/package*.json ./
COPY --from=builder --chown=udesa:udesa /app/. ./

USER udesa

EXPOSE 3000


CMD ["node", "app.js"]
