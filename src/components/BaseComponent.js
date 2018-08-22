import { Component } from 'react';

export class BaseComponent extends Component {

    // server
      ip = "http://www.clavier.moe:8080";
    
    // local
    //ip = "http://localhost:8080";  


    post = (url, form) => {
        return fetch(this.ip + url, { method: 'POST', body: form, header: { 'content-type': 'multipart/form-data'}})
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    newPost = (url, form, successAction) => {
        return fetch(this.ip + url, { method: 'POST', body: form, header: { 'content-type': 'multipart/form-data' } })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); })
            .then((result) => {

                if (!result) {
                    console.log(result)
                    return;
                }

                if (result.status === 'fail') {
                    console.log(result)
                    return;
                }

                if (result.status === 'success') {
                    successAction(result);
                    return;
                } 

                alert(JSON.stringify(result))
            });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getImagePath = (imageId) => {
        return this.ip + "/api/image/" + imageId;
    }

    studentIdToImage = (studentId) => {
        return this.ip + "/api/image/studentIdToAvatar/" + studentId;
    }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
    

}




export default BaseComponent;