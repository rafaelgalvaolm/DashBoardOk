const ctx = document.getElementById('fluxoDeCaixa').getContext('2d');
const fluxoDeCaixa = new Chart(ctx, {

        type: 'line',
        data:  {
            labels: Utils.months({count: 7}),
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
      });
