import "./post.css";

function Post() {
    return (
        <article className="post">
            <div className="post__inner">
                <div className="post__cont">
                    <article className="post__article">
                        <div className="post__header">
                            <a href="#">
                                <img src="https://source.unsplash.com/800x600/?blog,water" alt="postimage" />
                            </a>
                        </div>

                        <div className="post__body">
                            <span className="post__cate">post1</span>
                            <div className="post__title">asdf</div>
                            <div className="post__desc">asdf</div>
                            <div className="post__info">
                                <span className="author">???</span>
                                <span className="date">2022-01-01</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </article>
    );
}

export default Post;
