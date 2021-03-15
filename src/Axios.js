import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                fill: false,
                label: "West",
                borderColor: "red",
            },{ 
                data: [],
                fill: false,
                label: "National",
                borderColor: "darkBlue",
            },{ 
                data: [],
                fill: false,
                label: "East",
                borderColor: "indigo",
            },{ 
                data: [],
                fill: false,
                label: "Central",
                borderColor: "lightBlue",
            },{ 
                data: [],
                fill: false,
                label: "South",
                borderColor: "brown",
            },{ 
                data: [],
                fill: false,
                label: "North",
                borderColor: "lawnGreen",
            }
            
            ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23')
        
        .then(response => {
            //alert(response.data['items'][0]['readings']['psi_twenty_four_hourly']['west'])
            
            //alert(response.data['items'][0]['timestamp'])
            response.data['items'].forEach(data => { 
                this.datacollection.labels.push(data['timestamp'])
                
                this.datacollection.datasets[0].data.push(data['readings']['psi_twenty_four_hourly']['west'])
                this.datacollection.datasets[1].data.push(data['readings']['psi_twenty_four_hourly']['national'])
                this.datacollection.datasets[2].data.push(data['readings']['psi_twenty_four_hourly']['east'])
                this.datacollection.datasets[3].data.push(data['readings']['psi_twenty_four_hourly']['central'])
                this.datacollection.datasets[4].data.push(data['readings']['psi_twenty_four_hourly']['south'])
                this.datacollection.datasets[5].data.push(data['readings']['psi_twenty_four_hourly']['north'])
                

            })
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}