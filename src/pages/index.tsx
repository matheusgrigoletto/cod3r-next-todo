import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

import data from "~data/mock";
import TaskList from "~models/TaskList";
import Task from "~models/Task";
import Header from "~components/Header/Header";
import List from "~components/List/List";
import Form from "~components/Form/Form";

const Home: NextPage = () => {
  const [tasks, setTasks] = React.useState<TaskList>(data);

  const commonProps = {
    taskList: tasks,
    onChange: (taskList: TaskList) => {
      setTasks(taskList);
    },
  };

  const onCreateHandler = (newTask: Task) => {
    setTasks(tasks.addTask(newTask));
  };

  return (
    <>
      <Head>
        <title>TO-DO List</title>
        <meta name="description" content="A simple TO-DO List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <article>
          <Header {...commonProps} />
          <List {...commonProps} />
        </article>
        <footer>
          <Form onCreate={onCreateHandler} />
        </footer>
      </main>
    </>
  );
};

export default Home;
