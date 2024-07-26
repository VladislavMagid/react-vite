import { useAppDispatch, useAppSelector } from "store/hooks"
import Feedback from "components/Feedback/Feedback"
import {
  feedbackSliceSelectors,
  feedbackSliceActions,
} from "store/redux/feedback/feedbackSlice"

import { PageWrapper } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const countOfLikes = useAppSelector(feedbackSliceSelectors.likes)
  const countOfDislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }

  const onReset = () => {
    dispatch(feedbackSliceActions.recetResults())
    
  }
  return (
    <PageWrapper>
      <Feedback
        like={countOfLikes}
        dislike={countOfDislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={onReset}
      />
    </PageWrapper>
  )
}

export default Homework_16
