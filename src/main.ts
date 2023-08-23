import { openai } from './config/openai'

const configGPT = {
  model: 'gpt-3.5-turbo',
  temperature: 0,
  max_tokens: 7,
}

export async function main() {
  try {
    const response = await openai.createCompletion({
      ...configGPT,
      prompt: 'Bom dia, tudo bem?'
    })
    
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}