let counter = 0; // عداد لتتبع عدد العناصر المضافة

// دالة لإضافة عنصر جديد
function addElement() {
  const container = document.querySelector('.container');

  // إنشاء عنصر جديد
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  counter++;
  newBox.textContent = `عنصر ${counter}`;

  // إضافة حدث عند النقر على العنصر لحذفه
  newBox.onclick = function() {
    newBox.remove();
  };

  // إضافة العنصر إلى الحاوية
  container.appendChild(newBox);
}

// دالة لمسح جميع العناصر
function clearElements() {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // مسح جميع العناصر داخل الحاوية
  counter = 0; // إعادة تعيين العداد
}
