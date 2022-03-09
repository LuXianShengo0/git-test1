const dbconfig = require('../dbConfig');
//加载oracledb
const oracledb = require('oracledb');

let request = async (sql, conditions, outFormat) => {
    let outFormatDefault = {
        // resultSet: true,
        //outFormat: oracledb.OUT_FORMAT_ARRAY,//获取每一行作为列值的数组
        outFormat: oracledb.OUT_FORMAT_OBJECT//获取每一行作为一个对象
    };
    let pool;
    try {
        pool = await oracledb.createPool(dbconfig);
        let connection;
        try {
            connection = await pool.getConnection();
            const result = await connection.execute(sql, conditions, outFormat);
            // console.log(JSON.stringify(result));
            return result;
        } catch (err) {
            throw (err);
        } finally {
            if (connection) {
                try {
                    await connection.close(); // Put the connection back in the pool
                } catch (err) {
                    throw (err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await pool.close();
    }
}

module.exports = request