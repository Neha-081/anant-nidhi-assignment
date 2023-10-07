  // Define a functional component called Slider
export default function Slider() {
  return (
    <div className="carousel m-10 h-full bg-blue-200 rounded-xl m-auto max-h-[400px]">
      <div id="slide1" className="carousel-item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ApjX0Z2lY9sWTsn9nKsBLlW9gbVAoBsbo4Yzb0u1AxwXXPvfJWLZySbiEtyqHsQH8hI&usqp=CAU"
          className="absolute top-[10px] left-[10px] rounded-xl"
          alt="slide"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-[150px] right-[200px] text-left">
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectectur adipiscing elit,
            <br />
            sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore
            <br />
            magna aliqua. Ut enim ad
            <br />
            minim veniam.
          </p>
          <h4 className="font-extrabold mt-10">Priyanka Chaudhary</h4>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}
