import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';
import MainDashboard from './Dashboard/DashboardMain/MainDashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import MyOrder from './Dashboard/MyOrder/MyOrder';
import ManageOrders from './Dashboard/ManageOrders/ManageOrders';
import Payment from './Dashboard/Payment/Payment';
import Review from './Dashboard/Review/Review';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddService from './Dashboard/AddService/AddService';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './Dashboard/ManageServices/ManageService';
import Booking from './Pages/Home/Booking/Booking';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <AuthProvider>

    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
    
      <Route path="/booking/:id" element={<PrivateRoute>
         <Booking/>
      </PrivateRoute>} />

      <Route path="/dashboard" element={<PrivateRoute>
        <MainDashboard/>
      </PrivateRoute>}>

      <Route path='/dashboard' element={<DashboardHome></DashboardHome>}>
          
        </Route>
        <Route path={`/dashboard/myOrder`} element={<MyOrder></MyOrder>}>
          
        </Route>
        <Route path={`/dashboard/manageOrders`} element={<ManageOrders></ManageOrders>}>
          
        </Route>
        <Route path={`/dashboard/payment`} element={<Payment></Payment>}>
          
        </Route>
        <Route path={`/dashboard/review`} element={<Review></Review>}>
          
        </Route>
    
        <Route path="/dashboard/addProduct" element={<AdminRoute>
            <AddService></AddService>
       </AdminRoute>} />
        <Route path="/dashboard/makeAdmin" element={<AdminRoute>
            <MakeAdmin></MakeAdmin>
       </AdminRoute>} />
        <Route path="/dashboard/manageProducts" element={<AdminRoute>
            <ManageService></ManageService>
       </AdminRoute>} />
      </Route>

      <Route path="/login" element={<Login/>}>
      </Route>
      <Route path="/register" element={<Register/>}>
      </Route>
    </Routes>

      </AuthProvider>
      
  </BrowserRouter>
    </div>
  );
}

export default App;