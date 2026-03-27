import { useState } from 'react';

interface Props {
    tasks: string[];
    heading: string;
}

const TaskComponent = (prop: Props) => {
    const [titleName] = useState('todays tasks');

    return (
        <>
            <h1>{prop.heading}</h1>
            {prop.tasks.length === 0 && <p>You don't have any tasks</p>}
            <ul className="group-list">
                {prop.tasks.map((task) => (
                    <li key={task} className="list-group-item">
                        {task}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskComponent;