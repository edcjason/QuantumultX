/*
 * 汽水音乐 JSON 响应体净化脚本 (QX 专用版)
 */

if (typeof $response !== 'undefined' && $response.body) {
    let url = $request.url;
    let body;

    try {
        body = JSON.parse($response.body);
        let modified = false;

        // 1. DNS 与 HttpDNS 域名调度净化
        if (/\/get_domains\/v\d\//.test(url)) {
            if (body.data) {
                body.data.opaque_data_enabled = 0;
                body.data.ttnet_http_dns_enabled = 0;
                body.data.ttnet_quic_enabled = 0;
                body.data.ttnet_tt_http_dns = 0;
                if (Array.isArray(body.data.ttnet_dispatch_actions)) {
                    body.data.ttnet_dispatch_actions = body.data.ttnet_dispatch_actions.filter(
                        item => item.action !== "dispatch" && item.action !== "tc"
                    );
                }
                modified = true;
            }
        }

        // 2. 删除“我的”页面激励广告横幅
        if (/\/luna\/me\?/.test(url)) {
            if (body.reward_ad_banner) {
                delete body.reward_ad_banner;
                modified = true;
            }
        }

        // 3. 歌曲列表/Song-Tab 过滤视频混合类型
        if (/\/luna\/feed\/song-tab\?/.test(url)) {
            if (Array.isArray(body.items)) {
                const lenBefore = body.items.length;
                body.items = body.items.filter(item => item.type !== "video_track_mix");
                if (body.items.length !== lenBefore) modified = true;
            }
        }

        // 4. 卡片列表去除预览引导与优先展示项
        if (/\/luna\/card\?/.test(url)) {
            if (body.preview_guide) {
                delete body.preview_guide;
                modified = true;
            }
            if (Array.isArray(body.card_items)) {
                const lenBefore = body.card_items.length;
                body.card_items = body.card_items.filter(item => !("priority_display" in item));
                if (body.card_items.length !== lenBefore) modified = true;
            }
        }

        // 5. 更多面板过滤关联视频
        if (/\/luna\/more-panel\?/.test(url)) {
            if (Array.isArray(body.blocks)) {
                const lenBefore = body.blocks.length;
                body.blocks = body.blocks.filter(item => item.type !== "related_video");
                if (body.blocks.length !== lenBefore) modified = true;
            }
        }

        // 6. 最近播放中过滤视频流
        if (/\/luna\/me\/recently-played-media\?/.test(url)) {
            if (Array.isArray(body.media)) {
                const lenBefore = body.media.length;
                body.media = body.media.filter(item => {
                    if (item && typeof item === 'object' && 'type' in item) {
                        return item.type !== 'video';
                    }
                    return true;
                });
                if (body.media.length !== lenBefore) modified = true;
            }
        }

        if (modified) {
            $done({ body: JSON.stringify(body) });
        } else {
            $done({});
        }
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
