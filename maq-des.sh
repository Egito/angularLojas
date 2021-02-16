docker run -ti --name lojas-ds -w /frontend -e PATH=$PATH:/frontend/node_modules/.bin -v $HOME/lojas-angular/frontend:/frontend node:10.11.0-alpine /bin/sh
