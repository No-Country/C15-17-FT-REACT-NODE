import { getTimeAgo } from "../../../utils/getTimeAgo";

export function Comment({ comment }) {
  return (
    <article className="flex w-full justify-between items-center">
        <div className="flex items-center gap-x-1 flex-wrap">
            <img src={comment.userId.avatar ? comment.userId.avatar : '/images/placeholder.webp'} className='w-8 h-8 rounded-full object-cover'/>
            <h4 className="font-semibold">{comment.userId.username}</h4>
            <p>{comment.comment}</p>
        </div>
        <p className="text-sm text-gray-500 pl-8">{getTimeAgo(comment.date)}</p>
    </article>
  )
}
