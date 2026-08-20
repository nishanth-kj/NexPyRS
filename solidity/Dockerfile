FROM node:26-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 8545
CMD ["npx", "hardhat", "node", "--hostname", "0.0.0.0"]
