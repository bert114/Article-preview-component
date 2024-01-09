import profilePic from "../assets/images/avatar-michelle.jpg";
import heroImg from "../assets/images/drawers.jpg";

function handleClick(e) {
  const button = e.target.closest("button");
  const content = button.nextElementSibling;
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
}

function Article() {
  return (
    <div className="container">
      <picture>
        <img src={heroImg} alt="" />
      </picture>
      <article>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="info">
          <div>
            <img src={profilePic} alt="" />
            <div>
              <h2>Michelle Appleton</h2>
              <div>28 Jun 2020 </div>
            </div>
          </div>
          <div>
            <button
              className="share-icon"
              onClick={(e) => handleClick(e)}
            ></button>
            <div className="content active">
              <div>SHARE</div>
              <ul>
                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Article;
