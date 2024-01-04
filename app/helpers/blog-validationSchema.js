const blogValidationSchema = {
    title:{
        notEmpty:{
            errorMessage: 'Title is required... title shouldn\'t be empty'
        }
    },
    content:{
        notEmpty:{
            errorMessage: 'Content is required... content shouldn\'t be empty'
        }
    }
}

module.exports = blogValidationSchema