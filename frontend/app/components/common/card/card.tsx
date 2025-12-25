import Card from '@mui/material/Card';
import styles from './card.module.scss';
import { Typography } from '@mui/material';

type CardComponentProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};
export const CardComponent = ({ icon, title, description }: CardComponentProps) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 4 }}>
      <div className={styles.cardContainer}>
        {icon}
        <Typography variant="h6">{title}</Typography>
        <Typography className={styles.description}>{description}</Typography>
      </div>
    </Card>
  );
};

export default Card;
