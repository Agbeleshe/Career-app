import vid from "../assets/vid.mp4";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="Services">
      <section className="flex flex-row w-full mt-5">
        <div className="flex flex-col md:flex-row w-full h-[80vh]">
          {/* services */}
          <div className=" flex flex-col flex-1 md:w-6/12 justify-center items-center align-middle text-center px-10 text-2xl w-full md:text-4xl">
            <h1 className="font-extrabold text-purple-500">
              Services We Provide.
            </h1>
            <p>we offer services such as</p>
            {/* collapsable divs */}
            <div className="mt-5 font-extrabold">
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="text-purple-500 collapse-title text-xl font-medium">
                  Career Counseling
                </div>
                <div className="collapse-content">
                  <p className="text-sm">
                    Our experienced career counselors are here to guide and
                    support you in making informed career decisions. Through
                    personalized counseling sessions, we help you explore
                    various career paths, assess your strengths and interests,
                    and provide valuable insights to help you make confident
                    career choices.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="text-purple-500 collapse-title text-xl font-medium">
                  Career Assessment
                </div>
                <div className="collapse-content">
                  <p className="text-sm">
                    Our comprehensive career assessment tools assist in
                    identifying your unique strengths, skills, and preferences.
                    We analyze your aptitudes, personality traits, and career
                    aspirations to provide you with a detailed profile that
                    matches your interests to potential career options. This
                    assessment enables you to gain clarity and make
                    well-informed decisions about your future career path.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="text-purple-500 collapse-title text-xl font-medium">
                  Job Placement
                </div>
                <div className="collapse-content">
                  <p className="text-sm">
                    JobWiz offers job placement services to connect you with
                    suitable employment opportunities. We work closely with
                    employers and companies across various industries to match
                    your skills and qualifications with job openings. Our goal
                    is to help you find a fulfilling career that aligns with
                    your interests and offers growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* vidio segment */}
          <div className=" h-full w-[80%] md:w-6/12 flex justify-center align-middle text-center mt-10 md:mt-auto items-center">
            <video
              className="h-full md:h-[50%] w-full rounded-2xl mt-3 md:mt-0 border-purple-400 border-5 ml-20 md:ml-0"
              controls
            >
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Services;
