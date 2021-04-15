import * as React from 'react';
import './NotFound.css'
// TODO удаляй пробелы в стрелочной функции, если нет параметров done
// TODO удаляй закоментированный код, если он не нужен, если нужен - используй done
const Page404 = () => (
  <div className='img__error'>
  <h1 className='error__title'>404</h1>
  </div>
);

export default React.memo(Page404);