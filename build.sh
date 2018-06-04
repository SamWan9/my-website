#!/usr/bin/bash
echo "开始打包代码..."
npm run build
echo "启动node服务..."
# 先杀掉原先的node进程，再启动新的node服务
ps -A | grep node | awk '{print $1}' | xargs kill -9
nohup node server.js 1>/dev/null 2>&1 &