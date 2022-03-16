import Book from './modules/book.js';
import { DateTime } from './modules/luxon/src/luxon.js';

Book.listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    Book.listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    Book.addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

const displayTime = () => {
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  setInterval(displayTime, 1000);
};

displayTime();

Book.updateUi();

Book.formBtn.addEventListener('click', Book.addBooks);
