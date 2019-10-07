import axios from 'axios'

const GET_QUESTIONS = '/api/question'
const POST_QUESTION = '/api/question'

export const getQuestion = async () => {
  try {
    const resp = await axios.get(GET_QUESTIONS)
    return resp.data;
  } catch (error) {
    return error;
  }
}

export const postQuestion = async values => {
  try {
    const resp = await axios.post(POST_QUESTION, values)
    return { success: true, data: resp.data }
  } catch (error) {
    return error;
  }
}