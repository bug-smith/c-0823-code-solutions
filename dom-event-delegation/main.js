document.addEventListener('click', function (event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('closest', $taskListItem);
    $taskListItem.remove();
  }
});
