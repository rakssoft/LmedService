document.addEventListener('DOMContentLoaded', function () {
    let monthlyData = {
        'Янв': 0,
        'Фев': 0,
        'Мар': 0,
        'Апр': 0,
        'Май': 0,
        'Июн': 0
    };

    let myChart; // Переменная для хранения экземпляра графика

    function updateData(event) {
        event.preventDefault();

        monthlyData['Янв'] = parseInt(document.getElementById('jan').value, 10) || 0;
        monthlyData['Фев'] = parseInt(document.getElementById('feb').value, 10) || 0;
        monthlyData['Мар'] = parseInt(document.getElementById('mar').value, 10) || 0;
        monthlyData['Апр'] = parseInt(document.getElementById('apr').value, 10) || 0;
        monthlyData['Май'] = parseInt(document.getElementById('may').value, 10) || 0;
        monthlyData['Июн'] = parseInt(document.getElementById('jun').value, 10) || 0;

        updateChart();
    }

    function updateChart() {
        const labels = Object.keys(monthlyData);
        const data = Object.values(monthlyData);

        const ctx = document.getElementById('myChart').getContext('2d');

        if (myChart) {
            // Если график уже существует, обновляем его данные
            myChart.data.labels = labels;
            myChart.data.datasets[0].data = data;
            myChart.update(); // Обновляем график с новыми данными
        } else {
            // Если график не существует, создаем новый экземпляр
            const config = {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Продажи по месяцам',
                        data: data,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'График продаж по месяцам'
                        }
                    }
                }
            };

            myChart = new Chart(ctx, config); // Создаем новый график и сохраняем его в переменную myChart
        }
    }

    document.getElementById('dataForm').addEventListener('submit', updateData);

    updateChart(); // Инициализация графика при загрузке страницы
});
