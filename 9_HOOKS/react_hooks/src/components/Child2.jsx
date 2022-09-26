import {memo} from 'react'
// Memo - Ele só vai re-renderizar esse componente caso uma dependência dele seja atualizada

const Child2 = ({ value, setValue }) => {
    console.log("c2")
  return (
    <div>
        <button onClick={setValue}>
            Increment2 - {value}
        </button>
    </div>
  )
}

export default memo(Child2)