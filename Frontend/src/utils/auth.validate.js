
const messagesError = {
    emptyFields : 'Los campos no deben estar vacios, intentalo de nuevo',
    minUsername : 'El nombre del usuario debe tener almenos 6 caracteres',
    passwordNotMatch : 'Las contraseñas no coinciden, intentalo de nuevo',
    minPassword : 'Contraseña mínimo de 6 caracteres',
    minName : 'Nombre mínimo 3 caracteres',
    invalidEmail : "El email o la contraseña son incorrectas",
    invalidPassword : "El email o la contraseña son incorrectas",
    wrongPassword : "El email o la contraseña son incorrectas",
    emailExist : 'El email ya existe'
}


export function loginValidate (credentials) {

  const { email, password } = credentials

  let error = {
    isError : false,
    messages : [],
    field : {
        email : false,
        password : false,
    }
  }

  if (!email || !password) {
    const message = messagesError.emptyFields
    error.isError = true
    error.field = {
        email : true,
        password : true
    }
    error.messages = [...error.messages, message ]
    return error
  }

  if (password.length < 6) {
    const message = messagesError.minPassword
    error.isError = true
    error.field = {
        ...error.field,
        password : true
    }
    error.messages = [...error.messages, message ]

  }

  
  return error

}



export function registerValidate (credentials) {

    const { email, password, repeatPassword, username } = credentials
  
    let error = {
      isError : false,
      messages : [],
      field : {
          email : false,
          password : false,
          repeatPassword : false,
          username : false
      }
    }
  
    if (!email || !password || !repeatPassword || !username) {
      const message = messagesError.emptyFields
      error.isError = true
      error.field = {
          email : true,
          password : true,
          repeatPassword : true,
          username : true
      }
      error.messages = [...error.messages, message ]
      return error
    }

    if ( password !== repeatPassword) {
     const message = messagesError.passwordNotMatch
      error.isError = true
      error.field = {
          ...error.field,
          password : true,
          repeatPassword : true,
      }
      error.messages = [...error.messages, message ]
    }
  
    if (password.length < 6 ) {
      const message = messagesError.minPassword
      error.isError = true
      error.field = {
          ...error.field,
          password : true,
          repeatPassword : true
      }
      error.messages = [...error.messages, message ]
  
    }

    if (username.length < 6) {
        const message = messagesError.minUsername
        error.isError = true
        error.field = {
            ...error.field,
            username : true
        }
        error.messages = [...error.messages, message ]
  
    }
  
    
    return error
  
  }