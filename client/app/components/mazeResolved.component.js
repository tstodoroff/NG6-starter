import MazeSrv from '../services/mazeSrv';

class MazeResolved {
  constructor() {
    this.mazeResult = [];
  }

  getResult() {
    MazeSrv.resolveMaze().then(
        (response) => {
          this.mazeResult = formatResult(response);
          console.log(["Maze result resolved: ", this.mazeResult]);
        },
        (reason) => {
          console.error(["Error resolving maze result, reason:	", reason]);
        });
  }

  formatResult(rawResult) {
    // TODO: implement me
    return rawResult;
  }
}

export default {
  bindings: {
    mazeResult: '=',
  },
  template: `
    <span>
      {{vm.mazeResult}}
    </span>
  `,
  controller: MazeResolved,
  controllerAs: 'vm'
}
