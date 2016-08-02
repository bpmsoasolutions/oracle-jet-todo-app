import ko from 'knockout';

export let routes = [{
    url: '/',
    container: 'todo-list',
    name: 'Todo List',
    iconClass: ''
}];

export let title = ko.observable('JET Test');
export let copyright = ko.observable('Daniel Biedma 2016');