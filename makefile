public: build
	setopt extendedglob;	\
	cd public; \
	rm -rf -- ^electron.js -- ^favicon.ico -- ^index.html; \
	cd ..; \
	mv -f build/* public/

build: clean
	yarn build

clean:
	rm -rf build