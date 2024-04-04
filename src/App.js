import { useEffect, useState } from 'react';

import LogoButton from './components/LogoButton/LogoButton';
import MicrophoneSection from './components/MicrophoneSection/MicrophoneSection';

function App() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    //здесь ты пишешь запрос на сервак и получаешь данные сразу же
  }, []);

  // у тебя получается вот такой список объектов по которому тыбежишь и выводишь компонент
  // с картинкой таам пиздец идет она нахуй
  const microphones = [
    { id: 1, values: [132, 300, 945, 885, 990, 909] },
    { id: 1, values: [34, 989, 945, 885, 990, 909] },
    { id: 1, values: [1, 300, 34, 885, 990, 909] },
  ];

  return (
    <div>
      {!start && <LogoButton setStart={setStart} />}
      {start && (
        <div>
          {microphones.map((item) => (
            <MicrophoneSection id={item.id} values={item.values} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
