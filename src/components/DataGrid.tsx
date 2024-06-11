import React from "react"
import { Link, useLocation } from "react-router-dom";
import CONSTANTS from "../Constants";


// interface IGridHeader{
//     key:string;
//     label:string;
// }

// interface IProps{
//     data:types.Task[];
//     headers:IGridHeader[]
// }

const DataGrid:React.FC= ({data,headers,toggleEditEmployeePopup}) => {
  const {pathname}=useLocation()
  return (
    


<div className="px-4  -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
               {headers.map(({key,label})=>{
                return(
                    <th
                    key={key}
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    {label}
                  </th>
                )
               })}
        <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  ></th>
                </tr>
              </thead>
              <tbody>
                { data?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-3 flex items-center">
                            <img src={CONSTANTS.IMAGES.DogBathImage} className="h-12 w-12 object-cover rounded-full" alt="" />
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item?.username}
                              </p>
                            
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex flex-col gap-x-1.5 gap-y-1.5 flex-wrap">
                            <p className="text-gray-900 whitespace-no-wrap text-xs">
                              {item?.role}
                            </p>
                          </div>
                        </td>
                 
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex gap-x-1.5 gap-y-1.5 flex-wrap">
                            {new Date(item?.created).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                          <Link to={`${pathname}/employee/${item?._id}`}>
                          <button
                        
                            className="text-green-600 hover:text-green-900"
                          >
                            View
                          </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>

          </div>
        </div>



  )
}

export default DataGrid