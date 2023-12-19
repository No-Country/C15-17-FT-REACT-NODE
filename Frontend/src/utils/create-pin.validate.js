const messagesError = {
    minTitle : 'El titulo debe tener mas de 4 caracteres',
    emptyFields : 'Los campos no deben estar vacios, intentelo de nuevo',
    maxTitle : 'El titulo no debe ser mayor a 35 caracteres',
    minDescription : 'La descripción debe tener mas de 10 caracteres',
    imageFormat : 'La imagen solo puede tener el formato de JPEG, WEBP, PNG, JPG'
}

const allowedFormats = ["webp", "png", "jpg", "jpeg"];

export function createPinValidate (data) {
    const { image, title, description, team, tags } = data
    let error = {
        isError : false,
        messages : [],
        field : {
            title : false,
            image : false,
            team : false,
            tags : false,
            description : false
        }
      }


    if(!title || !image || !description || !team || !tags) {
        error.isError = true
        error.field = {
            title : true,
            image : true,
            team : true,
            tags : true,
            description : true
        }
       const message = messagesError.emptyFields
       error.messages = [message] 
       return error
    }

    if (title.length <= 4 ) {
        error.isError = true
        error.field = {
            ...error.field,
            title : true,
        }
       const message = messagesError.minTitle
       error.messages = [...error.messages, message] 
    }

    if (title.length >= 35 ) {
        error.isError = true
        error.field = {
            ...error.field,
            title : true,
        }
       const message = messagesError.maxTitle
       error.messages = [...error.messages, message] 

    }

    if (description.length < 10) {
        error.isError = true
        error.field = {
            ...error.field,
            description : true,
        }
       const message = messagesError.minDescription
       error.messages = [...error.messages, message] 
    }

    if (image) {

        const fileFormat = image.type.split("/")[1]
    
        if (!allowedFormats.includes(fileFormat)) {
            error.isError = true
            error.field = {
                ...error.field,
                image : true,
            }
           const message = messagesError.imageFormat
           error.messages = [...error.messages, message] 
        }
    }


    return error


}