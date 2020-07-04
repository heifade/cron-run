# 安装

```sh
npm i cron-run -g
```

# 说明

cron-run -c /path/config.json

# config.json 说明

```json
[
  {
    "time": "0 * * * * *", // 触发时间 秒 分 时 日 月 星期。 参考：https://www.npmjs.com/package/node-cron
    "sh": "date" // 运行脚本 .sh 文件地址
  },
  {
    "time": "10 * * * * *",
    "sh": "date"
  }
]
```
