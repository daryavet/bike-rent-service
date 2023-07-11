import * as React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registaration/registration';
import LogIn from './Pages/Login/logIn';
import Report from './Pages/ReportForm/ReportForm'
import ReportsList from './Pages/ReportsList/ReportsList'
import Officers from './Pages/Officers/Officers';
import Details from './components/Details/details';
import Layout from './components/Layout/layout';
import StartInfo from './components/StartPage/StartInfo/startInfo';



const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      // errorElement: <ErrorPage/>,
       children: [
        {
          path:"/",
          element:<StartInfo/>,
          children:[
            {
              path:"/registration",
             element:<Registration/>,
           },
           {
              path:"login",
             element:<LogIn/>
           },
          ]
        },
        {
          path: "/report",
          element: <Report/>
        },
        {
          path: "/officers",
          element: <Officers/>,
          children:[
            {
              path:"/officers/:id",
              element:<Details type="officers"/>
             },
           
          ]
        },
     
        {
          path: "reports",
          element: <ReportsList/>,
          children: [
            {
              path: '/reports/:id',
              element:<Details type="reports"/>  
            },
          ]
        }
      
        ]
    },
   ]);



const App = () =>{
 return (
    
 <RouterProvider router={router} /> 
   
 )
 }

export default App