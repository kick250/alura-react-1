import './index.css';

const PageFooter = () => {
  return (
    <footer className='page-footer'>
      <div className='social'>
        <img src='./images/fb.png' alt='icone facebook'/>
        <img src='./images/tw.png' alt='icone twitter'/>
        <img src='./images/ig.png' alt='icone instagram'/>
      </div>
      <div className='logo'>
        <img src='./images/logo.png' alt='logo'/>
      </div>
      <div>
        <h3>Desenvolvido por Kick</h3>
      </div>
    </footer>
  )
}

export default PageFooter;