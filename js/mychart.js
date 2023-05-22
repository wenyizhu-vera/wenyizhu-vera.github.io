// FAQs Page
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Unicorn Bagels', 'Alien Abduction Pizza', 'Mermaid Marmalade', 'Dragonfruit Donuts', 'Fairy Floss', 'Gnome-made Gnocchi'],
        datasets: [{
            label: 'Visitor Food Scores',
            data: [6, 8, 2, 7, 1, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // red
                'rgba(54, 162, 235, 0.2)', // blue
                'rgba(255, 206, 86, 0.2)', // yellow
                'rgba(75, 192, 192, 0.2)', // green
                'rgba(153, 102, 255, 0.2)', // purple
                'rgba(255, 159, 64, 0.2)'  // orange
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
    options: {
        layout: {
            responsive: true, // Make the chart responsive
            padding: {
                left: 70,
                right: 70,
                top: 70,
                bottom: 70
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});


