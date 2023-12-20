import { useAuth } from "../../../hooks/useAuth";
import { getTimeAgo } from "../../../utils/getTimeAgo";
import { ButtonDropdown } from "./ButtonDropdown";

export function Comment({ comment }) {

  const { user } = useAuth()

  const isPermited = user._id === comment.userId._id

  return (
    <article className="flex flex-col w-full justify-between ">
        <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-x-1">
              <img src={comment.userId.avatar ? comment.userId.avatar : '/images/placeholder.webp'} className='w-9 h-9 rounded-full object-cover mr-1'/>
              <h4 className="font-semibold">{comment.userId.username}</h4>
              <p className="">{comment.comment}</p>
            </div>
            {
              isPermited &&
              <div className='absolute top-0 right-4'>
                <ButtonDropdown commentId={comment._id}/>
              </div>
            }
        </div>
        <div className="flex items-center w-full justify-between px-10 ">
          <p className="text-sm text-gray-500 ">{getTimeAgo(comment.date)}</p>
        </div>
    </article>
  )
}
