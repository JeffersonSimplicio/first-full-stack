FROM node:lts-alpine3.16
WORKDIR /app
COPY . .
RUN ["npm", "install"]
EXPOSE 3001
ENTRYPOINT ["npm", "start"]