var app = new Vue({
  el: '#todo',
  data: {
      todo: "",
      todos: []
  },
  computed: {
      lefts: function(){
          return this.todos.filter(function(t){ return !t.isDone }).length;
      },
      done: function() {
        var t = "Done!";
        if (this.lefts == 0) {
          return t;
        }
      }
  },
  methods:{
      addTodo: function(){
          this.todos.push({ isDone:false , title:this.todo });
          this.todo = "";
      }
  }
});
