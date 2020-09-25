<template>
  <div id="app">
    <img src="./assets/logo.png">
    <airin-element :airinApiKey="airinApiKey"></airin-element>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        airinApiKey: 'test_api_key'
      }
    },
    head : {
      script: [
        { type: 'text/javascript', src: 'node_modules/@airin-ai/prebuilt-ui/test/airin.js', async: true, body: true}
      ]
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
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
