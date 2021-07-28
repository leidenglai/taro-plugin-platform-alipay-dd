import { processApis, singleQuote, mergeReconciler, mergeInternalComponents } from '@tarojs/shared';
import { noPromiseApis, needPromiseApis, handleSyncApis, transformMeta, modifyAsyncResult, request, hostConfig, components as components$1 } from '@tarojs/plugin-platform-alipay/dist/runtime-utils';

const syncApis = new Set([
    'previewFileInDingTalk',
]);
const asyncApis = new Set([
    'editPicture',
    'enableLeaveConfirm',
    'disableLeaveConfirm',
    'complexChoose',
    'chooseDepartments',
    'createGroupChat',
    'choosePhonebook',
    'chooseExternalUsers',
    'editExternalUser',
    'chooseUserFromList',
    'createDing',
    'callUsers',
    'showCallMenu',
    'checkBizCall',
    'pay',
    'saveFileToDingTalk',
    'uploadAttachmentToDingTalk',
    'chooseDingTalkDir',
    'chooseChatForNormalMsg',
    'chooseChat',
    'openChatByChatId',
    'openChatByUserId'
]);

function initNativeApi(taro) {
    processApis(taro, dd, {
        noPromiseApis: new Set([...noPromiseApis, ...syncApis]),
        needPromiseApis: new Set([...needPromiseApis, ...asyncApis]),
        handleSyncApis,
        transformMeta,
        modifyAsyncResult,
        request
    });
    taro.SDKVersion = dd.SDKVersion;
}

const components = {
    // ======== 额外组件 ========
    OpenAvatar: {
        'userId': '',
        'openId': '',
        'nickName': '',
        'avatar': '',
        'size': singleQuote('normal')
    }
};

hostConfig.initNativeApi = initNativeApi;
mergeReconciler(hostConfig);
mergeInternalComponents(components$1);
mergeInternalComponents(components);
//# sourceMappingURL=runtime.js.map
