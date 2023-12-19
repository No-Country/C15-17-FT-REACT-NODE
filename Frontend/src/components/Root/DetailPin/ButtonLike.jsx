import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { useLikePinMutation } from "../../../hooks/usePins";
import { IconHeart } from "../../icons/IconHeart";

export function ButtonLike({ likes }) {

  const { id } = useParams()
  const { user } = useAuth()

  const likeMutation = useLikePinMutation();

  const isLike = likes.some(like => like.userId === user._id)

  const onLikeOrDislike = async () => {
    try {
      await likeMutation.mutateAsync({ pinId: id, userId: user._id, isLike });
    } catch (error) {
      console.log(error);
      toast.error('Ocurrió un error en el servidor');
    }
  };

  return (
    <button onClick={onLikeOrDislike} className="px-4 hover:scale-x-110 transition-transform box-content">
        <IconHeart type={isLike ? 'fill' : 'none'}/>
    </button>
  )
}
