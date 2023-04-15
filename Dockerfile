FROM node:16.15.1-alpine3.16 as builder
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:16.15.1-alpine3.16
WORKDIR /usr/app
COPY --from=builder /usr/app/build /usr/app/build
RUN npm install -g serve
EXPOSE 80
CMD ["serve", "-s", "-p", "80", "build"]