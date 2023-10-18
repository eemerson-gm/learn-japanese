import { Button, Menu, Pane } from 'evergreen-ui';
import { BorderCard } from '../components/BorderCard';
import { Hirigana, Katakana } from '../data/Kanji';

const Alphabets = [
  {
    name: 'Hirigana',
    letters: Hirigana,
  },
  {
    name: 'Katakana',
    letters: Katakana,
  },
];

const Kanji = () => {
  console.log('home');
  return (
    <div className='grid grid-cols-2 grid-flow-col gap-4'>
      {Alphabets.map(({ name, letters }) => (
        <BorderCard title={name}>
          <div className='flex flex-wrap justify-center'>
            {letters
              .filter((h) => h.type === 'gojuuon')
              .map((letter) => (
                <Pane border className='w-20 p-4 text-center'>
                  {letter.kana}
                  <hr />
                  {letter.roumaji}
                </Pane>
              ))}
          </div>
        </BorderCard>
      ))}
    </div>
  );
};

export { Kanji };
