// accessing the first li of the document
// const firstLi = document.querySelector('li');
// firstLi.style.color = 'blue';
// // changing the style of that li
// firstLi.style.backgroundColor = 'lightblue';
// const submitBtn = document.getElementById('add-todo');

// // Listening to keyup events on the input box
// submitBtn.addEventListener('click', function(event) {
//   console.log('Pressed a key');
// });

const createTodo = content => {
  // <li class="list-group-item">
  //   <input type="checkbox" name="walk-dog" id="walk-dog" />
  //   Walk the dog
  //           </li>

  // Step 5.1 - create a new li element
  const liEl = document.createElement('li');

  // Step 5.2 - Set the class on the li
  liEl.className = 'list-group-item';

  // Step 5.3 - Set the text value for this liEl
  liEl.innerText = ` ${content}`;

  // Step 5.4 create a new checkbox element
  const checkEl = document.createElement('input');
  // <input type="checkbox" name="walkdog" id="walk-dog" />;
  checkEl.setAttribute('type', 'checkbox');
  checkEl.setAttribute('name', content.split(' ').join(''));
  checkEl.id = content.split(' ').join('-');

  // Step 5.4 add the checkbox element to the LI element
  liEl.insertBefore(checkEl, liEl.firstChild);

  // Step 5.6 return the li element
  return liEl;
};

// Step 1 - reach out for the form element
const frmEl = document.getElementById('add-todo-frm');

// Step 2 -- Add an event listener on the form
frmEl.addEventListener('submit', function(event) {
  // Step 3 - preventing the default form submission
  event.preventDefault();

  // Step 4 - Extract the information typed in the input box
  const todoContent = event.target.elements.addtodo.value;

  // Step 5 - Create a new todo, calling a function
  const newTodoEl = createTodo(todoContent);

  // Step 6 - Add to new todoEl to the DOM

  const parentUl = document.getElementById('todo-list');

  parentUl.appendChild(newTodoEl);
});

// Step 7 .Detecting the click event on checkboxes

// Step 7.1 Selecting all the checkbox elements by their class todo-check
const checkboxes = document.getElementsByClassName('todo-check');

// Step 7.2 Adding a click event listener on each checkbox
for (const checkEl of checkboxes) {
  checkEl.addEventListener('click', function(event) {
    // Step 7.2.1
    // have to get the li element. Line-through cannot be applied on the text node
    // because it's not an html element. it does not have a style attribute
    let parentLi = event.target.parentElement;

    // Step 7.2.2 set the style of the parent li

    // toggling between none and line-through
    const toggleStyle =
      parentLi.style.textDecoration === 'line-through'
        ? 'none'
        : 'line-through';

    // Step 7.2.3 adding the style to the parent li
    parentLi.style.textDecoration = toggleStyle;
  });
}
