import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <a href="#">
                        React <em>blog</em>
                    </a>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/login">LOGIN</a>
                        </li>
                        <li>
                            <a href="/join">JOIN</a>
                        </li>
                        <li>
                            <a href="/post">POST</a>
                        </li>
                        <li>
                            <a href="/write">WRITE</a>
                        </li>
                    </ul>
                </nav>

                <div className="member">
                    <span className="ir_so">회원 정보 영역</span>
                    {/* <<a href="../../pages/join/Join.jsx">회원가입</a>>
                    <<a href="../../pages/login/Login.jsx">로그인</a>> */}
                    <a href="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&usqp=CAU"
                            alt="사용자 이미지"
                        />

                        <span>로그인 상태</span>
                    </a>
                </div>
            </header>
        </>
    );
}
