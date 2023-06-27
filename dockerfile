FROM node


COPY [".", "/user"]

WORKDIR "/user"

RUN yarn install

EXPOSE 3000

CMD ["node", "./src/index.js"]
