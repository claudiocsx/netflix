const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://claudio:claudio@cluster0.ivc1j.gcp.mongodb.net/netflix?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})