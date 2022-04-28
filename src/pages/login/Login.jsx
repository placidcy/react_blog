import React from "react";

function Login() {
    return (
        <>
            <h2 class="ir_so">컨텐츠 영역</h2>
            <section class="join-type gray">
                <div class="login-form">
                    <h3>로그인</h3>
                    <form action="" name="login" method="post">
                        <fieldset>
                            <legend class="ir_so">로그인 입력폼</legend>
                            <div class="join-box">
                                <div>
                                    <label for="youEmail">이메일</label>
                                    <input
                                        type="email"
                                        id="youEmail"
                                        name="youEmail"
                                        placeholder="Sample@naver.com"
                                        autocomplete="off"
                                        autofocus
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="youPass">비밀번호</label>
                                    <input
                                        type="password"
                                        id="youPass"
                                        name="youPass"
                                        maxlength="20"
                                        placeholder="비밀번호를 적어주세요!"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <button id="loginBtn" class="login-submit" type="submit">
                                로그인
                            </button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;
