import * as ko from 'knockout';
import { localStorageItem } from './config/constants'
import TodoViewModel from './viewmodels/todo';
import './extends/handlers'
import './styles/base.css'
import './styles/index.css'

const defaultTodos = [
    { title: 'Made with Knockout.' },
    { title: 'Written in TypeScript.' },
    { title: 'Python provides the time.' },
]

const stringTodos = window.localStorage.getItem(localStorageItem) || JSON.stringify(defaultTodos)
const todos = ko.utils.parseJson(stringTodos)

ko.applyBindings(new TodoViewModel(todos))

const alertTime = async () => {
    const url = `https://${location.host}/api/time.py`
    const response = await fetch(url)
    const text = await response.text()
    alert('Python time: ' + text)
}

window['logPythonTime'] = alertTime
alertTime()