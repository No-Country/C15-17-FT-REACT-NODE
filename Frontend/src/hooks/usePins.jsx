import { deleteLikePost, getPin, getPins, getPinsByTeam, likePost } from '../services/pins.services'
import { useQuery, useMutation, useQueryClient } from 'react-query'

export function usePins () {
    const { data, isLoading, isError } = useQuery(
        ['pins'],
        async () => await getPins()
    )

    return {
        data : data,
        isLoading,
        isError
    }    

}

export function usePinsByTeam ({ team }) {
    const { data, isLoading, isError } = useQuery(
        ['pinsTeam'],
        async () => await getPinsByTeam({ team })
    )

    return {
        data : data,
        isLoading,
        isError
    }    

}

export function usePinsById ({ id }) {
    const { data, isLoading, isError } = useQuery({
        queryFn : () => getPin({ id }),
        queryKey: ['pin', id],
        enabled : !!id
    })

    return {
        data : data,
        isLoading,
        isError
    }    

}



export function useLikePinMutation() {
    const queryClient = useQueryClient();

    return useMutation(
      ({ pinId, userId, isLike }) => {
        return isLike ? deleteLikePost({ pinId, userId }) : likePost({ pinId, userId });
      },
      {
        onSettled: (data, error, variables) => {
          // Actualizar manualmente la caché después de la mutación de "like"
          const { pinId, isLike } = variables;
          const pin = queryClient.getQueryData(['pin', pinId]);
  
          if (pin) {
            // Actualizar el pin en la caché local
            queryClient.setQueryData(['pin', pinId], {
              ...pin,
              likes: isLike ? pin.likes.filter(like => like.userId !== variables.userId) : [...pin.likes, { userId: variables.userId }],
            });
          }
  
          // Invalidar la caché del pin para forzar una recarga desde la API
          queryClient.invalidateQueries(['pin', pinId]);
        },
      }
    );
}