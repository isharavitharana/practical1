import React, { useState } from 'react';
import './Body.css';

export default function Body() {
  const [selectLocation, setSelectedLocation] = useState({
    name: 'Cinnamon Dhonveli Maldives',
    pic1URL: '/maldives.png',
    pic2URL: '/cinnamon-dhonveli.png',
    description:
      'Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.',
  });

  const experience = [
    {
      id: 1,
      imgURL: '/Ex1.webp',
      title: 'Join Hilton Honors & Get Up to 4,500 Points',
    },
    {
      id: 2,
      imgURL: '/Ex2.avif',
      title: 'Book Ahead & Save Up to 17%',
    },
    {
      id: 3,
      imgURL: '/Ex3.avif',
      title: 'Multiply Your Points',
    },
    {
      id: 4,
      imgURL: '/Ex4.avif',
      title: 'Free Bonus Points at New Hotels',
    },
    {
      id: 5,
      imgURL: '/Ex5.webp',
      title: 'Park & Stay with Hilton',
    },
    {
      id: 6,
      imgURL: '/Ex6.webp',
      title: 'Make Your Stay Even Sweeter',
    },
  ];

  const offers = [
    {
      id: 1,
      imageURL: '/Off1.webp',
      membersOnly: true,
      type: 'Rooms & Suites',
      name: 'Shangri-La Circle Exclusive Member Rate with Breakfast',
      description:
        'Exclusive Member Rate with Breakfast for Shangri-La Circle member.',
      price: '65,341.80',
    },
    {
      id: 2,
      membersOnly: true,
      imageURL: '/Off2.webp',
      type: 'Rooms & Suites',
      name: 'Shangri-La Circle Exclusive Member Rate',
      description: 'Exclusive Member Rate for Shangri-La Circle member.',
      price: '58,081.60',
    },
    {
      id: 1,
      imageURL: '/Off3.webp',
      membersOnly: false,
      type: 'Rooms & Suites',
      name: 'Book Early and Save with Flexibility',
      description:
        'Book in advance and save up to 15% with complimentary date changes.',
      price: '67,156.85',
    },
  ];
  const handleChange = (event) => {
    if (event.target.value === 'maldives') {
      setSelectedLocation({
        name: 'Cinnamon Dhonveli Maldives',
        pic1URL: '/maldives.png',
        pic2URL: '/cinnamon-dhonveli.png',
        description:
          'Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.',
      });
    } else if (event.target.value === 'srilanka_life') {
      setSelectedLocation({
        name: 'Cinnamon Life',
        pic1URL: '/srilanka.png',
        pic2URL: '/cinnamon-life-home.jpeg',
        description:
          'Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.',
      });
    } else if (event.target.value === 'srilanka_habarana') {
      setSelectedLocation({
        name: 'Cinnamon Dhonveli Maldives',
        pic1URL: '/srilanka.png',
        pic2URL: '/Cinnamon Lodge Habarana.jpg',
        description:
          'A Five-Star nature resort that is rich in history, architecture and biodiversity spanning 27 acres of lush greenery. Located in the epicentre of the cultural triangle; our resort offers an awe-inspiring culture to explore, amidst the numerous wildlife that roam the precincts complete with signature dining experiences.',
      });
    }
    console.log(`selected ${event.target.value}`);
  };
  return (
    <div className='root'>
      <span className='Heading1'>Our Destinations</span>
      <select
        name='location'
        id='location'
        defaultValue={'maldives'}
        onChange={handleChange}
        style={{
          width: 550,
          height: 65,
          border: '1px solid rgba(37, 39, 118, 0.2)',
          padding: '19px 30px',
          color: '#252776',
          fontSize: '20px',
        }}
      >
        <option value='maldives'>Cinnamon Dhonveli Maldives</option>
        <option value='srilanka_life'>Cinnamon Life</option>
        <option value='srilanka_habarana'>Cinnamon Lodge Habarana</option>
      </select>
      <div className='selectedLocation'>
        <img
          src={selectLocation.pic1URL}
          alt=''
          style={{ marginRight: '-75px' }}
        />
        <img src={selectLocation.pic2URL} alt='' />
        <div className='description'>
          <h3
            style={{
              fontFamily: 'BodoniStd-BookItalic, serif',
              color: '#77328b',
              fontSize: '30px',
            }}
          >
            {selectLocation.name}
          </h3>
          <span>{selectLocation.description}</span>
          <button className='discover'>Discover More</button>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <h3 style={{ color: 'rgba(16,76,151)', fontSize: '35px' }}>
          Offers that bring you peace of mind
        </h3>
        <div className='experience'>
          {experience.map((ex) => {
            return (
              <div
                key={ex.id}
                style={{
                  backgroundImage:
                    'linear-gradient(-180deg,transparent,rgba(0,0,0,.5))',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={ex.imgURL}
                  alt={''}
                  width='400px'
                  height={'250px'}
                  style={{
                    position: 'relative',
                    zIndex: '-1',
                  }}
                />
                <h5
                  style={{
                    marginTop: '-50px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: '16px',
                  }}
                >
                  {ex.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <h3 style={{ color: '#333', fontSize: '28px' }}>Offers</h3>
        <div className='offers'>
          {offers.map((offer) => {
            return (
              <div key={offer.id} className='offerCard'>
                {offer.membersOnly && (
                  <span className='memberexclusive'>Member Exclusive</span>
                )}
                <img src={offer.imageURL} alt='' width='375px' />
                <div style={{ padding: '0 20px 20px' }}>
                  <h5 className='offerType'>{offer.type}</h5>
                  <p className='offerName'>{offer.name}</p>
                  <p className='offerDes'>{offer.description}</p>
                  <p
                    style={{ marginTop: '18px' }}
                  >{`From LKR ${offer.price} Average Per Night`}</p>
                </div>
                <button className='offerButton'>View Details</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
