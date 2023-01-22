const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async(req, res) => {
    try {
        const response = await openai.createImage({
            prompt: 'one piece anime',
            n: 1,
            size: '400x400'
        })

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            data: imageUrl
        })
    } catch (error) {
        res.status(400).json({
            error: 'image not generated'
        })
    }
}

module.exports = { generateImage };