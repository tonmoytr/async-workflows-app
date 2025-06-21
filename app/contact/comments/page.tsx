import CommentBox from './CommentBox'
import { getComments } from '@/lib/validations/comments'

export default function CommentsPage() {
  const initialComments = getComments()

  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Leave a Comment</h1>
      <CommentBox initialComments={initialComments} />
    </main>
  )
}
