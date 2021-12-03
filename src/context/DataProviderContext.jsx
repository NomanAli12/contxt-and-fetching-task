import React, { useState  } from 'react'



 export const DataContext = React.createContext()


 export  const DataProviderContext = (props) => {

    const [data , setData ] = useState([])
    console.log('provider data..', data);
    return (
        <div>
            <DataContext.Provider value={[data , setData]} >{props.children}</DataContext.Provider>
        </div>
    )
}


