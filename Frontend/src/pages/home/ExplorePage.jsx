import { Card } from "../../components/Root/ExplorePage/Card";
import { useTeams } from "../../hooks/useTeams";


export function ExplorePage() {

  const { data, isLoading, isError } = useTeams()

  
  if(isLoading) return <p>Cargando...</p>
  if(isError) return <p>Hubo un error...</p>

  return (
    <section className="flex flex-col pt-8 gap-y-0.5 items-center w-full justify-center pb-12 lg:pb-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800">Explora nuestro futbol</h3>
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Sigue a tus equipos favoritos</h2>

      <section className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 gap-4">
        {
          data.map(team => (
            <Card key={team._id} team={team}/>
          ))
        }
      </section>

    </section>
  )
}
