const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');

  console.log('Weight input value:', weightInput.value);
  console.log('Height input value:', heightInput.value);

  const weight = parseFloat(weightInput.value.replace(',', '.'));
  const height = parseFloat(heightInput.value.replace(',', '.'));

  console.log('Parsed weight:', weight);
  console.log('Parsed height:', height);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  console.log('Calculated BMI:', bmi);

  const value = document.getElementById('value');
  let description = '';

  value.classList.add('attention');

  document.getElementById('infos').classList.remove('hidden');

  if (bmi < 18.5) {
    description = "Cuidado! Você está abaixo do peso";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description = "Você está no peso ideal";
    value.classList.remove("attention");
    value.classList.add("normal");
  } else if (bmi >= 25 && bmi <= 29.9) {
    description = "Cuidado! Você está com sobrepeso";
  } else if (bmi >= 30 && bmi <= 34.9) {
    description = "Cuidado! Obesidade grau I";
  } else if (bmi >= 35 && bmi <= 39.9) {
    description = "Cuidado! Obesidade grau II";
  } else if (bmi >= 40) {
    description = "Cuidado! Obesidade grau III";
  }

  value.textContent = bmi.replace('.', ',');
  document.getElementById('description').textContent = description;
});

const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark' || (!(localStorage.getItem('theme')) && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', toggleTheme);
