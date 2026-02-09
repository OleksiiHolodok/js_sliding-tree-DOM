'use strict';

const treeItems = document.querySelectorAll('li');

treeItems.forEach((li) => {
  const sublist = li.querySelector('ul');

  if (!sublist) {
    return;
  }

  const textNode = li.firstChild;

  if (!textNode || textNode.nodeType !== 3) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  li.insertBefore(span, textNode);
  li.removeChild(textNode);

  sublist.hidden = false;

  span.addEventListener('click', () => {
    sublist.hidden = !sublist.hidden;
  });
});
