const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions"
const model = "deepseek/deepseek-chat"

const generateResponse = async (prompt) => {
    const res = await fetch(openRouterUrl, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: "You are a helpful assistant for generating code for building websites. You will be provided with the requirements of the website and you have to generate the code for the same. You should only generate code and nothing else. Do not provide any explanations. Always use the latest web development technologies and best practices. Make sure to generate clean and well-structured code."
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.2,
            max_tokens: 6000
        }),
    });

    if (!res.ok) {
        const err = await res.json()
        throw new Error("openRouter error: " + (err.error?.message || JSON.stringify(err)))
    }

    const data = await res.json()
    return data.choices[0].message.content
}

export default generateResponse
