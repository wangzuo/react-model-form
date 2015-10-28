all:
	babel lib --out-dir dist
	webpack -p
clean:
	rm -rf dist/*
	rm example/bundle*
