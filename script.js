document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let color = '#000000';
    let isDrawing = false;
    let isEraserMode = false; // Переменная для определения режима ластика
    let brushSize = 10; // Начальный размер кисти
    let eraserSize = 10; // Начальный размер ластика

     canvas.width = 1000; // Новая ширина холста
    canvas.height = 800; // Новая высота холста

    // Функция для рисования
    function draw(event) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left; // Коррекция позиции курсора относительно холста
        const y = event.clientY - rect.top; // Коррекция позиции курсора относительно холста
        if (isEraserMode) {
            ctx.strokeStyle = '#ffffff'; // Установим белый цвет в режиме ластика
            ctx.lineWidth = eraserSize; // Установим размер ластика
        } else {
            ctx.strokeStyle = color; // Восстановим выбранный цвет
            ctx.lineWidth = brushSize; // Установим размер кисти
        }
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // Событие для начала рисования
    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        ctx.beginPath();
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left; // Коррекция позиции курсора относительно холста
        const y = event.clientY - rect.top; // Коррекция позиции курсора относительно холста
        ctx.moveTo(x, y);
    });

    // Событие для завершения рисования
    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    // Событие для рисования при перемещении мыши
    canvas.addEventListener('mousemove', draw);

    // Обработчик изменения цвета
    document.getElementById('color-picker').addEventListener('change', function(event) {
        color = event.target.value;
        ctx.closePath();
        ctx.strokeStyle = color;
    });

    // Событие для включения режима ластика
    document.getElementById('eraser').addEventListener('click', function() {
        isEraserMode = true;
    });

    // Событие для выключения режима ластика
    document.getElementById('brush').addEventListener('click', function() {
        isEraserMode = false;
    });

    // Обработчик изменения размера кисти
    document.getElementById('brush-size').addEventListener('input', function(event) {
        brushSize = event.target.value;
    });

    // Обработчик изменения размера ластика
    document.getElementById('eraser-size').addEventListener('input', function(event) {
        eraserSize = event.target.value;
    });

    let isResizing = false;
    let startX;
    let startY;



    // Перерисовываем текущий рисунок
    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Здесь долж
    }

    document.getElementById('clear').addEventListener('click', function() {
    ctx.fillStyle = 'white'; // Устанавливаем цвет заливки в белый
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Заливаем холст белым цветом
});

});
