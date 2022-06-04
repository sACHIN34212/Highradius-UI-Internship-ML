import React ,{useState,useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {field : 'sl_no', headerName : 'Sl no',width : 100, height:200},
    {field : 'business_code', headerName : 'Business \n Code',width : 200},
    {field : 'cust_number', headerName : 'Customer Number',width : 200}, 
    {field : 'clear_date', headerName : 'Clear Date',width : 200},
    {field : 'buisness_year', headerName : 'Bussiness Year',width : 200},
    {field : 'doc_id', headerName : 'Document Id',width : 200},
    {field : 'posting_date', headerName : 'Posting Date',width : 100},
    {field : 'document_create_date', headerName : 'Document Create Date',width : 200},
    {field : 'due_in_date', headerName : 'Due Date',width : 100},
    {field : 'invoice_currency', headerName : 'Invoice Currency',width : 200},
    {field : 'document_type', headerName : 'Document Type',width : 200},
    {field : 'posting_id', headerName : 'Posting Id',width : 200},
    {field : 'total_open_amount', headerName : 'Total Open Amount',width : 200},
    {field : 'baseline_create_date', headerName : 'Baseline Create Date',width : 200},
    {field : 'cust_payment_terms', headerName : 'Customer Payment Terms'},
    {field : 'invoice_id', headerName : 'Invoice Id',width : 200},
    
]
const DataTable = () => {

  const [tableData,setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/LPU/DbConnection")
    .then((data) => data.json())
    .then((data) => setTableData(data))

    //.catch((e) => console.log(e))
  },[])

  return (
    <div style={{height: '66vh', width:"100%"}}>
      
      <DataGrid 
        getRowId={(tableData) => tableData.sl_no}
        rowHeight={25}
        style={{color: "white"}}
        rows={tableData}
        columns={columns}
        //pageSize={5}
        rowsPerPageOptions={[5, 10, 100]}
        pagination
        checkboxSelection
      />
    </div>
  )
}

export default DataTable;