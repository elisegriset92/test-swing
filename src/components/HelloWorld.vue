<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

    <vue-swing @throwout="throwout" @throwin="throwin" :config="config">
    <div class="box">COUCOU OUSSEMA!</div>
    </vue-swing>
    <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element}}</div>
</draggable>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      myArray: [1876545678, 33456789, "hellOooooo", "coucou"],

    }
  },
  components: {
            draggable,
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
