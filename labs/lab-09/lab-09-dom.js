export function buildList(records, fields = [], target = '', list = null) {
  target = document.getElementById(target);
  if (!list) {
    list = document.createElement('ul');
  }
  list.remove();
  list.replaceChildren();
  records.forEach((record) => {
    let content = fields.reduce((str, field) => str + ' ' + field);
    list.insertAdjacentHTML('beforeend', `<li>${content}</li>`);
  });
  target.append(list);
}
