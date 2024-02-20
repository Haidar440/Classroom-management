import { useState } from 'react';
function Signup() {
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    console.log(formData);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch(`https://localhost:5000/backend/auth/signup`,formData);
    //     const data = await res.json();
    //     console.log(data);
    // }
    return (
        <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div className="brand-logo">
                            <img src="../../images/logo_1 .svg" alt="logo" />
                        </div>
                        <h4>New here?</h4>
                        <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                        <form className="pt-3" >
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" id="Username" placeholder="Username" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" id="Email" placeholder="Email" onChange={handleChange} />
                            </div>
                            {/* <div className="form-group">
                                <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                                    <option>User</option>
                                    <option>Admin</option>
                                    <option>Faculty</option>
                                    <option>Student</option>
                                    <option>Parents</option>
                                </select>
                            </div> */}
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" id="Password" placeholder="Password" onChange={handleChange} />
                            </div>
                            {/* <div className="mb-4">
                                <div className="form-check">
                                    <label className="form-check-label text-muted">
                                        <input type="checkbox" className="form-check-input" />
                                        I agree to all Terms & Conditions
                                    </label>
                                </div>
                            </div> */}
                            <div className="mt-3">
                                <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                            </div>
                            <div className="text-center mt-4 font-weight-light">
                                Already have an account? <a href="login.html" className="text-primary">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup