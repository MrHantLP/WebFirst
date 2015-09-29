angular.module('messages',['ui.router'])

.config(['$stateProvider',function config($stateProvider){
        $stateProvider.state('messages',{
            url: '/messages',
            views: {
                "main":{
                    controller: 'MessagesCtrl',
                    template: '<h1>Hello message!!!!!</h1>'
                }
            }
        })
    }])
.controller('MessageCtrl',function(){

    })

