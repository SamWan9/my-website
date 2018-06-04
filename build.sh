#!/usr/bin/bash
echo "开始打包代码..."
npm run build
echo "启动node服务..."
nohup node server.js 1>/dev/null 2>&1 &