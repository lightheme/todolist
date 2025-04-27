const fetchTasks = () => {
    const ls = { ...localStorage };
    const tasks = Object.keys(ls).map(currentItem => {
        const item = JSON.parse(localStorage.getItem(currentItem));
        return {_id: currentItem, text: item.text, done: item.done };
    });
    return new Promise((resolve, reject)=>{
        resolve(tasks);
    });
}

const addTask = newTask => {
    localStorage.setItem(localStorage.length, JSON.stringify(newTask))

    return new Promise((resolve, reject)=>{
        resolve({ok: true});
    });
}

const toggleStatus = (text, done, taskId) => {
    localStorage.setItem(taskId, JSON.stringify( {
        text: text,
        done: !done
    } ));
    console.log(JSON.stringify( {
                text: text,
                done: !done
            }));
    return new Promise((resolve, reject)=>{
        resolve({ok: true});
    });
}

const deleteTask = taskId => {
    localStorage.removeItem(taskId)

    return fetchTasks();
}

module.exports = {
    fetchTasks,
    addTask,
    toggleStatus,
    deleteTask
}