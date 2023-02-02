import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider/Authprovider';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const DashboardLayout = () => {


    const { user } = useContext(AuthContext);
    // const [wUser, setwUser] = useState({});


    const [seller, setSeller] = useState(false);
    const [admin, setAdmin] = useState(false);


    useEffect(() => {
        fetch(`https://mobile-workshop-server.vercel.app/users/seller/${user?.email}`)
            .then(res => res.json())
            .then(data => setSeller(data.seller));
    }, [seller, user?.email])

    useEffect(() => {
        fetch(`https://mobile-workshop-server.vercel.app/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [admin, user?.email])


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col py-10 px-10 rounded">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
                        <>{admin &&
                            <>

                                <li><Link to={'/dashboard/allBuyers'}>All Buyers</Link></li>
                                <li><Link to={'/dashboard/allSellers'}>All Selles</Link></li>
                                <li><Link to={'/dashboard/reportedItems'}>Reproted Items</Link></li>
                            </>
                        }
                        </>
                        <>{seller &&
                            <>


                                <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                                <li><Link to={'/dashboard/myProducts'}>My Product</Link></li>
                            </>
                        }
                        </>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;