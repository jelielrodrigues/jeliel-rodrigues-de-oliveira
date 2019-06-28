angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cardPio'
      2) Using $state.go programatically:
        $state.go('tabsController.cardPio');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2///page2
      /page1/tab3///page2
  */
  .state('tabsController.cardPio', {
    url: '///page2',
    views: {
      'tab2': {
        templateUrl: 'templates/cardPio.html',
        controller: 'cardPioCtrl'
      },
      'tab3': {
        templateUrl: 'templates/cardPio.html',
        controller: 'cardPioCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.perfil'
      2) Using $state.go programatically:
        $state.go('tabsController.perfil');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page3
      /page1/tab4/page3
  */
  .state('tabsController.perfil', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      },
      'tab4': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController.hOME', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/hOME.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page4')


});