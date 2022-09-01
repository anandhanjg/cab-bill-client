import Component from '@glimmer/component';
export default class DTableComponent extends Component {
  get visibleAction() {
    return this.args.onEdit || this.args.onDelete || this.args.onView;
  }

  get tdColsSpan() {
    return this.args.headers.length + 1;
  }
}
