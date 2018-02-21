build:
	@./node_modules/.bin/webpack --config ./webpack.config.js

run:
	@node server.js

rebuild: build run

run-dev: #runs dev mode for backend and frontend
	@./node_modules/.bin/nodemon -e ts,tsx --ignore ./node_modules --ignore ./dist --exec "make rebuild"

dev: #runs dev mode for frontend only
	@./node_modules/.bin/webpack-dev-server webpack.config.js
