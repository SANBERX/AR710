document.addEventListener('DOMContentLoaded', function () {
    const testButton = document.getElementById('test-button');

    testButton.addEventListener('click', function () {
        showGameOptions();
    });

    function showGameOptions() {
        // Aquí puedes crear la lógica para mostrar las opciones de juegos
        alert('Mostrar opciones de juegos');
    }
});

function showGameOptions() {
    const gameOptions = document.createElement('div');
    gameOptions.id = 'game-options';
    gameOptions.innerHTML = `
        <button onclick="showPerformance('game1')">Juego 1</button>
        <button onclick="showPerformance('game2')">Juego 2</button>
        <button onclick="showPerformance('game3')">Juego 3</button>
    `;
    document.body.appendChild(gameOptions);
}

function showPerformance(game) {
    // Aquí puedes mostrar la gráfica y el video de rendimiento del juego
    alert(`Mostrar rendimiento para ${game}`);
}
