import {memo} from 'react'
// Memo - Ele só vai re-renderizar esse componente caso uma dependência dele seja atualizada

const Child1 = ({ value, setValue, color }) => {
    console.log("c1")
  return (
    <div>
        <button style={{ color }} onClick={setValue}>
            Increment1 - {value}
        </button>
    </div>
  )
}

export default memo(Child1)