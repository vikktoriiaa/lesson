document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы вкладок и секций
  const tabs = document.querySelectorAll('.list__item');
  const sections = document.querySelectorAll('.furniture__section');

  // Карты изображений для каждой вкладки
  const imageMaps = {
    room: {
      'Living Room': 'images/furniture-1.png',
      'Kitchen': 'images/furniture-2.png',
      'Dining Room': 'images/furniture-3.png',
      'Office': 'images/furniture-4.png',
      'Bed Room': 'images/furniture-5.png',
      'Hallway': 'images/furniture-6.png'
    },
    category: {
      'Upholstered Furniture': 'images/furniture-12.png',
      'Cabinet Furniture': 'images/furniture-22.png',
      'Kitchen Furniture': 'images/furniture-32.png',
      'Office Furniture': 'images/furniture-42.png'
    },
    style: {
      'Classic': 'images/furniture-13.png',
      'Gothic': 'images/furniture-23.png',
      'Modern': 'images/furniture-33.png',
      'Minimalism': 'images/furniture-43.png',
      'Baroque': 'images/furniture-53.png',
      'High-tech': 'images/furniture-63.png'
    }
  };

  // Функция для очистки активных состояний
  const clearActiveStates = (items, images) => {
    items.forEach(item => item.classList.remove('is-active'));
    images.forEach(img => img.classList.remove('is-active'));
  };

  // Переключение вкладок
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Удаляем активный класс у всех вкладок
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // Показываем соответствующую секцию
      sections.forEach(section => section.classList.remove('is-active'));
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('is-active');

      // Смена картинок при клике на блоки внутри секции
      const sectionItems = document.querySelectorAll(`#${targetId} .section__item-item`);
      const furnitureImages = document.querySelectorAll(`#${targetId} .furniture__img`);

      sectionItems.forEach(item => {
        item.addEventListener('click', () => {
          clearActiveStates(sectionItems, furnitureImages);
          item.classList.add('is-active');

          const itemText = item.querySelector('.section__item-text').textContent;
          const imageSrc = imageMaps[targetId][itemText];

          furnitureImages.forEach(img => {
            if (img.src.includes(imageSrc)) {
              img.classList.add('is-active');
            }
          });
        });
      });
    });
  });

  // Инициализация активной вкладки при загрузке страницы
  tabs[0].click();
});


$(document).ready(function(){
  $('.header__burger').click(function (event){
    $('.header__burger, .header__menu').toggleClass('active');
  });
});