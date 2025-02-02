// ===== Echo-Live 配置文件 ==============================================================
// * 这里是配置文件，请不要删除任何项目。
// * 建议您使用 VSCode 等专业文本编辑器，Windows 的记事本没有语法提示，甚至还会出现编码问题。
// * 配置文件保存修改后，请刷新网页。
// * 英文冒号 “:” 左边的内容为配置名称，请不要动它。
// * 英文冒号 “:” 右边的内容为配置值，请根据需要修改。
// * 最右边的英文逗号 “,” 为每一项配置的分隔符。
// * 部分类似于开关的配置：false 为禁用，true 为启用。
// * “//” 开头的内容是注释，修改注释不会有任何影响，除非您把 “//” 删了并且还留着注释内容。
// ======================================================================================

const configDefault = {
    // Echo 相关配置
    echo: {
        // 滚动速度，每个字符打印循环的延迟时间（毫秒），最小值为 4
        print_speed: 30,
    },

    // Echo-Live 相关配置
    echolive: {
        // == 广播 ==
        // * 推荐方案，基于网页之间的通信技术传递消息。

        // 启用广播，可通过编辑器直接发送消息，启用此项将禁用消息轮询
        broadcast_enable: false,
        // 广播频道，如果您不知道这是什么请不要动它
        broadcast_channel: 'sheep-realms:echolive',
        // 启用 WebSocket
        // * 如果没人要求您这么做，请不要动它。
        // * 广播模式下启用 WebSocket 可连接至服务器以从第三方软件获取消息。
        // * 可从服务器接收的消息和广播消息一致，发送的消息须使用类似于 JSON.stringify 的方法序列化。
        // * 详见：https://sheep-realms.github.io/Echo-Live-Doc/dev/broadcast/
        websocket_enable: false,
        // WebSocket 连接地址
        websocket_url: 'ws://127.0.0.1:3000',
        // 启用实验性 API
        // * 实验性 API 包含了一些危险操作，实现一些特殊功能可能是必要的，但如果使用不当可能会造成严重后果。
        // * 请开发者注意，如果您提供的产品需要启用此实验性 API，请务必说明您不得不这么做的原因。
        // * 请用户注意，如果您使用的第三方软件要求您启用实验性 API 而未说明理由，非常不推荐您照做。
        experimental_api_enable: false,


        // == 消息轮询 ==
        // * 备选方案，定时监听 start.js 的内容更改。

        // 启用消息轮询，无需手动刷新，关闭则使用旧版手动操作
        messages_polling_enable: false,
        // 消息轮询间隔（毫秒），值越小响应越快，性能消耗越高
        messages_polling_tick: 250,


        // 启用休眠机制：当页面不可见时休眠以防止计时器失效所引发的灾难性演出
        // * 特别强调：如果您不了解这是什么，请不要关闭它。
        // ** 如果您只是想方便在浏览器中预览而临时关闭它，请一定不要忘记打开。
        sleep_enable: true,


        // == 打字音效 ==
        // * 每次打印字符所播放的音效。

        // 启用打字音效
        print_audio_enable: false,
        // 音效名称（详见 res/script/sounds.js）
        print_audio_name: 'typewriter_loop',
        // 音效音量，1 为最大
        print_audio_volume: 0.5,
        // 音效播放速度，1 为原速
        print_audio_rate: 1,


        // == 新对话入场音效 ==
        // * 打印新对话时播放的音效。

        // 启用新对话入场音效
        next_audio_enable: false,
        // 音效名称（详见 res/script/sounds.js）
        next_audio_name: 'enter',
        // 音效音量，1 为最大
        next_audio_volume: 0.5,
        // 音效播放速度，1 为原速
        next_audio_rate: 1,

        // == 未使用配置 ==
        // * 以下配置是为未来的新功能开发占坑的，目前没有作用。
        // * 二次开发请注意：如果这些配置内容不符合您的预期，请不要使用这些配置名，以防止冲突。
        // 主题
        live_theme: 'vanilla',
        next_effect_name: 'none',
        next_effect_duration: 0,
        print_effect_name: 'none',
        print_effect_duration: 0,
        print_start_effect_name: 'none',
        print_start_effect_duration: 0,
        print_end_effect_name: 'none',
        print_end_effect_duration: 0,
    },

    // 编辑器相关配置
    editor: {
        // == 标签页 ==
        // * 隐藏标签页并不会真正关闭这些功能，隐藏的标签页仍可以通过快捷键或跳转机制调出。
        // * 关于标签页切换快捷键请见标签上的悬停提示。
        // * 日志是排查错误和发现重要问题的关键功能，不要隐藏日志。

        // 显示配置标签页
        tabpage_config_enable: true,
        // 显示输出标签页
        tabpage_output_enable: false,


        // 显示对话框状态仪表板
        // * 仪表板可以显示所有对话框的状态，绿色为激活，红色为休眠，灰色则表示没有对话框加入频道。
        // * 如果您添加了多个对话框，建议您启用此项。
        // * 如果您是红绿色盲，请在下方无障碍相关配置中启用红绿色盲。
        // ** 启用后，蓝色填充为激活，蓝色边框为休眠。
        client_state_panel_enable: false,


        // == 表单预填充 ==
        // * 这些值会在页面初始化时被自动填充进表单中。

        // 初始说话人
        username_init: '',
        // 在输出内容前插入的内容
        output_before: '',
        // 启用上述功能，0 为禁用，1 为启用
        ontput_before_enable: 1,
        // 在输出内容后插入的内容
        output_after: '',
        // 启用上述功能，0 为禁用，1 为启用
        ontput_after_enable: 1,
    },

    // tauri后端服务器相关配置
    server: {
        // 端口号
        port: 4388
    },

    // 无障碍相关配置
    // * 编辑器支持键盘访问。
    accessible: {
        // 高对比度
        high_contrast: false,
        // 红绿色盲
        drotanopia_and_deuteranopia: false,
    },

    // == 未使用配置 ==
    // * 以下配置是为未来的新功能开发占坑的，目前没有作用。
    // * 二次开发请注意：如果这些配置内容不符合您的预期，请不要使用这些配置名，以防止冲突。
    history: {},
    selector: {},
    character: {},
};

// ===== 这里是配置文件的末尾 =============================================================
// * 这个文件大概是这里所有代码文件中最友好的一个文件了。
// * 光鲜亮丽的外表往往包装着一坨屎山。
// ======================================================================================