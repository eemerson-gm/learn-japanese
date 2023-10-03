import { Button, Heading } from 'evergreen-ui';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <nav>
        <div className='flex gap-4 p-4 border'>
          <Heading size={800}>Japanese</Heading>
          <div className='flex gap-2'>
            <Button size='large'>Home</Button>
            <Button size='large'>Kanji</Button>
            <Button size='large'>Practice</Button>
          </div>
        </div>
      </nav>
      <div className='container mx-auto px-4'>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
