import logo from '../assets/images/twodogs-vertical.png';

const Main = () => {
  return (
    <div className='page main'>
      <div className='left'>
        <h2>Two Dogs Web Development</h2>
        <h1>
          Focused on creating solutions that make a difference for
          <span className='emphasis'> your</span> business.
        </h1>
        {/* <button>Get in touch.</button> */}
      </div>
      <div className='right'>
        <div className='logo'>
          <img src={logo} alt='Two Dogs' />
        </div>
      </div>
    </div>
  );
};

export default Main;
