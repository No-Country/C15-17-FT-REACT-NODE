import { Loader } from "./Loader";

export function Loading({ title }) {
  return (
    <section className="w-full flex flex-col gap-y-4 items-center pt-12">
        <Loader />
        <h3 className="text-2xl font-semibold">{ title }</h3>
    </section>
  )
}
