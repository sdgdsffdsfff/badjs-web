/**
 * @info : LOG ACION
 * @author : coverguo
 * @date : 2014-12-16
 */

var LogService = require('../../service/LogService');

var LogAction = {

    getLogList : function (params,cb) {
        console.log('action-parmas：', params);
        for(var key in params){
            params['endDate'] -=0;
            params['startDate'] -=0;
            params['id'] -=0;

        }
        var ls = new LogService();
        ls.query(params,cb);
    }
};

module.exports = LogAction;

