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
