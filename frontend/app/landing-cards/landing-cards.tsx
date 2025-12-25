import { CardComponent } from '../components/common/card/card';
import { LANDING_CARD_CONTENT } from '../types/landing-cards';
import styles from './landing-cards.module.scss';
const LandingCards = () => {
  return (
    <div className={styles.landingCardsContainer}>
      {LANDING_CARD_CONTENT.map((card, index) => (
        <CardComponent
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default LandingCards;
