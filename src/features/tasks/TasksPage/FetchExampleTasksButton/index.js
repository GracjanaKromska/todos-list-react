import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import ExampleButton from "../ExampleButton";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <ExampleButton
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </ExampleButton>
    );
};