import angular from 'angular';
import ExampleService from './ExampleService';

const ngApp = angular
  .module('flowDemo', [])
  .service('exampleService', ExampleService)
  .run(($log, exampleService: ExampleService) => {

    $log.info(exampleService.sampleMethod(20));

  });

export default ngApp;