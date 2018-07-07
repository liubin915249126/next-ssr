import { init } from '@rematch/core'
import counter  from '../models/counter'

// rematch store with initialValue set to 5
const initStore = (initialState = { counter: 5 }) => {
  return init({
    models: {
      counter
    },
    redux: {
      initialState
    }
  })
}
export default initStore;