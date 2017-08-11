define([], function() {
    'use strict';
    return {
        index: {
            path: '/',      
            moduleId: 'homepage' 
        },
        testrem: {
            path: '/testrem',      
            moduleId: 'testrem' 
        },
        qdtest: {
            path: '/qdtest',      
            moduleId: 'qdtest' 
        },
        grid:{
            path:'/grid',
            moduleId:'grid'
        },
        login:{
            path:'/login',
            moduleId:'login'
        },
        resetpsd:{
            path:'/resetpsd',
            moduleId:'resetpsd'
        },
        notFound: {
            path: '*',
            moduleId: 'homepage'
        }
    };
});