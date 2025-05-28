const button = document.getElementById("theme");
const image = document.getElementById("image");
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Массив слайдов
const slides = [
  {
    sliderImg: "загрузка(3).jpg",
    cardImg: "загрузка(3).jpg"
  },
  {
    sliderImg: "загрузка(2).jpg",
    cardImg: "загрузка(2).jpg"
  },
  {
    sliderImg: "загрузка(4).jpg",
    cardImg: "загрузка(4).jpg"
  },
  {
    sliderImg: "загрузка(5).jpg",
    cardImg: "загрузка(5).jpg"
  },{
    sliderImg: "загрузка(6).jpg",
    cardImg: "загрузка(6).jpg"
  }
];
let currentIndex = 0;

// Синхронизация изображений (без темы)
function updateUI(index) {
  sliderImage.src = slides[index].sliderImg;
  image.src = slides[index].cardImg;
}

// Переключение темы только по кнопке
button.addEventListener("click", function () {
  if (document.body.classList.contains("dark-theme-body")) {
    document.body.classList.remove("dark-theme-body");
    button.classList.remove("dark-theme");
    button.classList.add("light-theme");
    button.textContent = "Light";
  } else {
    document.body.classList.add("dark-theme-body");
    button.classList.remove("light-theme");
    button.classList.add("dark-theme");
    button.textContent = "Dark";
  }
});
// Ползунок насыщенности
const saturationRange = document.getElementById("saturationRange");
saturationRange.addEventListener("input", function() {
    const saturation = saturationRange.value;
    image.style.filter = `saturate(${saturation}%)`;
    sliderImage.style.filter = `saturate(${saturation}%)`; 
});

// Слайдер — только изображения
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateUI(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateUI(currentIndex);
});

// Инициализация
updateUI(currentIndex);
const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");

uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) {
        alert("Пожалуйста, выберите изображение.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
        slides.push({
            sliderImg: event.target.result,
            cardImg: event.target.result
        });
        currentIndex = slides.length - 1;
        updateUI(currentIndex);
  
        uploadForm.reset();
    };
    reader.readAsDataURL(file);
});
