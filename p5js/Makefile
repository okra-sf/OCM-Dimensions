SRC = src-compressed-string.base64
ifeq ($(final),1)
  SRC = src-compressed-string-final.base64
endif
$(info SRC is $(SRC))

all: index.html

index.html: $(SRC) build.js page-structure.html
	node build.js $(SRC) >$@

src-compressed-string.base64: input/
	cat input/* | gzip -9 -c | base64 | tr -d '\n' >$@

src-compressed-string-final.base64: input/
	sed -i 's/https:\/\/ordinals.com\/cont/\/cont/g' input/*
	cat input/* | gzip -9 -c | base64 | tr -d '\n' >$@

clean:
	rm -f src-compressed-string.base64 src-compressed-string-final.base64 index.html
