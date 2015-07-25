var app = new Vue({
  el: '#todo',
  data: {
      todo:"",
      todos: [],
      font: ""
  },
  computed: {
      lefts: function(){
          return this.todos.filter(function(t){ return !t.isDone }).length;
      }
  },
  methods:{
      addTodo: function(){
          this.todos.push({ isDone:false , title:this.todo });
          this.todo = "";
      }
  }
});
