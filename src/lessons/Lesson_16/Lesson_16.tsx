import { useAppDispatch, useAppSelector } from "store/hooks"
import Counter from "components/Counter/Counter"
import {
  counterSliceSelectors,
  counterSliceAction,
} from "store/redux/counter/counterSlice"

import { PageWrapper } from "./styles"

function Lesson_16() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  const onPlus = () => {
    dispatch(counterSliceAction.plus())
  }

  const onMinus = () => {
    dispatch(counterSliceAction.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceAction.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceAction.divide(2))
  }

  return (
    <PageWrapper>
      <Counter
        onMultiply={onMultiply}
        onDivide={onDivide}
        count={count}
        onMinus={onMinus}
        onPlus={onPlus}
      />
    </PageWrapper>
  )
}

export default Lesson_16
