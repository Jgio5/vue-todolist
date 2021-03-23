var app = new Vue( {
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            'Studiare le slide',
            'Fare gli esercizi',
            'Leggere la documentazione online',
            'Pushare su Git'
        ]
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo);
            this.newTodo = '';
    },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

Vue.config.devtools = true