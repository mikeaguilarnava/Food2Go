const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-4">
        <img src="./TecLagunaLogo.png" alt="logo" className="App-logo2" />
      </div>
      <div className="col-8 mt-5 subtitleStyle">
        Food Requesting App
      </div>
    </header>
  );
};

export default Banner;