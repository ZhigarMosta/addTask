"use client";
import { Button } from "@mui/material";
import { useEvent, useUnit } from "effector-react";
import React from "react";
import "./Form.scss";
import { $task, addTask } from "@/stores/task/task";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addTack(data);
  };
  const addTack = useEvent(addTask);
  const tack = useUnit($task);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="task">Задача</h1>
      <p className="task_name">Название задачи</p>

      <input className="input" {...register("name", { required: true })} />

      {errors.name && (
        <span className="error">Вы не заполнили название задачи</span>
      )}

      <p className="task_name">Описание</p>
      <input className="input" {...register("deck", { required: true })} />

      {errors.deck && (
        <span className="error">Вы не заполнили описание задачи</span>
      )}

      <Button variant="contained" className="btn" type="submit">
        Отправить
      </Button>
    </form>
  );
};
export default Form;
