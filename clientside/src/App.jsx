import React from 'react';
import TodoList from './TodoList'
import ThemeButton from './themeButton'


class App extends React.Component {
    componentDidMount() {
        const toggleBtn = document.querySelector("#switch-rounded");
        if (sessionStorage.getItem("theme") === 'dark') {
            document.documentElement.setAttribute("theme", "dark");
            toggleBtn.checked = true;
        }

        toggleBtn.addEventListener("click", function() {
            if(document.documentElement.hasAttribute("theme")){
                sessionStorage.setItem("theme", 'light')
                document.documentElement.removeAttribute("theme");
        } else {
                sessionStorage.setItem("theme", 'dark')
                document.documentElement.setAttribute("theme", "dark");
            }
        });
    }


    render() {
        return (
            <>
                <ThemeButton />
                <TodoList />
            </>
        )
    }

}

export default App;