import angular from 'angular';

import mazeInput from './mazeInput/mazeInput';
import mazeResolved from './mazeResolved.component';

export default angular
  .module('app', [])
  .component('mazeInput', mazeInput)
  .component('mazeResolved', mazeResolved);
