if (Meteor.isClient) {
    Meteor.startup(function() {
        var lang = window.navigator.userLanguage || window.navigator.language;
        lang = lang.toLowerCase();
        T9n.setLanguage(lang);
    })
};

if (Meteor.isServer) {
    Meteor.startup(function() {

        // 微博
        ServiceConfiguration.configurations.upsert({
            service: "weibo"
        }, {
            $set: {
                clientId: "<your-app-id>",
                secret: "<your-app-secret>"
            }
        });

        // 微信
        ServiceConfiguration.configurations.remove({
            service: "wechat"
        });
        ServiceConfiguration.configurations.insert({
            service: "wechat",
            appId: "<your-app-id>",
            scope: 'basic',
            secret: "<your-app-secret>"
        });

        // QQ
        ServiceConfiguration.configurations.remove({
            service: "qq"
        });
        ServiceConfiguration.configurations.insert({
            service: "qq",
            clientId: "<your-client-id>",
            scope: 'get_user_info',
            secret: "<your-client-secret>"
        });

    })
};
