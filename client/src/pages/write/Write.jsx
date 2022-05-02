function Write() {
    return (
        <>
            <main id="contents">
                <h2 class="ir_so">컨텐츠 영역</h2>
                <section id="blog-type" class="section center mb100">
                    <div class="container">
                        <h3 class="section__title">블로그 글 작성하기</h3>
                        <p class="section__desc">글을 작성해주세요.</p>
                        <div class="blog__inner">
                            <div class="blog__write">
                                <form action="Write.jsx" name="blogWrite" method="post" enctype="multipart/form-data">
                                    <fieldset>
                                        <legend class="ir_so">블로그 게시글 작성 영역</legend>
                                        <div>
                                            <label for="blogCate">카테고리</label>
                                            <select name="blogCate" id="blogCate">
                                                <option value="News">News</option>
                                                <option value="Coding">Coding</option>
                                                <option value="IT제품">IT제품</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="blogTitle">제목</label>
                                            <input
                                                type="text"
                                                name="blogTitle"
                                                id="blogTitle"
                                                placeholder="제목을 작성해주세요."
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label for="blogContents">내용</label>
                                            <textarea
                                                name="blogContents"
                                                id="blogContents"
                                                placeholder="내용을 작성해주세요."
                                                required
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label for="blogImgFile">파일</label>
                                            <input
                                                type="file"
                                                name="blogImgFile"
                                                id="blogImgFile"
                                                placeholder="사진을 넣어주세요. 사진은 jpg, gif, png 파일만 지원이 됩니다."
                                            ></input>
                                        </div>
                                        <div class="blog__btn">
                                            <button type="submit" value="저장하기">
                                                저장하기
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Write;
