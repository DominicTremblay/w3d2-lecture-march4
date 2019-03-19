# Browser Object Model

## Give access to global objects in the browser

- Navigator Object
- Window Object
- Document Object

## Navigator Object

- Getting information about the browser

- The Navigator interface represents the state of the browser. This interface isn't used very often. One useful feature of the navigator object is access to the browsers geolocation functionality. These objects are available in the global scope of JavaScript running the in the browser (these wouldn't be availabe in Node).

```js
navigator.userAgent;

navigator.geolocation.getCurrentPosition(function(geo) {
  console.log(geo.coords.latitude + ', ' + geo.coords.longitude);
});
```

## Window Object

- global object given by the browser

- get dimensions of the window

```javascript
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;
```

- Navigating

```javascript
window.location.href = 'http://www.amazon.ca';
window.history.back();
window.history.forward();
```
