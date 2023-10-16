import { Card, Heading, Pane } from 'evergreen-ui';
import { PropsWithChildren, ReactNode } from 'react';

interface BorderCardProps extends PropsWithChildren {
  title: ReactNode;
}

export const BorderCard: React.FC<BorderCardProps> = ({ title, children }) => {
  return (
    <Card border>
      <Pane padding={16} borderBottom>
        <Heading size='800'>{title}</Heading>
      </Pane>
      <Pane padding={16}>{children}</Pane>
    </Card>
  );
};
