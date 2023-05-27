import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss";


function Messages ()  {
const currentUser={
    id:1,
    username:"Anna",
    isSeller:true
}

const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
<div>
<div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links" style={{textAlign:"left"}}>
                        <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                        <span>Messages</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="messages">
    <div className="container">
      
      <table>
        <tr>
          <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
          <th>Last Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr className="active">
          <td>Charley Sharp</td>
          <td>
            <Link to="/message" className="link">
              {message.substring(0, 100)}...
            </Link>
          </td>
          <td>1 hour ago</td>
          <td>
            <button>Mark as Read</button>
          </td>
        </tr>
        <tr className="active">
          <td>John Doe</td>

          <td>
            <Link to="/message/123" className="link">
              {message.substring(0, 100)}...
            </Link>
          </td>
          <td>2 hours ago</td>
          <td>
            <button>Mark as Read</button>
          </td>
        </tr>
        <tr>
          <td>Elinor Good</td>
          <td>
            <Link to="/message/123" className="link">
              {message.substring(0, 100)}...
            </Link>
          </td>
          <td>1 day ago</td>
        </tr>
        <tr>
          <td>Garner David </td>
          <td>
            <Link to="/message/123" className="link">
              {message.substring(0, 100)}...
            </Link>
          </td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td>Troy Oliver</td>
          <td>{message.substring(0, 100)}</td>
          <td>1 week ago</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
  )
}
export default Messages