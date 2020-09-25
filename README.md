## Airin Integration Guide  

Airin provides multiple integration paths, depending on the resources, goals, and Partner's needs. 

### 1. Airin Prebuilt UI: Overview  

1. Request test account through Airin Customer Success;  Airin will create a test account along with Account Admin user record for you and will provide the following:

    a. Airin API Key
    b. Account Admin credentials.  

2. Add snippet to your test site. See [Prebuilt UI: Frontend Integration](#prebuilt-ui-frontend-integration).  

3. Log in as Account Admin

    3.1 Setup Connected Apps using one or more industry-standard protocols: OAuth, SAML, or OIDC

    3.2 Setup your users; check auto-provisioning or upload your users in bulk from CSV file

    3.3 Complete your user setup

4. Test the application and when ready to go live, proceed to step 5.

5. Go live! - repeat steps 2 through 4 in your production environment when ready.

Notes:

* Airin issues Test accounts on the shared Airin Test instance, securely segregated from other Airin clients. 
* Airin issues Production accounts on the shared Airin Production instance, securely segregated from other Airin clients.
* If Partner desires to manage their own Airin instance, please contact Airin Customer Success Team.


### 2. Airin SDK for Custom UIs

To implement Airin with a custom built UI, Airin provides its JavaScript SDK as an NPM package. See [Building a Custom UI with the Airin SDK](#building-a-custom-ui-with-the-airin-sdk) 

### 3. Airin REST API, Data, and Services

To implement Airin into your application using the REST API, Data, and Services, see [Using Airin REST API](#using-airin-rest-api) 

---

### Prebuilt UI: Frontend Integration

1. Obtain API key from Connected Apps Panel in Airin Admin Panel. 
    a. Must have Admin role in Airin Account to create Airin API Keys.
2. Clone this repository and use /sample-projects and integration guide as a reference

    *  [HTML & Javascript](#html-javascript-integration)
    *  [Angular](#angular-integration)
    *  [React](#react-integration)
    *  [Vue](#vue-integration)
    *  [PHP](#php-integration)
    *  [ASP.NET](#net-integration)



___

### Building a Custom UI with the Airin SDK
1. Obtain a private NPM package access token from Airin staff.
2. Install the SDK.
```shell
    npm install @airin-ai/airin-sdk
```
3. Initialize SDK with options.
``` javascript
    import { Airin } from '@airin-ai/airin-sdk';
    const options = {
        ..
        // initialization options
        ..
    }
    const airin = Airin.initialize(options);
```
4. Refer to Airin SDK documentation for further details.

---

### Using Airin REST API
1.  In development.
---
### HTML / JavaScript Integration

1. Install Airin Prebuilt UI from NPM.
    * Credentials will be needed to install the private package.
    * use NPM config or place `.npmrc` in project root
``` bash
$ npm install @airin-ai/prebuilt-ui@latest
```

2. Include custom element and embed script within ``` <body> ``` tag on index.html. Ensure that airin.js is included with correct path.
``` html
    <airin-element></airin-element>
    <script src="node_modules/@airin-ai/prebuilt-ui/test/airin.js"></script>
```

3. Add input values for custom element.
    a. use query selector to get element
    b. set airinApiKey attribute
``` html
<script>
    var customElement = document.querySelector('airin-element');
    customElement.airinApiKey = 'sampleApiKey';
</script>
```

4. an Airin Session will continue with the browser through each page reload through localStorage.

5. To clear the Airin Session and allow self-service user to restart, use:
``` javascript
customElement.session = null;
```
---



### Angular Integration

1. Install Airin Prebuilt UI from NPM.
    * Credentials will be needed to install the private package.
    * use NPM config or place `.npmrc` in project root
``` bash
$ npm install @airin-ai/prebuilt-ui@latest
```

2. Add Airin PreBuilt UI to project with test or prod path, based on your target environment.


``` json
        "options": {
            "scripts": [
              "node_modules/@airin-ai/prebuilt-ui/test/airin.js"
            ]
          }
```

2. Place Custom Element anywhere within Component. For system wide, put it in the app root component. CSS position is fixed, so Airin Self Service button trigger will be placed far right side, middle of the screen.
``` html
    <airin-element></airin-element>
```
3. Set airinApiKey as component member variable and pass to airin-element as input.
    a. airinApiKey can be given at any time and airin-element will react accordingly.

``` javascript
    airinApiKey = 'YOUR_AIRIN_API_KEY';
```

4. Add input values for custom element from component member variables.
``` html
   <airin-element [airinApiKey]="airinApiKey"></airin-element>
```
5. Import CUSTOM_ELEMENTS_SCHEMA into app.modules.ts or module where airin-element exists
``` typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

6. TEST: Run Serve for Angular App
``` shell
$ ng serve
```

---

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
### PHP Integration
1. Load `airin.js` and place `<airin-element></airin-element>` onto each php view/page that will be rendered.

```php

<airin-element></airin-element>
<script type="text/javascript" src="/path/to/airin.js"></script>

<script>
    var customElement = document.querySelector('airin-element');
    customElement.airinApiKey = 'airinApiKey';

</script>
```
2. an Airin Session will continue with the browser through each page reload through localStorage.
3. To clear the Airin Session and allow self-service user to restart, use:
``` javascript
    customElement.session = null;
```
---
### .NET Integration. 
#### Note: not tested
1. Load `airin.js` and place `<airin-element></airin-element>` onto each .net content/view that will be rendered. or include `airin.js` within global `<head></head>` 

``` cs
    @page
    @model IndexModel
    @{
        ViewData["Title"] = "Home page";
    }
    <script src="node_modules/@airin-ai/prebuilt-ui/test/airin.js"></script>

    <script>
        var customElement = document.querySelector('airin-element');
        customElement.apiKey = '{ "airinApiKey" : "<YOUR_AIRIN_API_KEY>"}';

    </script>

    <airin-element></airin-element>
    <div class="text-center">
        <h1>Hello, world!</h1>
        <p>The time on the server is @DateTime.Now</p>
    </div>
 ```

2. an Airin Session will continue with the browser through each page reload through localStorage.
3. To clear the Airin Session and allow self-service user to restart, use:

``` javascript
    customElement.session = null;
```
---
