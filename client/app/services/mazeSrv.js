export default class MazeSrv {

  resolveMaze() {
    // Build request params
    const {mazeX, mazeY, mazeTemplate} = this;
    const requestParams = {
      mazeX: '@mazeX',
      mazeY: '@mazeY',
      mazeTemplate: '@mazeTemplate'
    };

    const resource = $resource('service/maze/:mazeX/:mazeY/:mazeTemplate', requestParams);

    // Make a GET call to the server
    return resource.query().$promise;
  }
}
