import React from "react"
import Header from '../../routing/header';
import Main from '../../routing/main';
import Footer from '../../routing/footer';

const ManageUsers = () => {
    return(
      <>
      <Header/>
        <section style={{backgroundColor: "inherit", transform: "scale(0.9)", marginTop: 40 + "px"}} className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">

            <div className="h-full">

                <div id="all" className=" w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
                     style={{width: 1000 + "px", boxShadow: "gray 0px 10px 50px -10px", borderRadius: 25 + "px"}}>
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Books</h2>
                    </header>
                    <div className="p-3">
                        <div className="table-container">
                            <div className="table-header">
                                <h2 style={{backgroundColor: "#ddd", padding: "10px 10px" }}>Customer Table</h2>
                                <button className="btn add-another btn btn-success">Add another customer</button>
                            </div>
                            <table className="customer-table table table-hover" style={{width: 100 + "%"}}>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th>Country</th>
                                    <th></th>
                                    <th></th>

                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>


                    <div className="form-container">
                        <form name="customer-details" className="customer-details form-horizontal">
                            <fieldset>
                                <legend>Customer details</legend>

                                <div className="form-group">
                                    <label htmlFor="txtName" className="control-label col-md-4">*Name:</label>
                                    <div className="col-md-8">
                                        <input type="text" id="name" name="name" placeholder="Enter Your Name Here"
                                               maxLength="50"></input>
                                            <div style={{color: "black"}} className="error-msg"></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="rdoGender" className="control-label col-md-4">*Username:</label>
                                    <div className="col-md-8">
                                        <label><input type="text" id="Username" name="username"
                                                      placeholder="Username Here" maxLength="20"></input></label>
                                        <div className="error-msg"></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtEmail" className="control-label col-md-4">*Email:</label>
                                    <div className="col-md-8">
                                        <input type="text" id="txtEmail" name="email" placeholder="Email here"
                                               maxLength="50"></input>
                                            <div className="error-msg"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Number" className="control-label col-md-4">*Phone Number:</label>
                                    <div className="col-md-8">
                                        <input type="text" id="txtNumber" name="phone" placeholder="Phone Number Here"
                                               maxLength="20"></input>
                                            <div className="error-msg"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rdoGender" className="control-label col-md-4">*Gender:</label>
                                    <div className="col-md-8">
                                        <label><input type="radio" className="rdo-gender" id="rdoGenderMale"
                                                      name="gender" value="Male"></input><span>Male</span></label>
                                        <label className="radio-gender"><input type="radio" name="gender"
                                                                               id="rdoGenderFemale"
                                                                               className="rdo-gender"
                                                                               value="Female"></input><span>Female</span></label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtName" className="control-label col-md-4">*Country:</label>
                                    <div className="col-md-8">
                                        <input type="text" id="txtNumber" name="country" placeholder="country Here"
                                               maxLength="20"></input>
                                            <div className="error-msg"></div>
                                    </div>
                                </div>
                                <button className="reset-button btn btn-danger">Reset</button>
                                <button className="add-button btn btn-success">Add</button>
                                <button className="update-button btn btn-primary">Update</button>
                            </fieldset>
                        </form>
                    </div>

                    <div className="message"></div>
                </div>
            </div>
        </section>
    <Main/>
    <Footer/>
      </>
    )
}
export default ManageUsers;