all:
	babel lib --out-dir dist
	lessc lib/form.less > dist/form.css
	webpack -p
clean:
	rm dist/*
	rm example/bundle*
