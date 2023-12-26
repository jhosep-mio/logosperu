export const TitleBriefs = ({ titulo }: { titulo: string }): JSX.Element => {
  return (
    <p className="bg-white pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-600 lg:absolute">
        {titulo}
    </p>
  )
}
