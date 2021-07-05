import { requestProvider } from 'webln';

const lightningLogin = async () => {
  try {
    const webln = await requestProvider();
    // Now you can call all of the webln.* methods
    console.log(webln)
  }
  catch(err) {
    // Tell the user what went wrong
    alert(err);
  }
}

export default lightningLogin;


