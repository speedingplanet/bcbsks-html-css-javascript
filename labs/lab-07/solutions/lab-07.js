let panelsSelected = 0;
document.querySelector('#selected-count').textContent = panelsSelected;

document.querySelectorAll('.panel').forEach((panel) => {
  panel.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('panel-selected');
    panelsSelected = document.querySelectorAll('.panel-selected').length;
    document.querySelector('#selected-count').textContent = panelsSelected;
  });
});
