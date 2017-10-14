import angular from 'angular';
import resource from 'angular-resource';
import Components from './components/components';
import MazeMainController from './app.component';
import 'normalize.css';

angular.module('app', [
    resource,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', MazeMainController);
