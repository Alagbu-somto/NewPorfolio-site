import { SlideLeft, SlideUp } from "./Animate";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
function GetInTouch() {
  return (
    <section className="get-in-touch " id="contact">
      <SlideLeft>
        <h3>Contact Me</h3>
        <h2>Get In Touch</h2>
      </SlideLeft>
      <SlideUp>
        <p>
          I am currently open to new opportunities and am available to work on
          your projects or freelancing jobs and bring your ideas to life. I will
          be glad to help you out, building out amazing solution for your
          buisness needs . I'll be looking forward to hearing from you.
        </p>
        <button>
          <a href="mailto:s.alagbu@gmail.com">
            Let's chat <AiOutlineMail />
          </a>
        </button>
        <button>
          <a href="mailto:s.alagbu@gmail.com">
            Let's chat <AiOutlineWhatsApp />
          </a>
        </button>
      </SlideUp>
    </section>
  );
}

export default GetInTouch;
