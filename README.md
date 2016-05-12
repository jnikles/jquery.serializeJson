# jquery.serializeJson
jQuery plugin for serializing input fields from an arbitrary DOM element into a JS object.
Useful, when you want to couple your input names with properties of your model.

# Supported types
- text/password
- number
- date
- checkbox
- select
- textarea

# Usage
Plugin is applicable to every HTMLElement, that has descendant input elements, that you want
to grab the data from.

## Example
Following structure
```html
<div id="login-form">
  <div class="form-element">
    <input name="username" />
  </div>
  <div class="form-element">
    <input type="password" name="password" />
  </div>
</div>
```

Now calling $("#login-form").serializeJson(); will result in an object with the input names as keys
```js
{
  name: "",
  password: ""
}
```
# Quick start
Simply include jquery.serializeJson.js into your page
