#!/usr/bin/bash
echo "开始打包代码..."
npm run build
echo "启动node服务..."
node server.js > stdout.txt 2> stderr.txt < /dev/null &
disown