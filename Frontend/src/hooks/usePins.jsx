import { createComment, deleteComment, deleteLikePost, getPin, getPins, getPinsBySearch, getPinsByTeam, getPinsByUser, likePost } from '../services/pins.services'
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

export function usePinsByUser ({ userId }) {
  const { data, isLoading, isError } = useQuery(
      ['pinsUser'],
      async () => await getPinsByUser({ userId })
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

export function usePinsBySearch ({ search }) {

  ['pinsSearch'],
  async () => await getPinsBySearch({ search })
  const { data, isLoading, isError } = useQuery({
    queryFn : () => getPinsBySearch({search}),
    queryKey : ['pinsSearch'],
    enabled : !!search
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

export function useCommentPin() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ pinId, newComment }) => {
      return createComment({ pinId, newComment })
    },
    {
      onSettled: (data, error, variables) => {
        // Actualizar manualmente la caché después de la mutación de "comment"
        const { pinId, newComment } = variables;
        const pin = queryClient.getQueryData(['pin', pinId]);

        if (pin) {
          // Actualizar el pin en la caché local
          queryClient.setQueryData(['pin', pinId], {
            ...pin,
            comments: [...pin.likes, newComment],
          });
        }

        // Invalidar la caché del pin para forzar una recarga desde la API
        queryClient.invalidateQueries(['pin', pinId]);
      },
    }
  );
}


export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ pinId, commentId }) => {
      return deleteComment({ pinId, commentId })
    },
    {
      onSettled: (data, error, variables) => {
        // Actualizar manualmente la caché después de la mutación de "comment"
        const { pinId, commentId } = variables;
        const pin = queryClient.getQueryData(['pin', pinId]);

        if (pin) {
          // Actualizar el pin en la caché local
          queryClient.setQueryData(['pin', pinId], {
            ...pin,
            comments: pin.comments.filter(comment => comment._id !== commentId)
          });
        }

        // Invalidar la caché del pin para forzar una recarga desde la API
        queryClient.invalidateQueries(['pin', pinId]);
      },
    }
  );
}