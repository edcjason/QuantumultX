/*
 * 鲍鱼盒子18+ (Loon & QX 双兼容版)
 */

const NEN_T_OKEN = "a86fb5cd5c9ac9a26d2b81475e53t320b56d40";

let headers = $request.headers;

// 统一将 Authorization 标头替换为共享 Token
for (let key in headers) {
    if (key.toLowerCase() === "authorization") {
        headers[key] = `bearer ${NEN_T_OKEN}`;
    }
}

// 兼容 Loon：同时显式返回 url 和 headers，防止 Query 参数缺失
$done({
    url: $request.url,
    headers: headers
});
