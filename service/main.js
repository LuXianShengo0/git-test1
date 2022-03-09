const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const login = require('./routers/login');//登录

const app = express();
const port = 3000;

//开放public资源
// app.use('/public/', express.static(path.join(__dirname, 'public')));
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')));
//app.use('/request/', express.static(path.join(__dirname, 'request')));

//设置视图引擎
// app.set('views', path.join(__dirname, 'views'));

//设置art-template模板格式
// app.engine('html', require('express-art-template'));

// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//把路由容器挂载到APP服务中

app.use('/login', login);

//配置404中间件
//app.use(function (err, req, res) {
    //res.json(err);
//});

//配置错误处理中间件
app.use(function (err, req, res, next) {
    //res.status(500).json(err.message);
    res.json(err);
});

app.listen(port, () => {
  console.log(`running...`)
})