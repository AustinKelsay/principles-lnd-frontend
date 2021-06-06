import { requestProvider } from 'webln';

const lightningLogin = async () => {
  try {
    const webln = await requestProvider();
    // Now you can call all of the webln.* methods
    console.log(webln)
  }
  catch(err) {
    // Tell the user what went wrong
    alert(err.message);
    return (
      <h1>Test</h1>
    )
  }

  return (
    <h1>test</h1>
  )
}

export default lightningLogin;


