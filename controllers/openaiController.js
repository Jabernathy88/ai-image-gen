const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const generateImage = async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: 'Brown bear Magic the Gathering', // next: user req params
            n: 1,
            size: '512x512' // TODO: refactor into a user-facing parameter
        })

        const imageUrl = response.data.data[0].url
        
        res.status(200).json({
            success: true,
            data: imageUrl
        })
        

    } catch (error) {
        if (error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
        }
        res.status(400).json({
            success: false,
            message: 'Image could not be generated.'
        })
    }

}

module.exports = { generateImage }
