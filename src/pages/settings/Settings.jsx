import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import"./setting.css";

export default function Settings(){
  return (
    <><div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTilte">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-user"></i>{" "}
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>UserName</label>
          <br />
          <input type="text" placeholder="Safak" />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input type="email" placeholder="Safak@gmail.com" />
          <br />
          <label htmlFor="">password</label>
          <br />
          <input type="password" />
          <br />
          <i class="fa-regular fa-user"></i>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
    
    </>
  )
}