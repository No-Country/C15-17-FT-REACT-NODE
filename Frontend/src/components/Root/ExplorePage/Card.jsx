import { Link } from "react-router-dom";

export function Card({ team }) {
  return (
    <article className="relative min-w-96 h-72 rounded-3xl overflow-hidden group">
      <Link to={`/explore/team/${team._id}`}>
        <picture className="w-full h-full flex justify-center items-center">
              <img src={team.teamImage} className="object-cover"/>
          </picture>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end pb-4 bg-black/30 rounded-3xl group-hover:bg-black/20 transition-all">
              <h4 className="text-2xl font-semibold text-white">{team.teamName}</h4>
          </div> 
      </Link>
    </article>
  )
}
