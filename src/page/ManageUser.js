import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageUser = () => {
    const navigate = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    try {
        console.log("sadsa")
        var user = JSON.parse(localStorage.getItem("CurrentUser"))
    }
    catch (errors) {
        var user = [{ "email": "None" }, { "firstName": "none", "lastName": "none" }]
        console.log("sadsa")

    }
    const [firstName, setFirstName] = useState(user[0].firstName);
    const [lastName, setLastName] = useState(user[0].lastName);
    const [email, setEmail] = useState(user[0].email    );
    const [activeItem, setActiveItem] = useState("profile");
    const handleClick = (item) => {
        setActiveItem(item);
        if (item === "logout") { handleLogout() }
    };
    const handleLogout = () => {
        localStorage.setItem("CurrentUser", "{}")
        navigate("/login")
    }
    const handleUpdate = () => {
        user[0].firstName=firstName
        user[0].lastName=lastName
        user[0].email=email
        setIsEdit(!isEdit)
    }
    return (
        <div className="mt-[88px] px-[150px]">
            <div className="border-b p-[20px]">
                <h1 className="m-[10px]"> My Account</h1>
                <ul className="flex justify-center">
                    <li className={`mr-[15px] ${activeItem === 'profile' ? 'border-b border-black' : 'text-black'} text-sm`} onClick={() => handleClick('profile')}>My profile</li>
                    <li className={"mr-[15px] " + (activeItem === 'orders' ? 'border-b border-black' : '') + " text-sm"} onClick={() => handleClick('orders')}>My orders</li>
                    <li className={"mr-[15px] " + (activeItem === 'addresses' ? 'border-b border-black' : '') + " text-sm"} onClick={() => handleClick('addresses')}>My addresses</li>
                    <li className={"mr-[15px] " + (activeItem === 'logout' ? 'border-b border-black' : '') + " text-sm"} onClick={() => handleClick('logout')}>Logout</li>
                </ul>
            </div>
            {!isEdit && <div className="">
                <div className="flex justify-between">
                    <h3>MY PROFILE</h3>
                    <p onClick={() => { setIsEdit(!isEdit) }}>Edit your profile</p>

                </div>
                <div className="mt-[40px] mb-[200px]">
                    {user && user[0] && <p>{email}</p>}
                    {user && user[0] && <p>{firstName + lastName}</p>}

                </div>
            </div>}
            {isEdit && <div className="">
                <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleUpdate}>UPDATE MY PROFILE</Button>
            </div>}
        </div>
    )
}
export default ManageUser