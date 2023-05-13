FROM node:18 AS vue-build
WORKDIR /usr/src/app
COPY Adam-Website/ ./Adam-Website/
COPY MediaBucket/ ./MediaBucket/
WORKDIR /usr/src/app/Adam-Website/
RUN npm ci
RUN npm run build


FROM node:18 AS server-build
WORKDIR /root/
COPY --from=vue-build /usr/src/app/Adam-Website/dist ./Adam-Website/dist
COPY --from=vue-build /usr/src/app/MediaBucket/ ./MediaBucket/
COPY Node-Server/ ./Node-Server/
RUN cd Node-Server && npm ci
COPY Node-Server/index.js ./Node-Server/

EXPOSE 11000

CMD ["node", "./Node-Server/index.js"]