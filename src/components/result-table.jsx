import { useState, useEffect } from "react";
import {  } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'keyId', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', minWidth: 375, flex: 1,
    // renderCell: (params) => 
    //   <a href={params.row.link} target="_blank">{params.row.title}</a> 
    },
    { field: 'description', headerName: 'Description', minWidth: 180, flex: 1 },
    { field: 'publisherId', headerName: 'Publisher', minWidth: 70, flex: 1 },
    { field: 'productId', headerName: 'Product Id', minWidth: 70, flex: 1 },
    { field: 'contentType', headerName: 'Type', minWidth: 70, flex: 1 },
    { field: 'createdDate', headerName: 'Created On', minWidth: 70, flex: 1 },
    { field: 'revisionNumber', headerName: 'Revision', minWidth: 70, flex: 1 }
    
    // { field: 'products', headerName: 'Products', minWidth: 180, flex: 1 },
    // { field: 'classification', headerName: 'Classification', minWidth: 130, flex: 1 },
    // { field: 'lastUpdated', headerName: 'Last Updated', minWidth: 80, flex: 1},
    // { field: 'version', headerName: 'Version', minWidth: 10, flex: 1},
    // { field: 'size', headerName: 'Size', minWidth: 40, flex: 1}
  ];
  
//   const rows = [
//     { 
//         title: "2024-03 Dynamic Cumulative Update for Windows 10 Version 22H2 for ARM64-based Systems (KB5035845)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=dcfdafd8-aa31-4f83-8d1c-0dccc9ff4972",
//         products: 'Windows 10 and later GDR-DU', classification: 'Security Updates', lastUpdated: "5/9/2023", version: "n/a", size:"746.0 MB"
//     },
//     { 
//         title: "2023-05 Cumulative Update for Windows 10 Version 20H2 for x86-based Systems (KB5026361)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=b5fdc6f1-f04c-4b81-bc5a-959c41d19f88",
//         products: 'Windows 10, version 1903 and later', classification: 'Security Updates', lastUpdated: "5/9/2023", version: "n/a", size:"408.6 MB"
//     },
//     { 
//         title: "2022-08 Security Update for Windows 10 Version 20H2 for x64-based Systems (KB5012170)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=a74a41b8-42a3-41b4-bc05-0ceb5fc64caa",
//         products: 'Windows 10, version 1903 and later', classification: 'Security Updates', lastUpdated: "4/11/2023", version: "n/a", size:"262 KB"
//     },
//     { 
//         title: "2023-02 Cumulative Update for .NET Framework 3.5, 4.8 and 4.8.1 for Windows 10 Version 20H2 for x64 (KB5022727)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=ceb6b7a3-6f41-47f5-9a99-0523e05ff8d9",
//         products: 'Windows 10, version 1903 and later', classification: 'Security Updates', lastUpdated: "3/29/2023", version: "n/a", size:"129.4 MB"
//     },
//     { 
//         title: "2023-03 Dynamic Update for Windows 10 Version 20H2 for ARM64-based Systems (KB5023847)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=0dfeaee0-5f55-4d32-9fd9-f364c1a1d1c0",
//         products: 'Windows 10 and later Dynamic Update', classification: 'Critical Updates', lastUpdated: "3/21/2023", version: "n/a", size:"12.9 MB"
//     },
//     { 
//         title: "2024-03 Dynamic Cumulative Update for Windows 10 Version 22H2 for ARM64-based Systems (KB5035845)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=a53f02a5-dc8d-4c9b-a335-d2b8d14f0909",
//         products: 'Windows 10 and later Dynamic Update', classification: 'Critical Updates', lastUpdated: "3/21/2023", version: "n/a", size:"14.8 MB"
//     },
//     { 
//         title: "2023-03 Cumulative Update Preview for Windows 10 Version 20H2 for ARM64-based Systems (KB5023773)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=d674559a-6609-4ff0-943b-9d975a1aa375",
//         products: 'Windows 10, version 1903 and later', classification: 'Updates', lastUpdated: "3/21/2023", version: "n/a", size:"718.0 MB"
//     },
//     { 
//         title: "2023-03 Cumulative Update Preview for Windows 10 Version 20H2 for x64-based Systems (KB5023773)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=1b467b48-0134-401f-b81b-bc7bbd093138",
//         products: 'Windows 10, version 1903 and later', classification: 'Security Updates', lastUpdated: "3/21/2023", version: "n/a", size:"698.4 MB"
//     },
//     { 
//         title: "2023-02 Cumulative Update Preview for Windows 10 Version 20H2 for ARM64-based Systems (KB5022906)",
//         link:"https://www.catalog.update.microsoft.com/ScopedViewInline.aspx?updateid=9fdc44b1-1ef9-452c-9140-58838367af43",
//         products: 'Windows 10, version 1903 and later', classification: 'Updates', lastUpdated: "2/21/2023", version: "n/a", size:"716.7 MB"
//     },
//   ];

function ResultTable(props) {
    const rows = props.rows;
    console.log(props.query);
    console.log(rows);

    useEffect(() =>{
      console.log(props);
  
    })([props]);

    return (
        <><div style={{ height: 600, width: '75%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.keyId}
                // getRowId={(row) => row.link.substring(row.link.lastIndexOf('=')+1)}
                initialState={{
                // pagination: {
                //     paginationModel: { page: 0, pageSize: 10 },
                // },
                }}
                pageSizeOptions={[10, 20, 50]}
                />
        </div>
        </>
      )
    }
    
export default ResultTable