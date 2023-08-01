import axios from "axios"



const uploadImages = async (file)=>{
    if(!file) return

    try {
        // Using the build-in object formData to send a body to our request
        const formData = new FormData()
        // Add new lines of data
        formData.append('upload_preset','curso-vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dso0xjfh8/image/upload'
        const {data} = await axios.post(url, formData)
        console.log(data.secure_url);
        return data.secure_url

    } catch (error) {
        console.error('Error charging the image '+ error);
        return null;
    }
}

export default uploadImages