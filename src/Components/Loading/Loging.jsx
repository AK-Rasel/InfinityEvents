
import { useContext } from 'react';
import { AuthContextProvider } from '../../AuthProvider/AuthProvider';

import AllServises from '../Services/AllEvents/AllServises';

const Loading = ({children}) => {
    const {reload} = useContext(AuthContextProvider)
    if (reload) {
        return <div className="w-7xl h-screen flex justify-center mx-auto items-center"><span className="loading loading-spinner loading-lg  "></span></div>
    }
    return <AllServises/>
};

export default Loading;