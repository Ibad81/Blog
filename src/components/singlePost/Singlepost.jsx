import"./singlepost.css";
import React from "react";
export default function Singlepost(){
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Autor:<b>Safak</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, reprehenderit porro possimus ducimus provident incidunt. Illo consequuntur porro necessitatibus labore nam non corporis. Quos impedit perferendis vitae eveniet, mollitia cupiditate eaque aliquid
                     reprehenderit hic quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis repudiandae natus aperiam eveniet fugiat dolore mollitia. Autem, voluptatem quisquam. sapiente commodi neque placeat eligendi nesciunt corporis debitis, non dolorum at architecto animi ipsam repellat?</p>
            </div>

        </div>
    )
}