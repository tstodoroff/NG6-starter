import '../../app.scss';

class MazeInputController {
  constructor() {
    this.startX = this.mazeTask.startX || '';
    this.startY = this.mazeTask.startY || '';
    this.startTemplate = this.mazeTask.startTemplate || '';
  }

  resolve() {
    this.onResolve({
      mazeTask: this.mazeTask
    });
  }
}

export default {
  bindings: {
    placeholderX: '@',
    placeholderY: '@',
    placeholderTemplate: '@',
    onResolve: '&'
  },
  template: `
    <form ng-submit="vm.resolve()">
      <input
         type="text"
         name="startX"
         ng-model="vm.startX"
         placeholder="{{vm.placeholderX}}" />

      <input
          type="text"
          name="startY"
          ng-model="vm.startY"
          placeholder="{{vm.placeholderY}}" />

      <textarea
           name="startTemplate"
           ng-model="vm.startTemplate"
           placeholder="{{vm.placeholderTemplate}}" />

      <button
          type="submit"
          id="resolveMaze"
          value="Resolve"
      >
          <span>Resolve</span>
      </button>
    </form>
  `,
  controller: MazeInputController,
  controllerAs: 'vm'
}
