
import axios from 'axios'

export default {
    async requestChartData (path, p_search_type, p_device, p_date_type, p_start_date, p_end_date){
        return await axios.get(process.env.BASE_URL + path, {
            params: {
                search_type: p_search_type,
                device: p_device,
                date_type: p_date_type,
                start_date: p_start_date,
                end_date: p_end_date
            }
        })
    }
}