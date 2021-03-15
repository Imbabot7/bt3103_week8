import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Prawn omelette",
                    "Dry Beef Hor Fun",
                    "Sambal KangKung",
                    "Pork Fried Rice",
                    "Mapo Tofu",
                    "Cereal Prawn"],
            datasets: [{
                label: "Qty of each dish",
                backgroundColor: ['blue','purple','green','salmon','red','beige'],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0
                }    
              }]
            }
        },

    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            for (var i=1; i<=6; i++) {
            var order = "order" + i;

            //this.datacollection.labels.push(doc.data().name)
            //this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
            //alert(doc.data()[order].name == this.datacollection.labels[0])
            if (doc.data()[order].name == this.datacollection.labels[0]) {
                this.datacollection.datasets[0].data[0] += parseInt(doc.data()[order].qty)
                //alert(typeof this.datacollection.datasets[0].data[0])
            } else if (doc.data()[order].name == this.datacollection.labels[1]) {
                this.datacollection.datasets[0].data[1] += parseInt(doc.data()[order].qty)
            } else if (doc.data()[order].name == this.datacollection.labels[2]) {
                this.datacollection.datasets[0].data[2] += parseInt(doc.data()[order].qty)
            } else if (doc.data()[order].name == this.datacollection.labels[3]) {
                this.datacollection.datasets[0].data[3] += parseInt(doc.data()[order].qty)
            } else if (doc.data()[order].name == this.datacollection.labels[4]) {
                this.datacollection.datasets[0].data[4] += parseInt(doc.data()[order].qty)
            } else {
                this.datacollection.datasets[0].data[5] += parseInt(doc.data()[order].qty)
            }

            }
            
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}