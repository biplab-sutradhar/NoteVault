import React from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

type CardProps = React.ComponentProps<typeof Card>;

type CustomCardProps = CardProps & {
  CardHeader?: React.ReactNode;
  CardContent?: React.ReactNode;
  CardFooter?: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({
  className,
  CardHeader,
  CardContent,
  CardFooter,
  ...props
}) => {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      {CardHeader && (
        <div className="card-header">
          {CardHeader}
        </div>
      )}
      {CardContent && (
        <div className="card-content">
          {CardContent}
        </div>
      )}
      {CardFooter && (
        <div className="card-footer">
          {CardFooter}
        </div>
      )}
    </Card>
  );
};

export default CustomCard;
