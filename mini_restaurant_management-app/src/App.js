import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute allowedRole="admin"> <AdminDashboard/> </ProtectedRoute>
      }
      />
      <Route path="/customers/dashboard" element={
        <ProtectedRoute allowedRole="customer"> <CustomerDashboard/> </ProtectedRoute>
      }
      />

    </Routes>
  )
}

export default App;