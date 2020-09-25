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
