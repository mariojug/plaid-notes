
public: build
	mkdir temp; \
	cd public; \
	cp electron.js ../temp; \
	cp favicon.ico ../temp; \
	cp index.html ../temp; \
	cd ..; \
	rm -rf public; \
	mv build public; \
	cd public; \
	cp ../temp/* .; \
	cd ..; \
	rm -rf temp; \

build: clean
	yarn build

clean:
	rm -rf build