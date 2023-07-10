import Button from './Button';

import restaurantFood from '../assets/images/jpg/restaurantFood.jpg';

const HeroSection = () => {
  return (
    <div className='hero-section__wrapper' style={{ backgroundImage: `url(${restaurantFood})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='hero-section container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '2rem', borderRadius: '0.5rem' }}>
        <h2 className='hero-section__title' style={{ color: '#ffc107', marginBottom: '0.5rem' }}>Little Lemon</h2>
        <h3 className='hero-section__subtitle' style={{ color: '#edefee', marginBottom: '1rem' }}>Chicago</h3>
        <p className='hero-section__paragraph' style={{ color: '#edefee', marginBottom: '2rem' }}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. Our dishes are prepared with fresh and locally sourced ingredients to ensure the highest quality and flavor. Join us for an unforgettable dining experience in the heart of Chicago.
        </p>
        <h4 style={{ color: '#ffc107', marginBottom: '0.5rem' }}>Our Specialties</h4>
        <p style={{ color: '#edefee', marginBottom: '2rem' }}>
          At Little Lemon, we take pride in our specialties that showcase the best of Mediterranean cuisine. From succulent kebabs to flavorful hummus and crispy falafel, our menu offers a wide variety of dishes that will delight your taste buds. Each dish is carefully crafted by our talented chefs to deliver a memorable dining experience.
        </p>
        <Button to='/booking'>Reserve a table</Button>
        <img
          className='hero-section__img'
          src={restaurantFood}
          alt='4 Sandwiches'
          style={{ display: 'none' }}
        />
      </section>
    </div>
  );
};

export default HeroSection;
