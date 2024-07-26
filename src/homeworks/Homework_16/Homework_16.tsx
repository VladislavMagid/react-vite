import { useAppDispatch, useAppSelector } from "store/hooks"
import Feedback from "components/Feedback/Feedback"
import {
  feedbackLikesSliceSelectors,
  feedbackLikesSliceActions,
  feedbackDislikesSliceSelectors,
  feedbackDislikesSliceActions,
} from "store/redux/feedback/feedbackSlice"

import { PageWrapper } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const countOfLikes = useAppSelector(feedbackLikesSliceSelectors.count)
  const countOfDislikes = useAppSelector(feedbackDislikesSliceSelectors.count)

  const onLike = () => {
    dispatch(feedbackLikesSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackDislikesSliceActions.dislike())
  }

  const onReset = () => {
    dispatch(feedbackLikesSliceActions.recetLikes())
    dispatch(feedbackDislikesSliceActions.recetDislikes())
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
