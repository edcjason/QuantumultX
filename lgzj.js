/******************************
脚本名称：灵敢足迹 - 解锁 VIP (适用于 3.0.0 旧版本)

*******************************/

var body = JSON.parse($response.body);

if (body && body.data) {
    body.data.trialPeriod = false;
    body.data.vipType = 7;
    body.data.validVip = true;
    body.data.expireTime = 4102372800000;
    body.data.vipCount = 999999999;
}

$done({ body: JSON.stringify(body) });
