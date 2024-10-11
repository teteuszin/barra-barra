document.getElementById('buscar').addEventListener('click', function() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = 'a0de4112c986f075455c735a7be1e780'; // Substitua pela sua chave da API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultado');
            if (data.cod === 200) {
                resultadoDiv.innerHTML = `Temperatura em ${data.name}: ${data.main.temp}°C`;
            } else {
                resultadoDiv.innerHTML = 'Cidade não encontrada!';
            }
        })
        .catch(error => console.error('Erro:', error));
});
