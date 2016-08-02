import ko from 'knockout';

// Components can be packaged as AMD modules, such as the following:
ko.components.register('todo-list', { require: 'containers/todo-list/todo' });

// Components:
ko.components.register('bss-nav-bar', { require: 'components/nav-bar/nav-bar' });
ko.components.register('bss-footer', {
    template: { require: 'text!components/bss-footer/footer.html' }
});
