import ko from 'knockout';
import homeTemplate from 'text!./todo.html';

class Model {
    constructor(route) {
        console.log(route)
        this.route = route.router.currentRoute()
        this.taskName = ko.observable('')
        this.tasks = ko.observableArray()
        this.baseTask = {
            title: '',
            done: false
        }
    }

    addTask = () => {
        if (this.taskName() !== ''){
            var newTask = Object.assign({}, this.baseTask)
            newTask.title = this.taskName()
            this.taskName('')
            this.tasks.push(newTask)
        }
    }

    removeTask = (data, event) => {
        var index = parseInt(event.currentTarget.id)
        var tasks = this.tasks()
        var removed = tasks.splice(index,1)
        this.tasks(tasks)
    }
}

export default { viewModel: Model, template: homeTemplate };
