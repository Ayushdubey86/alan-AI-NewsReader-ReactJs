import React, {useState ,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

import wordsToNumbers from 'words-to-numbers';

import useStyles from './styles.js';

const alanKey = 'cfad5d33931d41031e80225e88df7cbd2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles,setNewsArticles] = useState([]);
  const [activeArticle,setActiveArtivle] = useState(-1);

  const classes = useStyles();    

  useEffect(() =>{
     alanBtn({
        key: alanKey,
        onCommand: ({ command,articles,number }) => {
          if( command === 'newHeadlines'){
            setNewsArticles(articles);
            setActiveArtivle(-1);
          }
          else if(command === 'highlight'){
            setActiveArtivle((prevActiveArticle) => prevActiveArticle + 1);
          }else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);
       
  return(
    <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="Alan Logo" />
      <NewsCards articles={newsArticles}  activeArticle={activeArticle} />
    </div>
  );
}

export default App;
