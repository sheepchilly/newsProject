import moment from 'moment'
moment.locale("zh-cn");  //中文设置

const formatTime = {
    getTime:(data)=>{
        return moment(data).format('YYYY/MM/DD')
    },
    getTimePoint:(data)=>{
        return moment(data).format('YYYY.MM.DD')
    }
}

export default formatTime