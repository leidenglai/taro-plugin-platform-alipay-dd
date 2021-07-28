'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pluginPlatformAlipay = require('@tarojs/plugin-platform-alipay');
var shared = require('@tarojs/shared');

const components = {
    // ======== 额外组件 ========
    OpenAvatar: {
        'userId': '',
        'openId': '',
        'nickName': '',
        'avatar': '',
        'size': shared.singleQuote('normal')
    }
};

const PACKAGE_NAME = '@tarojs/plugin-platform-alipay-dd';
class DD extends pluginPlatformAlipay.Alipay {
    /**
     * 1. setupTransaction - init
     * 2. setup
     * 3. setupTransaction - close
     * 4. buildTransaction - init
     * 5. build
     * 6. buildTransaction - close
     */
    constructor(ctx, config) {
        super(ctx, config);
        this.platform = 'dd';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
        this.setupTransaction.addWrapper({
            close: this.modifyTemplate
        });
    }
    /**
     * 增加组件或修改组件属性
     */
    modifyTemplate() {
        // 处理钉钉与支付宝的组件差异
        this.template.mergeComponents(this.ctx, components);
    }
}

var index = (ctx) => {
    ctx.registerPlatform({
        name: 'dd',
        useConfigName: 'mini',
        async fn({ config }) {
            const program = new DD(ctx, config);
            await program.start();
        }
    });
};

exports.default = index;
//# sourceMappingURL=index.js.map
