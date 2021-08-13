const LogOut = props => {
  if (localStorage.getItem('userTokenTime')) {
    localStorage.removeItem('userTokenTime');
  }
  window.location.href="/"
 
}

export default LogOut;
