import React from "react";
import { Teammembers } from "../components";

const Aboutus = () => {
  return (
    <div className="">
      <div className="flex bg-white" style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Build Your New <span className="text-green-600">Idea</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                href="#"
              >
                Get Started
              </a>
              <a
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 py-4 px-6">
        <div className="w-[50%] px-6">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="mission"
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold text-gray-800 md:text-4xl py-4">
            Mission
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 py-4 px-6">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold text-gray-800 md:text-4xl py-4">
            Vision
          </p>
          <p className="align-middle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-[50%] px-6">
          <img
            src="https://media.istockphoto.com/photos/mindset-concept-silhouette-man-jumping-over-impossible-and-possible-picture-id1282319919?b=1&k=20&m=1282319919&s=170667a&w=0&h=gOVTyrMKpMXOehheu3F4Ab1oS7fJKufrdgi8BJPgURk="
            alt="mission"
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
        <div className="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
          <center>
            <p className="text-3xl font-semibold text-white md:text-4xl py-4">
              Message from our chairman
            </p>
          </center>
          <div className="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
            <img
              alt="Card"
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbmNpcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-green-600 rounded-2xl z-50">
            <div className="flex flex-col text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
              <p className="text-white my-5 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
              <div className="flex justify-between pl-2">
                <h3 className="font-bold text-2xl">Charles Philips</h3>
                <i className="fas fa-quote-right text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a pizza"
            href="https://www.buymeacoffee.com/Dekartmc"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbmNpcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </a>
        </div>
      </div>
      <Teammembers />
    </div>
  );
};

export default Aboutus;
