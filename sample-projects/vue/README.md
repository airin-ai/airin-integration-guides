### Vue Integration
1. Install Airin Prebuilt UI from NPM.
    * Credentials will be needed to install the private package.
    * use NPM config or place `.npmrc` in project root
    ``` bash
    $ npm install @airin-ai/prebuilt-ui@latest
    ```

2. There are multiple ways to include Airin PrebuiltUI Javascript into your Vue application.

    * Include script on index.html

    ``` html
        <script src="/path/to/airin.js"></script>
    ```
    * Use a plugin like VueHead.
      in main.js:
      ``` js
          import Vue from 'vue'
          import App from './App.vue'
          import VueHead from 'vue-head'
          Vue.config.ignoredElements=[
            'airin-element'
            ]
          Vue.use(VueHead);
          new Vue({
            el: '#app',
            render: h => h(App)
          })
      ```

      in App.vue:

      ``` js
        head : {
          script: [
            { type: 'text/javascript', src: 'node_modules/@airin-ai/prebuilt-ui/test/airin.js', async: true, body: true}
          ]
        }
      ```



2. Place Custom Element within Component. For app-wide sessions, put it in the app root component. CSS position is fixed, so Airin Self Service button trigger will be placed far right side, middle of the screen.
``` html
   <airin-element></airin-element>
```
3. Add input values for custom element
``` html
   <airin-element :airinApiKey="airinApiKey" ></airin-element>
```
4. Set airinApiKey in component.

``` javascript
  export default {
    name: 'app',
    data () {
      return {
        airinApiKey: 'YOUR_AIRIN_API_KEY'
      }
    }
  }
```
6. Run Serve for Vue App
``` shell
$ npm run dev
```
---