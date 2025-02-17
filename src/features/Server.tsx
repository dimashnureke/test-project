import { useGetCountriesQuery } from "../shared/api/jsonCountriesApi"


export const Server = () => {
    const {data} = useGetCountriesQuery()
    const mainData = data;

    
  return (
    <div>
        
    </div>
  )
}

export default Server