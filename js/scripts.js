const { createApp } = Vue

createApp({
    data() {
      return {
        newTodo: "",
        tasks: [
            {
                text: 'Fare la spesa',
                done : false,
            },
            {
                text: 'Lavare i piatti',
                done : false,
            },
            {
                text: 'Andare in palestra',
                done : false,
            },
            {
                text: 'Pulire la polvere',
                done : true,
            },
            {
                text: 'Comprare una casa',
                done : false,
            },
          ],
      }
    },

    methods: {

        removeTodo: function(index) {
            this.todos.splice(index,1);
        },

        addTodo: function() {

            if(this.newTodo != "" && this.newTodo.length > 3) {

            this.tasks.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = "";
        }
        },

        checkDone: function(element) {
            if (element.done) {
                return done;
            }

            else {
                return "";
            }
        }

    }

  }).mount('#app');
