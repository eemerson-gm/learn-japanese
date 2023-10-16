import { Button, Heading } from 'evergreen-ui';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <div className='flex gap-4 p-4 border'>
          <Heading size={800}>Japanese</Heading>
          <div className='flex gap-2'>
            <a href='/'>
              <Button size='large'>Home</Button>
            </a>
            <a href='/kanji'>
              <Button size='large'>Kanji</Button>
            </a>
            <a href='/practice'>
              <Button size='large'>Practice</Button>
            </a>
          </div>
        </div>
      </nav>
      <div className='container mx-auto p-4'>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
