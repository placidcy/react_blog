import React from "react";
import "../reset.css";
import "./header.css";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 class="logo">
                    <a href="#">
                        React <em>blog</em>
                    </a>
                </h1>
                <nav class="menu">
                    <h2 class="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <a href="">회원가입</a>
                        </li>
                        <li>
                            <a href="">댓글</a>
                        </li>
                        <li>
                            <a href="">게시판</a>
                        </li>
                        <li>
                            <a href="">블로그</a>
                        </li>

                        <li className="subMenuTag">
                            <a href="">퀴즈</a>
                            <ul class="sub">
                                <li>
                                    <a href="">문제 만들기</a>
                                </li>
                                <li>
                                    <a href="">문제 풀기</a>
                                </li>
                                <li>
                                    <a href="">기출문제</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="member">
                    <span class="ir_so">회원 정보 영역</span>
                    <a href="../login/join.php">회원가입</a>
                    <a href="../login/login.php">로그인</a>
                </div>
            </header>
        </>
    );
}
