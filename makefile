build:
	@npm install
	@./node_modules/.bin/webpack --config ./webpack.config.js

dev: #runs dev mode for frontend only
	@./node_modules/.bin/webpack-dev-server webpack.config.js

run:
	@node server.js
