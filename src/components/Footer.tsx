import { Todo } from '../types/Todo';
import { SelectOption } from '../types/Todo';

type Props = {
  filter: string;
  setFilter: (status: SelectOption) => void;
  todos: Todo[];
  onClearCompleted: () => void;
  activeTodos: number;
  nonActiveTodos: number;
};

export const Footer: React.FC<Props> = ({
  filter,
  setFilter,
  activeTodos,
  nonActiveTodos,
  onClearCompleted,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos} items left
      </span>
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={`filter__link ${filter === 'all' ? 'selected' : ''}`}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(SelectOption.All)}
        >
          All
        </a>
        <a
          href="#/active"
          className={`filter__link ${filter === 'active' ? 'selected' : ''}`}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(SelectOption.Active)}
        >
          Active
        </a>
        <a
          href="#/completed"
          className={`filter__link ${filter === 'completed' ? 'selected' : ''}`}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(SelectOption.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={onClearCompleted}
        disabled={nonActiveTodos === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
