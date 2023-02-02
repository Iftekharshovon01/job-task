import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useRouter();
    const location = useRouter();
    const from = location.state?.from?.pathname || '/'

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const name = form.name.value;

        console.log(name, role, email);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const mbUser = {
                    name,
                    email
                }
                fetch('https://mobile-workshop-server.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(mbUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    });

                form.reset();
                navigate(from, { replace: true });


            })
            .catch(error => console.error(error));

    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center py-5">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body mt-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='mx-auto py-2 '>Already an Account?<Link to='/Login' className='text-orrange-600 text-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;