import * as React from 'react';
import instagram from "../../../images/instagram.svg";
import Vkontakte from "../../../images/vk.svg";
import FaceBook from "../../../images/facebook.svg";
import Telegram from "../../../images/telegram.svg";
import LinkedIn from "../../../images/linkedin.svg";

const SocialLink = () => {
  return (
    <div className='logo_block'>
      <a href='https://www.instagram.com/kelaseff/' target='_blank'><img src={instagram}/></a>
      <a href='https://vk.com/kelasevfitness' target='_blank'><img src={Vkontakte}/></a>
      <a href='https://www.facebook.com/dmitriy.kelasev/' target='_blank'><img src={FaceBook}/></a>
      <a href='tg://resolve?domain=@kelaseff' target='_blank'><img src={Telegram}/></a>
      <a href='https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BA%D0%B5%D0%BB%D0%B0%D1%81%D1%8C%D0%B5%D0%B2-bb1691203/' target='_blank'><img src={LinkedIn}/></a>
    </div>
  )
}
 export default React.memo(SocialLink)