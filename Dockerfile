FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
# If lock file exists copy it, else ignore
COPY package-lock.json* ./
RUN npm install

COPY . .
# Note: Since we moved frontend to root, we just copy everything in root context
# but ignore backend folders via .dockerignore if possible, or just build safely.

# Building Next.js
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
