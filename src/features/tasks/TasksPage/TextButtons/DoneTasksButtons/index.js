import { useDispatch, useSelector } from "react-redux";
import {
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectIsEveryTaskHide,
  toggleHideDone,
  setAllDone
} from "../../../tasksSlice";
import { StyledButton, StyledDiv } from "../styled";

const DoneTasksButtons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskHide = useSelector(selectIsEveryTaskHide);
  const dispatch = useDispatch();

  if (areTasksEmpty)
    return null;

  return (
    <StyledDiv>
      <StyledButton
        onClick={() => dispatch(toggleHideDone())}
        disabled={isEveryTaskHide}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(setAllDone())}
        disabled={isEveryTaskDone}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledDiv>
  );
};
export default DoneTasksButtons;