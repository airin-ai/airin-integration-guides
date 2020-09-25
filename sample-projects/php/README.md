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