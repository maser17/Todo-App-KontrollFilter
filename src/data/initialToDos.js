import { v4 as uuidv4 } from "uuid";

export const initialTodos = [
  {
    title: "Lernen",
    done: false,
    id: uuidv4(),
    category: "code"
  },
  {
    title: "Einkaufen",
    done: false,
    id: uuidv4(),
    category: "home"
  },
  {
    title: "Putzen",
    done: false,
    id: uuidv4(),
    category: "home"
  },
];