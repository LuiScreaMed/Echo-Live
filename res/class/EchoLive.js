class EchoLive {
    constructor(echo, config) {
        this.echo = echo;
        this.config = config;
        this.data = undefined;
        this.hidden = false;
        this.antiFlood = false;
        this.timer = {
            messagesPolling: -1
        };
        this.eventStream;

        this.init();
    }

    init() {
        // 嵌套有点多了，这不好，要改
        if (this.config.echolive.sleep_enable) {
            document.addEventListener("visibilitychange", () => {
                this.hidden = document.visibilityState !== "visible";
            });
        }

        this.setEchoPrintSpeed(this.config.echo.print_speed);
    }

    /**
     * 发送消息
     * @param {Object} data 消息格式
     */
    send(data = {}) {
        if (this.hidden) return;
        if (this.antiFlood) {
            this.data = data;
            this.antiFlood = false;
            return;
        }
        if (typeof this.data === 'object' && JSON.stringify(data) === JSON.stringify(this.data)) return;
        if (this.echo.state != 'stop') this.echo.stop();
        this.data = data;
        $('#echo-live .name').text(data.username);
        this.echo.sendList(JSON.parse(JSON.stringify(data.messages)));
    }

    /**
     * 下一条对话
     */
    next() {
        if (this.hidden) return;
        this.echo.next();
    }

    /**
     * 更新配置
     * @param {*} config 新配置
     */
    updateConfig(config) {
        this.config = config;

        this.setEchoPrintSpeed(config.echo.print_speed);
        this.setThemeStyleUrl(`res/style/live-theme/${config.echolive.live_theme}.css`);
    }

    /**
     * 更改echo的打印速度
     * @param {number} 打印速度
     */
    setEchoPrintSpeed(printSpeed) {
        if (printSpeed != undefined) {
            this.echo.printSpeed = printSpeed;
            this.echo.printSpeedStart = printSpeed;
            this.echo.printSpeedChange = printSpeed;
        }
    }

    /**
     * 修改主题样式地址
     * @param {String} url 样式文件地址
     */
    setThemeStyleUrl(url) {
        $('#echo-live-theme').attr('href', url);
    }
}