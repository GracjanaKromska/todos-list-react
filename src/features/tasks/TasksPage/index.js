import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function TasksPage() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
};

export default TasksPage;