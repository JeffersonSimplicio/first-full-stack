FROM node:lts-alpine3.16
WORKDIR /app
COPY . .
RUN ["npm", "install"]
EXPOSE 3000
ENTRYPOINT ["npm", "start"]