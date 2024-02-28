import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (

    <div className="background w-full h-full flex flex-col items-center gap-4 p-8">
        <h1 className='text-3xl text-center font-bold bg-white  mt-5 rounded-xl w-11/12 p-5 '>RANDOM GIFS</h1>

        <div>
          <Random />
          <Tag />
        </div>

    </div>

  );
}

export default App;


//Giphify api :  3QznZhvYkR8VrEAweBWLDjw4AK1q6y5R

// # follow this: https://codehelp.notion.site/How-To-Generate-GIPHY-API-Key-85e268bd34464e75a403d32f299a79dc
// # Go to https://developers.giphy.com and create an account to get an API key. Then, create a .env file in the root directory of the project and paste your API key in the following format:
// # Then run npm start to start the app

// REACT_APP_GIPHY_API_KEY = '3QznZhvYkR8VrEAweBWLDjw4AK1q6y5R'