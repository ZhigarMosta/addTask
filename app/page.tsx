"use client";
import React from "react";
import "./page.scss";
import Form from "@/components/Form/Form";
import Creator from "@/components/Сreator/Сreator";
import Card from "@/components/Card/Card";
import { $task } from "@/stores/task/task";
import { useUnit } from "effector-react";
export default function Home() {
  const tack = useUnit($task);
  return (
    <div className="wrapper_container">
      <div className="container">
        <div className="left_side">
          <Form />
          <Creator />
        </div>
        <div className="right_side">
          <div className="wrapper_card">
            {tack.map((el, i) => (
              <Card key={i} name={el.name} deck={el.deck} />//передаю пропсом в карту
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
