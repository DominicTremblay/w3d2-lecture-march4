# Manipulate the DOM

- display DOM elements

`console.dir(document);`

- display the elements as a collection

`console.log(document.all);`

## document methods to find DOM elements

```javascript
document.getElementById;
document.getElementsByTagName;
document.getElementsByName;
document.querySelector;
document.querySelectorAll;
document.getElementByClassName();
```

- Return either the first element or a collection of elements
- Selector can be HTML element, class or pseudo-class, id, or attribute

### Examples

```javascript
// returns the specific div element with the id 'container'
document.getElementById('container');

// returns a list of elements that have the class 'fields'
document.getElementsByClassName('fields');

// returns a list of elements that have the name attribute with a value of 'add'
document.getElementsByName('add');

// returns a list of the elements that have the tag 'button'
document.getElementsByTagName('button');
```

### Modify CSS

```js
let todoList = document.getElementById('todo-list');
todoList.style.backgroundColor = 'lightblue';
```

## DOM Traversal

- parentNode/parentElement

`document.getElementById('todo-list').parentElement`

- children

`document.getElementById('todo-list').children`
`document.getElementById('todo-list').firstElementChild`
`document.getElementById('todo-list').lastElementChild`

- siblings

`document.querySelector('li').nextElementSibling`
`document.querySelector('form').previousElementSibling`

## Creating Elements

```js
let div = document.createElement('div');

// add class or id
div.className = 'my-class';
div.id = 'my-id';

// add attributes
div.setAttribute('data-item', 1);

div.innerText = 'This is a new div';
```

### Adding the element to the DOM

- insertBefore

```js
const parentElement = document.querySelector('.container');
const firstChild = parentElement.firstChild;
parentElement.insertBefore(div, firstChild);
```

- appendChild

## Adding Event Listeners

```js
const form = document.getElementById('add-todo-frm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});
```
