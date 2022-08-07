import "./style.css";

const List = ({ tasks, hideDoneTasks }) => (
  <ul className="list">
    {tasks.map(task =>(
      <li
        key={task.id}
        className={`list__item${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
      >
        <button className="list__button">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__span ${task.done ? "list__span--done" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;