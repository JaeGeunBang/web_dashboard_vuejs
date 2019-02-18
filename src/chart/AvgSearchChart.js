
import { Line } from 'vue-chartjs'
import axios from '../api/Axios'

export default {
    extends: Line,
    props: ['device'],
    data () {
        return {
            p_date_type: '',
            p_start_date: '',
            p_end_date: ''
        };
    },
    created() {
        if (this.$route.query.date_type) {
            this.p_date_type = this.$route.query.date_type
            this.p_start_date = this.$route.query.start_date
            this.p_end_date = this.$route.query.end_date
        }
    },
    async mounted () {
        const result_response = await axios.requestChartData
            (process.env.AVG_PATH, 'AvgSearch', this.device, 
            this.p_date_type, this.p_start_date, this.p_end_date) ;
        
        this.renderChart({
            labels: result_response.data.dateList,
            datasets: result_response.data.chartData
        }, {
            responsive: true, 
            maintainAspectRatio: false, 
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#333',
                }
            },
            scales: {
                yAxes: [{
                    id: 'A',
                    type: 'linear',
                    position: 'left'
                }, {
                    id: 'B',
                    type: 'linear',
                    position: 'right'
                }]
            },
        })
    }
}