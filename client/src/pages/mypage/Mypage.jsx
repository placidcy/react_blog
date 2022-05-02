import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <section className="blog__login">
            <div class="member__form">
                <h3>회원 정보</h3>
                <div class="join-intro">
                    <div class="face">
                        <img
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="기본이미지"
                        />
                    </div>
                    <div class="intro">자기소개해주세요!</div>
                </div>
                <div class="join-info">
                    <ul>
                        <li>
                            <strong>이메일</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>닉네임</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>이름</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>생일</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>번호</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>성별</strong>
                            <span></span>
                        </li>
                        <li>
                            <strong>사이트</strong>
                            <span></span>
                        </li>
                    </ul>
                </div>

                <div class="join-btn">
                    <a href="/">수정하기</a>
                    <a href="/">탈퇴하기</a>
                </div>
            </div>
        </section>
    );
}
