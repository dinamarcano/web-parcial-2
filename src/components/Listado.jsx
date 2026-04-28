import { useContext,useState } from "react";
import { AppContext } from "../context/AppContext";
export default function Listado () {
    const {AppData,Available,updateStatus,toglgleFav} =useContext(AppContext);
    const [Filter,setFilter]=useState('all');
    const Filtered=AppData.Filter(i=> Filter === 'all', i.Status===Filter);
};
return  (
    <div>
        <select onChange={(e)=> setFilter(e.target.value)}>
            <optionv value ='all'>todos</optionv>
            <option value='pending'></option>
        </select>
    </div>
)
