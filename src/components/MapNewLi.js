import { useState } from 'react'

const MapNewLi = () => {
  const [numbers, setNumbers] = useState([1, 666, 3, 4])

  // const numbers = [1, 2, 3, 4]
  //   const addNumber = () => {
  //     numbers.push(5)
  //     console.log(numbers)
  //   }

  const addNumber = () => {
    const randNum = Math.round(Math.random() * 100)
    const newArr = [...numbers, randNum]

    console.log(newArr)
    setNumbers(newArr)
  }

  //   setInterval(() => {
  //     console.log(numbers)
  //   }, 3000)

  return (
    <div>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button type="button" onClick={addNumber}>
        Новое число
      </button>
    </div>
  )
}
export default MapNewLi
