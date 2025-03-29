const baseUrl = "http://localhost:3030/api/tasks";

const fetchTasks = () => {
    return fetch(baseUrl, { method: "GET", headers: { 'Content-Type': 'application/json; charset=utf-8' } }).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        throw new Error('Failed to get tasks')
    });
}

const addTask = newTask => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newTask),
    })
}

const toggleStatus = (text, done, taskId) => {
    return fetch(baseUrl+'/'+taskId, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ done: !done })
    })
}

const deleteTask = taskId => {
    return fetch(baseUrl+'/'+taskId, { method: "DELETE" })
        .then(resp => {
            if (resp.ok) {
                return fetchTasks()
            }
            throw new Error('Failed to delete task')
        })
}

module.exports = {
    fetchTasks,
    addTask,
    toggleStatus,
    deleteTask
}