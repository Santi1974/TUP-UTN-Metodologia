import { useEffect } from "react";
import { Header } from "../ui/Header/Header";
import { ListTareas } from "../ui/ListTareas/ListTareas";
import { useTareas } from "../../hooks/useTareas";

export function TareaScreen() {
  const { getTareas } = useTareas();

  useEffect(() => {
    getTareas();
  }, []);

  return (
    <div>
      <Header />
      <ListTareas />
    </div>
  );
}
