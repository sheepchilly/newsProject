import axios from 'axios'

function upload(path,userForm) {
    //创建FormData()对象 => 使用该对象来模拟和处理表单并方便的进行文件上传操作
    const params = new FormData();
    for (let i in userForm) {
        params.append(i, userForm[i]);
    }
    return axios.post(path, params, {
        headers: {
            "Content-type": "multipart/form-data", //告诉后端传输格式是表单
        },
    }).then(res => res.data)
}

export default upload