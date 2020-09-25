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


