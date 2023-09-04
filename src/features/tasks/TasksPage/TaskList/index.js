import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveButton, StyledLink } from "./styled";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { toTask } from "../../../../routes";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledLink>
          </Content>
          <RemoveButton
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </RemoveButton>
        </Item>
      ))}
    </List>
  )
};

export default TasksList;