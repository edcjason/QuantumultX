/**
 * Flightradar24 VIP 解锁脚本（去混淆纯净版）
 * 原作者: By Anni
 */

let body = $response.body;

if (body) {
    // 构造完整的 Gold 顶级会员权限响应体
    let obj = {
        "status": "success",
        "userData": {
            "oAuthId": null,
            "idUser": 12345678,
            "dateExpires": 4099518079,
            "subscriptionKey": "Gold",
            "countryCode": null,
            "dateLastLogin": "2023-01-01 00:00:00",
            "oAuthType": null,
            "isActive": true,
            "hasConsented": true,
            "localeCode": "zh-CN",
            "name": "By Anni",
            "typeSource": "ios",
            "subscriptions": {
                "0": {
                    "dateExpires": 4099518079,
                    "sortOrder": 2,
                    "isOnTrial": true,
                    "sku": "gold_yearly",
                    "originalBillingPeriod": 365,
                    "typePlatform": "ios",
                    "typeStatus": "active",
                    "name": "Gold",
                    "typeSubscription": "Gold"
                }
            },
            "tokenLogin": "token_login_placeholder_string",
            "accessToken": "access_token_placeholder_string",
            "publicKey": null,
            "identity": "By Anni",
            "isLoggedin": true,
            "accountType": "Gold",
            "isAnonymousAccount": true,
            "hasPassword": false,
            "features": {
                "map.filters.unblocking": "enabled",
                "app.ios": "enabled",
                "map.filters.max": 25,
                "user.fleets.max.aircraft": 1000,
                "map.info.flight.ground-speed": "enabled",
                "map.info.flight.track": "enabled",
                "map.layer.waypoints": "enabled",
                "map.info.aircraft.type": "enabled",
                "history.playback.flight.days": 365,
                "history.playback.global.days": 365,
                "map.data.delaystats": "enabled",
                "user.fleets.max": 3,
                "map.data.flarm": "enabled",
                "map.filters.fleets": "enabled",
                "map.layer.trail.tooltip": "enabled",
                "support.platform": "ios",
                "map.view.3d.basic": 3,
                "map.info.aircraft.msn": "enabled",
                "map.data.satellite": "enabled",
                "support.level": "gold",
                "map.view.radar": "enabled",
                "history.flight.days": 365,
                "map.view.multi": "enabled",
                "map.info.aircraft.code": "enabled",
                "map.widgets.last_clicked_flights": "enabled",
                "map.info.flight.calibrated-altitude": "enabled",
                "user.alerts.max": 25,
                "map.info.airport.arrivals": "enabled",
                "map.view.delay": "enabled",
                "map.widgets.bookmarks.max": 25,
                "user.sessions.max": 3,
                "map.info.airport.departures": "enabled",
                "map.info.aircraft": "full",
                "map.data.ads-b": "enabled",
                "history.playback.days": 365,
                "map.data.mlat": "enabled",
                "map.filters.receivers": "enabled",
                "map.view.3d": "enabled",
                "map.info.flight.position": "enabled",
                "adverts": "disabled",
                "map.view.fullscreen": "enabled",
                "user.users": 3,
                "map.layer.weather.volcano": "enabled",
                "app.android": "enabled",
                "map.data.faa": "enabled",
                "usage.rights": "personal",
                "map.hide_header": "enabled",
                "map.search": "enabled",
                "map.timeout.mins": -1,
                "map.info.flight.squawk": "enabled",
                "map.layer.weather": "enabled",
                "map.info.flight": "enhanced",
                "history.aircraft.days": 365,
                "map.filters.categories": "enabled",
                "map.sidemenu.photo.hide": "enabled",
                "map.info.aircraft.registration": "enabled",
                "map.tracking.live": "enabled",
                "history.flight.kml": 25,
                "map.info.flight.vertical-speed": "enabled",
                "map.widgets.bookmarks": "enabled",
                "map.labels.rows": 4,
                "map.status.flight": "enabled",
                "map.info.aircraft.age": "enabled",
                "map.info.airport.onground.hours": 720,
                "map.view.fleet.onground": 1,
                "user.bookmarks.max": 25
            },
            "oAuth": null
        },
        "message": "Success",
        "msg": "Success",
        "response_code": 100,
        "success": true,
        "token": "token_placeholder"
    };

    body = JSON.stringify(obj);
}

// 纯本地修改，绝无外联
$done({ body });
