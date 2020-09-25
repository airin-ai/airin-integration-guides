### React Integration
1. Install Airin Prebuilt UI from NPM.
    * Credentials will be needed to install the private package.
    * use NPM config or place `.npmrc` in project root
``` bash
$ npm install @airin-ai/prebuilt-ui@latest
```

2. There are multiple ways to include Airin PrebuiltUI Javascript into your React application.

    * Include script on index.html

    ``` html
        <script src="/path/to/airin.js"></script>
    ```
    * Include as import in Components.

    ```js
        import '@airin-ai/prebuilt-ui/test/airin.js';
    ```

    * Apppend script to DOM
    ``` jsx 
        componentDidMount () {
            const script = document.createElement("script");
            script.src = "/node_modules/@airin-ai/prebuilt-ui/test/airin.js";
            script.async = true;
            document.body.appendChild(script);
        }
    ```



3. Place Custom Element within Component. For app-wide sessions, put it in the app root component. CSS position is fixed, so Airin Self Service button trigger will be placed far right side, middle of the screen.
``` html
    <airin-element></airin-element>
```
4. Add input values for custom element along with ref to self.
``` jsx
    <airin-element ref={elem => this.airin = elem}  airinApiKey={this.state.airinApiKey}></airin-element>
```
5. Set airinApiKey in component.
``` javascript
   this.state = {
      airinApiKey: 'YOUR_API_KEY',
    };
```
6. Run Serve for React App
``` shell
$ npm run serve
```
---


