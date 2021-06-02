import * as React from "react";
import '../../about.css'
import SocialLink from "../../../Contact/components/Link";

const TextSkil = () => {
  return (
    <>

      <div className='SkilBlock'>
        <div className='skilWrap'>
          <h2>Programming languages</h2>
          <ul>
            <li>Java Script</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className='skilWrap'>
          <h2>Frameworks </h2>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Material-UI</li>
            <li>Sass</li>
            <li>Less</li>
            <li>JQuery</li>
          </ul>
        </div>
      </div>
      <div className='line'></div>
      <div className='SkilBlock'>
        <div className='skilWrap'>
          <h2>DevOps</h2>
          <ul>
            <li>Nginx</li>
            <li>Heroku</li>
            <li>AWS</li>
          </ul>
        </div>

        <div className='skilWrap'>

          <h2>Integrations </h2>
          <ul>
            <li>Google API</li>
            <li>Yandex Maps</li>
            <li>Telegram Bot API</li>
            <li>Prismic API</li>
          </ul>
        </div>
      </div>
      <div className='line lastLine'></div>
      <div className='mobileLink'>
        <SocialLink />
      </div>

    </>

  )
}

export default React.memo(TextSkil)