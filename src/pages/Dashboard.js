import { PivotViewComponent,FieldList,Inject } from "@syncfusion/ej2-react-pivotview";
import React from "react";
import { pivotData } from "./data";
import '../App.css';


const Dashboard = () => {
    return (
        <div>
            <div>
            <div className='d-flex justify-content-between bg-primary p-2 mb-2'>
            <div>
                <h2 className='text-primary text-white '>Annual Report</h2>
            </div>
            <div className='my-2 '>
                <button className='mx-1'><i className="bi bi-facebook"></i></button>
                <button className='mx-1'><i className="bi bi-twitter "></i></button>
                <button className='mx-1'><i className="bi bi-instagram"></i></button>
                <button className='mx-1'><i className="bi bi-youtube "></i></button>
            </div>
        </div>  
            </div>
            <PivotViewComponent
                dataSourceSettings={{
                    dataSource:pivotData,
                    values:[
                    {name:"Sold",caption:"Sold Unit"},
                    {name:"Amount",caption:"Sold Amount"},
                    
                    ],
                    rows:[
                    {name:"Country"},
                    {name:"Products"}
                    ],
                    columns:[
                    {name:"Year"},
                    {name:"Quarter"}
                    
                    ],
                    filters:[
                    {name:"Quarter"}
                    ]
                }}
                showFieldList={true}
                height={'500'}
                width={'100%'}
                >
                <Inject services={[FieldList]}></Inject>
            </PivotViewComponent>
        </div>
    );
};

export default Dashboard;