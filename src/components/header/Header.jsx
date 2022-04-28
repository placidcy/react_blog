import React from "react";
import "../reset.css";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 class="logo">
                    <Link to="#">
                        React <em>blog</em>
                    </Link>
                </h1>
                <nav class="menu">
                    <h2 class="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <Link to="../../pages/join/Join.jsx">회원가입</Link>
                        </li>
                        <li>
                            <Link to="">댓글</Link>
                        </li>
                        <li>
                            <Link to="">게시판</Link>
                        </li>
                        <li>
                            <Link to="">블로그</Link>
                        </li>

                        <li className="subMenuTag">
                            <Link to="">퀴즈</Link>
                            <ul class="sub">
                                <li>
                                    <Link to="">문제 만들기</Link>
                                </li>
                                <li>
                                    <Link to="">문제 풀기</Link>
                                </li>
                                <li>
                                    <Link to="">기출문제</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="member">
                    <span class="ir_so">회원 정보 영역</span>
                    <Link to="../../pages/join/Join.jsx">회원가입</Link>
                    <Link to="../../pages/login/Login.jsx">로그인</Link>
                </div>
            </header>
        </>
    );
}
