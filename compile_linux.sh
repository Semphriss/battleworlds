#!/bin/bash

echo "'use strict';" > battleworlds.js
find src/*/** -name "*.js" | xargs cat >> battleworlds.js
cat src/main.js >> battleworlds.js

# xdg-open index.html
