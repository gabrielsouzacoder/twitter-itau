FROM node:12.15.0 AS builder

WORKDIR /usr/src/app

COPY . .
RUN yarn install && npm run build

FROM node:12.15.0

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN yarn install 

COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "/app/dist/index.js"]