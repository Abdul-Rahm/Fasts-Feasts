import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../api';
import { setAllUserDetails } from "../context/actions/allUsersAction";
import DataTable from './DataTable';
import { Avatar } from '../assets';

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, [allUsers])
  return (

    <div className='flex items-center justify-self-center gap-4 pt-6 w-full'>
      <DataTable 
        columns={[
          {title: "Image", field: "photoURL", render: (rowData) => (
                
            <img 
              src={rowData.photoURL ? rowData.photoURL : Avatar}
              className='w-32 h-16 object-contain rounded-md'  
            />
          ),},
          {
            title: "Name",
            field: "displayName",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p className={`px-2 py-1 w-32 text-center text-primary rounded-md ${rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"} `}>
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },
        ]} 
        data={allUsers}
        title="List of Users"
          //   actions={[
          //       {
          //           icon: "edit",
          //           tooltip: "Edit Data",
          //           onclick: (event, rowData) => {
          //               alert("You want to edit "+ rowData.productId);
          //           },
          //       },
          //       {
          //           icon: "delete",
          //           tooltip: "Delete Data",
          //           onclick: (event, rowData) => {
          //               if (
          //                   window.confirm("Are you sure, to perform this action")
          //               ) {
          //                   deleteAProduct(rowData.productId).then((res) => {
          //                       dispatch(alertSuccess(" Product Deleted "));
          //                       setInterval(() => {
          //                          dispatch(alertNULL());
          //                       }, 3000);
          //                       getAllProducts().then((data) => {
          //                           dispatch(setAllProducts(data));
          //                       });
          //                   });
          //               }                    
          //           },
          //       },
          //  ]}    
        />
    </div>
  )
}

export default DBUsers;
