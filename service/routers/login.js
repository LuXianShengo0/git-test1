const express = require('express');
//创建路由容器
const router = express.Router();
const request = require('../request');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// router.get('/', function (req, res) {
//     res.send(req.query)
// })

//登录服务
router.post('/', async (req, res) => {
    var body = req.body;
    let userExistsSql = `SELECT COUNT(*) userCount
    FROM LPB_USERS U
     WHERE U.USER_ACCOUNT = :USER_ACCOUNT
     AND U.PASSWORD = :PASSWORD`;
    let conditions = {
        "USER_ACCOUNT": body.USER_ACCOUNT,
        "PASSWORD": body.PASSWORD,
    };
    let outFormat = {
        
    };
    let userExistsData = await request(userExistsSql, conditions, outFormat);
    let rows = userExistsData.rows;
    if (rows[0].USERCOUNT == 0) {
        let result = { state: false, data: "用户名密码不正确！" };
        res.json(result);
    }

    let UserInfoSql = `SELECT 
    CAST(U.USER_ID AS NVARCHAR2(50)) AS USER_ID,
    U.USER_ACCOUNT,
    CAST(U.DEP_ID AS NVARCHAR2(50)) AS DEP_ID,
    U.USERNAME,
    D.DEP_NAME,
    D.ORG_TYPE
           FROM LPB_USERS U
           LEFT JOIN LPB_DEP D
           ON U.DEP_ID = D.DEP_ID
            WHERE U.USER_ACCOUNT = :USER_ACCOUNT
            AND U.PASSWORD = :PASSWORD`;
    let UserInfoData = await request(UserInfoSql, conditions, outFormat);
    res.json(UserInfoData.rows);
    
})

//把router导出
module.exports = router;