import { useState } from 'react';
import { TaskData } from '../task';

const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  date: '',
  completed: false,
};

interface FormProps {
  onSubmit: (task: TaskData) => void;
}

export const Form = (props: FormProps) => {
  const { onSubmit } = props;

  const [task, setTask] = useState<TaskData>(defaultData);

  const setDefaultData = () => setTask(defaultData);

  return (
    <div className="bg-white shadow-lg w-9/12 rounded-lg p-3">
      <input
        value={task.title}
        placeholder="Titulo de tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        value={task.description}
        placeholder="Descripcion de la tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <div className='space-x-2'>
        <input
          value={task.assignedTo}
          placeholder="Persona Asignada.."
          className="w-1/2"
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        />
        <input
          value={task.date}
          type="date"
          className="w-1/3"
          onChange={(e) => setTask({ ...task, date: e.target.value })}
        />
      </div>
      

  <div className="flex justify-end pt-5 space-x-2">
    <button
      className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md"
      onClick={setDefaultData}
    >
      Cancelar
    </button>
    <button
      className="bg-violet-700 rounded-md text-white py-1 px-4"
      onClick={() => {
        if (!task.title || !task.assignedTo || !task.date) return;

        onSubmit(task);
        setDefaultData();
      }}
    >
      Guardar
    </button>
  </div>
      
      
  </div>

    
  );
};
