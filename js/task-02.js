const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const $list = document.querySelector('#ingredients');
let $fragment = new DocumentFragment();
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Potatoes';
  $fragment.appendChild($li);
 
}
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Mushrooms';
  $fragment.appendChild($li);
 
}
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Garlic';
  $fragment.appendChild($li);
 
}
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Tomatos';
  $fragment.appendChild($li);
 
}
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Herbs';
  $fragment.appendChild($li);
 
}
{
  const $li = document.createElement('li');
  $li.className = 'item';
  $li.textContent = 'Condiments';
  $fragment.appendChild($li);
 
}
document.querySelector('#ingredients').append($fragment);
 