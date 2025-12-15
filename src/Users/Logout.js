import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert
import '../Styles/Logout.css';

function Logout() {
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState("");

    const logoutUser = async () => {
        // Show confirmation dialog before logging out
        Swal.fire({
            title: "Are you sure?",
            text: "You want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.post('http://localhost:9091/myapp/logout', {}, { withCredentials: true });
                    setLogoutMessage("Logout successful");
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);  // Redirect after 2 seconds
                } catch (error) {
                    console.error('Logout failed:', error);
                    setLogoutMessage("Logout failed. Please try again.");
                }
            }
        });
    };

    return (
        <div className="container">
            <button onClick={logoutUser} className="btn btn-danger logoutBtn">Logout</button>
            {logoutMessage && <p className="text-success mt-2">{logoutMessage}</p>}
        </div>
    );
}

export default Logout;