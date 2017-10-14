import './app.scss';

export class MazeMainController {

  constructor() {
    "ngInject";
    this.mazeTask = {};
    this.mazeSolution = [];
  }

  onResolve(mazeTask) {
    if (!mazeTask) return;
  }
}

export default {
  template: `
    <section>
      <section class="header">
        <h1>Maze</h1>
        <header class="header-input">

          <maze-start-input
            placeholderX="Starting point X"
            placeholderYTemplate="Starting point Y"
            placeholderTemplate="Starting template"
            on-resolve="$ctrl.onResolve(mazeTask)">
          </maze-start-input>

        </header>
      </section>

      <section class="main">
        <div>
          <maze-resolved ng-model="$ctrl.mazeSolution"></maze-resolved>
        </div>
      </section>
    </section>
  `,
  controller: MazeMainController
};
