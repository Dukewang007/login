require.config({

    paths: {
        juicer:'libs/juicer',
        jquery: 'libs/jquery.min',     
        app:'libs/app',
        config:'libs/config',
        iscroll: 'libs/iscroll-probe',
        router: 'libs/router', 
        text: 'libs/text',
        mock:'libs/mock',
    },
    shim: {
        juicer: {
            exports: 'juicer'
        },
        iscroll: {
           exports: 'IScroll'
        }
    },
    waitSeconds: 15
})
require(['router', 'RouterConf'], function(router, config) {
      'use strict';
      //配置路由
      
      router
          .registerRoutes(config)
          .on('routeload', function(module, routeArguments) {
            var md =  new module(routeArguments);
          })
          .init();
});
