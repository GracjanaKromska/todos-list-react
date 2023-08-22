import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButtons } from "./styled";
import { selectEmptyTasks, selectEveryTaskDone, selectHideDone, setAllDone, toggleHideDone } from "../tasksSlice";

const Buttons = () => {
  const emptyTasks = useSelector(selectEmptyTasks);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <StyledButtons>
      {!emptyTasks && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={everyTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;