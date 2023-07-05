import React from 'react';
import { DataTable } from '../components'
import { HiCurrencyRupee } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAProduct, getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productAction';
import { alertNULL, alertSuccess } from '../context/actions/alertAction';


const DBItems = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-self-center gap-4 pt-6 w-full'>
        <DataTable 
            columns={[
                {title: "Image", field: "imageURL", render: (rowData) => (
                
                    <img 
                        src={rowData.imageURL}
                        className='w-32 h-16 object-contain rounded-md'  
                    />
                ),},
                {
                    title: "Name",
                    field: "product_name",
                },
                {
                    title: "Category",
                    field: "product_category",
                },
                {
                    title: "Price",
                    field: "product_price",
                    render: (rowData) => (
                    <p className='text-xl font-semibold text-textColor flex items-center justify-center'>
                        <HiCurrencyRupee className='text-red-400'/>
                        {parseFloat(rowData.product_price).toFixed(2)}
                    </p>
                )},
            ]} 
            data={product}
            title="List of Products"
            actions={[
                {
                    icon: "edit",
                    tooltip: "Edit Data",
                    onclick: (event, rowData) => {
                        alert("You want to edit "+ rowData.productId);
                    },
                },
                {
                    icon: "delete",
                    tooltip: "Delete Data",
                    onclick: (event, rowData) => {
                        if (
                            window.confirm("Are you sure, to perform this action")
                        ) {
                            deleteAProduct(rowData.productId).then((res) => {
                                dispatch(alertSuccess(" Product Deleted "));
                                setInterval(() => {
                                   dispatch(alertNULL());
                                }, 3000);
                                getAllProducts().then((data) => {
                                    dispatch(setAllProducts(data));
                                });
                            });
                        }                    
                    },
                },
           ]}    
        />
    </div>
  )
}

export default DBItems;
