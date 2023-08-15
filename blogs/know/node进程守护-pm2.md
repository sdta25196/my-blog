## 简介

  pm2 node的生产环境管理器（管理开发环境也行啊），用来守护node启动的服务
  pm2 有两种模式 fork（创建一个进程） 和 class（集群模式，IO的多路复用）

**当前版本号5.1.2**

## 安装
  * npm install pm2
  * yarn add pm2

## 基础命令
  * `pm2 log --raw --lines 100 0` pm2日志，查看原始日志, 打印100行，编号为0的进程
  * `pm2 stop `  停止 需要制定服务id
  * `pm2 start myServer.js` pm2 启动一个服务文件 
    - `pm2 start myServer.js -i 0`  开启负载均衡， `-i 0` 代表开启等于cpu数量的服务
  * `pm2 reload`   重启 需要制定服务id
  * `pm2 --watch`  监听，如果文件改变就重启
  * `pm2 list`     查看列表
  * `pm2 delete`  删除 需要制定服务id
  * `pm2 monit`  可查看所有任务的守护情况
 
## pm2 配置文件
pm2可使用`yml`、`json`、`js` 来配置启动项,`pm2 init` 初始化一个`ecosystem.config.js`文件,可使用 `pm2 start ecosystem.config.js` 来启动守护进程

```js
  module.exports = {
    apps : [{
      script: 'index.js',
      watch: '.'
    }, {
      script: './service-worker/',
      watch: ['./service-worker']
    }],

    deploy : {
      production : {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/master',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      }
    }
  };
```

### 配置项
`apps`： json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用；

`name`：应用程序名称；

`cwd`：应用程序所在的目录；

`script`：应用程序的脚本路径；

`log_date_format`： 指定日志日期格式，如YYYY-MM-DD HH：mm：ss；

`error_file`：自定义应用程序的错误日志文件，代码错误可在此文件查找；

`out_file`：自定义应用程序日志文件，如应用打印大量的标准输出，会导致pm2日志过大；

`pid_file`：自定义应用程序的pid文件；

`interpreter`：指定的脚本解释器；

`interpreter_args`：传递给解释器的参数；

`instances`： 应用启动实例个数，仅在cluster模式有效，默认为fork；

`min_uptime`：最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量；

`max_restarts`：设置应用程序异常退出重启的次数，默认15次（从0开始计数）；

`autorestart` ：默认为true, 发生异常的情况下自动重启；

`cron_restart`：定时启动，解决重启能解决的问题；

`max_memory_restart`：最大内存限制数，超出自动重启；

`watch`：是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。

`ignore_watch`：忽略监听的文件夹，支持正则表达式；

`merge_logs`： 设置追加日志而不是新建日志；

`exec_interpreter`：应用程序的脚本类型，默认是nodejs；

`exec_mode`：应用程序启动模式，支持fork和cluster模式，默认是fork；

`autorestart`：启用/禁用应用程序崩溃或退出时自动重启；

`vizion`：启用/禁用vizion特性(版本控制)；

`env`：环境变量，object类型；

`force`：默认false，如果true，可以重复启动一个脚本。pm2不建议这么做；

`restart_delay`：异常重启情况下，延时重启时间；

## pm2 + nginx
  pm2 启动一个服务在3000端口，nginx端口转发至pm2启动的服务即可

```vim
  # nginx配置
  server {
        listen       80;
        server_name  127.0.0.1; # 公网ip
        location / {
            proxy_pass  http://127.0.0.1:3000;
            proxy_set_header Host $proxy_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            # root   /home/ty/7.myblog;
            # index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```
## pm2.io：监控和诊断 Web 界面
```js
  pm2 plus
```
会开启一个基于 Web 的仪表板，带有诊断系统的跨服务器

## 更多
  * [PM2 文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
  * [PM2 集群模式文档](https://pm2.keymetrics.io/docs/usage/cluster-mode/)