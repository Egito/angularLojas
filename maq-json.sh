docker run -ti --name lojas-sql -w /backend -e PATH=$PATH:/backend/node_modules/.bin -v $HOME/lojas-angular/backend:/backend node:10.11.0-alpine /bin/sh
