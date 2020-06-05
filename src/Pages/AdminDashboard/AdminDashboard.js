import React from 'react'
import "./AdminDashboard.scss"
import boss from "../../assets/images/admin/boss.png"
const AdminDashboard = () => {
    return (
        <div className="admindashboardwrapper">
            <h1 style={{ marginTop: "100px" }}>Hello BOSS!!</h1>
            <p>You can add new games by clicking below button</p>
            <a href="/admin/addgame" className="btn btnColor" >ADD GAME</a>
            <p style={{ marginTop: "30px" }}>You can edit games from the Store Page</p>
            <a href="/store" className="btn btnColor" >EDIT GAMES</a>
            <img src={boss} alt="boss" className="boss" />
        </div>
    )
}

export default AdminDashboard
