
import { Bar } from 'vue-chartjs'
import axios from '../api/Axios'

export default {
    extends: Bar,
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
            (process.env.QM_PATH, 'QmSearch', this.device, 
            this.p_date_type, this.p_start_date, this.p_end_date) ;
        
        this.renderChart({
            labels: result_response.data.dateList,
            datasets: result_response.data.chartData
        }, {
            responsive: true, 
            maintainAspectRatio: false, 
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#333',
                }
            },
            scales: {
                yAxes: [{
                    id: 'A',
                    position: 'left',
                    stacked: true
                }, {
                    id: 'B',
                    position: 'right',
                    stacked: true
                }],
                xAxes: [{
                    stacked: true
                }]
            }
        })
    }
}