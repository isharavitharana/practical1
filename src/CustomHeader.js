import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Input, Button } from 'antd';
import './CustomHeader.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

export default function CustomHeader() {
  const [hover, setHover] = useState(false);
  const [content, setContent] = useState('');
  const [totalNights, setTotalNights] = useState(1);
  const [roomInfo, setRoomInfo] = useState([{ adults: 1, children: 0 }]);
  // const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isRoomWrappervisible, setIsRoomWrappervisible] = useState(false);

  useEffect(() => {
    let adults = 0;
    let child = 0;
    if (roomInfo) {
      roomInfo.forEach((room) => {
        adults = adults + room.adults;
        child = child + room.children;
      });
      setAdults(adults);
      setChildren(child);
    }
  }, [roomInfo]);

  const handleMouseEnter = (content) => {
    setHover(true);
    setContent(content);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const About = () => {
    return (
      <div className='flexColumn'>
        <h4>About The Hotel</h4>
        <span>Overview</span>
        <span>Explore Colombo</span>
        <span>Services & Facilities</span>
        <span>Map & Directions</span>
      </div>
    );
  };
  const Rooms = () => {
    return (
      <div className='flexColumn'>
        <div className='flexRow'>
          <div className='flexColumn'>
            <h4>Rooms</h4>
            <span>Deluxe Lake View</span>
            <span>Deluxe Ocean View</span>
            <span>Premier Balcony</span>
            <span>Premier Ocean View</span>
          </div>
          <div className='flexColumn'>
            <h4>Horizon Club</h4>
            <span>Horizon Club Lake View</span>
            <span>Horizon Club Ocean View</span>
          </div>
          <div className='flexColumn'>
            <h4>Suites</h4>
            <span>Executive Suites</span>
            <span>Specialty Suites</span>
            <span>Shangri-La Suites</span>
          </div>
          <div className='flexColumn'>
            <h4>Connecting Rooms</h4>
            <span>Executive Suites & Premier Ocean Room Connecting</span>
            <span>Two Deluxe Lake View Rooms Connecting</span>
          </div>
        </div>
        <Divider />
        <span>Rooms & Suites Overview</span>
      </div>
    );
  };
  const Dining = () => {
    return (
      <div className='flexColumn'>
        <div className='flexRow'>
          <div className='flexColumn'>
            <h4>Restaurants</h4>
            <span>Cake Temptations by Shangri-La Colombo</span>
            <span>Shang Palace</span>
            <span>Capital Bar & Grill</span>
            <span>Central</span>
          </div>
          <div className='flexColumn'>
            <h4>Bar & Lounges</h4>
            <span>Sapphyr Lounge</span>
            <span>Capital Bar & Grill</span>
            <span>Pool Bar</span>
          </div>
        </div>
        <Divider />
        <span>Dining Overview</span>
      </div>
    );
  };
  const Experience = () => {
    return (
      <div className='flexColumn'>
        <div className='flexRow'>
          <div className='flexColumn'>
            <h4>For Kids</h4>
            <span>Overview</span>
            <span>Adventure Zone</span>
            <span>Celebrations</span>
          </div>
          <div className='flexColumn'>
            <h4>Health & Leisure</h4>
            <span>Overview</span>
            <span>Health Club</span>
            <span>Chi The Spa</span>
          </div>
        </div>
      </div>
    );
  };
  const Events = () => {
    return (
      <div className='flexColumn'>
        <div className='flexRow'>
          <div className='flexColumn'>
            <h4>Meetings & Events</h4>
            <span>Overview</span>
            <span>Experience It</span>
            <span>Meet Work Create</span>
            <span>Outside Catering</span>
            <span>Request for Proposal</span>
          </div>
          <div className='flexColumn'>
            <h4>Wedding and Celebrations</h4>
            <span>Overview</span>
            <span>Wedding Planning</span>
            <span>Wedding By Shangri-La</span>
            <span>Request for Proposal</span>
          </div>
        </div>
      </div>
    );
  };

  const More = () => {
    return (
      <div className='flexColumn'>
        <div className='flexRow'>
          <div className='flexColumn'>
            <h4>Apartments</h4>
            <span>Learn More</span>
          </div>
        </div>
      </div>
    );
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const handleCalendar = (dates) => {
    console.log('dates', dates);
    const date1 = dayjs(dates[0]);
    const date2 = dayjs(dates[1]);
    if (date1.isBefore(date2)) {
      console.log('dates2', date2.diff(date1, 'day'));
      setTotalNights(date2.diff(date1, 'day'));
    }
  };

  const handleRoomAdd = () => {
    setRoomInfo((preVal) => [...preVal, { adults: 1, children: 0 }]);
  };

  const RoomsComp = ({ room, index }) => {
    // const [subAdult, setSubAdult] = useState(1);
    // const [subChild, setSubChild] = useState(0);
    console.log('index', index);

    const handleAdultSub = () => {
      if (room.adults > 1) {
        // setSubAdult((preVal) => preVal - 1);
        let tempRoomInfo = [...roomInfo];
        tempRoomInfo[index].adults = tempRoomInfo[index].adults - 1;
        setRoomInfo([...tempRoomInfo]);
      }
    };
    const handleAdultAdd = () => {
      // setSubAdult((preVal) => preVal + 1);
      let tempRoomInfo = [...roomInfo];
      tempRoomInfo[index].adults = tempRoomInfo[index].adults + 1;
      setRoomInfo([...tempRoomInfo]);
    };
    const handleChildSub = () => {
      if (room.children >= 1) {
        // setSubChild((preVal) => preVal - 1);
        let tempRoomInfo = [...roomInfo];
        tempRoomInfo[index].children = tempRoomInfo[index].children - 1;
        setRoomInfo([...tempRoomInfo]);
      }
    };
    const handleChildAdd = () => {
      // setSubChild((preVal) => preVal + 1);
      let tempRoomInfo = [...roomInfo];
      tempRoomInfo[index].children = tempRoomInfo[index].children + 1;
      setRoomInfo([...tempRoomInfo]);
    };
    return (
      <div
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <p>Room</p>
        <div
          style={{
            border: '1px solid #ccc',
            width: '100px',
            height: '35px',
            marginLeft: '30px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <MinusOutlined onClick={handleAdultSub} />
          <p>{room.adults}</p>
          <PlusOutlined onClick={handleAdultAdd} />
        </div>
        <div
          style={{
            border: '1px solid #ccc',
            width: '100px',
            height: '35px',
            marginLeft: '45px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <MinusOutlined onClick={handleChildSub} />
          <p>{room.children}</p>
          <PlusOutlined onClick={handleChildAdd} />
        </div>
      </div>
    );
  };

  const handleRoomWrapOpen = () => {
    setIsRoomWrappervisible(!isRoomWrappervisible);
  };

  return (
    <div>
      <div className='menuBar'>
        <img alt='' src='/logo.webp' width='190px' height={'40px'} />
        <div className='links'>
          <p className='navLink' href='/'>
            Sign In
          </p>
          <Divider type='vertical' className='divider' />
          <p className='navLink' href='/'>
            Join Now
          </p>
          <Divider type='vertical' className='divider' />
          <p className='navLink' href='/'>
            Find Reservations
          </p>
          <Divider type='vertical' className='divider' />
          <p className='navLink' href='/'>
            English
          </p>
          <Divider type='vertical' className='divider' />
          <p className='navLink' href='/'>
            LKR
          </p>
        </div>
      </div>
      <div className='navBar'>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <span>ABOUT</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('rooms')}
          onMouseLeave={handleMouseLeave}
        >
          <span>ROOMS & SUITES</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('dining')}
          onMouseLeave={handleMouseLeave}
        >
          <span>DINING</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('experience')}
          onMouseLeave={handleMouseLeave}
        >
          <span>EXPERIENCE</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('events')}
          onMouseLeave={handleMouseLeave}
        >
          <span>EVENTS</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
        <div className='arrowWrapper'>
          <span>GALLERY</span>
        </div>
        <div className='arrowWrapper'>
          <span>OFFERS</span>
        </div>
        <div
          className='arrowWrapper'
          onMouseEnter={() => handleMouseEnter('more')}
          onMouseLeave={handleMouseLeave}
        >
          <span>MORE</span>
          <i class={`${hover ? 'arrowHover up' : 'arrow down'}`}></i>
        </div>
      </div>
      <div className={hover ? 'contentWrapperOnHover' : 'contentWrapper'}>
        <div className='content'>
          {content === 'about' ? (
            <About />
          ) : content === 'rooms' ? (
            <Rooms />
          ) : content === 'dining' ? (
            <Dining />
          ) : content === 'experience' ? (
            <Experience />
          ) : content === 'events' ? (
            <Events />
          ) : (
            <More />
          )}
        </div>
      </div>
      <Carousel afterChange={onChange} arrows={true}>
        <div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(-180deg,transparent,rgba(0,0,0,.5)),url(/img1.webp)',
              height: '600px',
              margin: 0,
              backgroundSize: 'contain',
              color: '#ffffff',
              lineHeight: '600px',
              textAlign: 'center',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
              fontSize: '40px',
            }}
          >
            Shangri-La Cares
          </div>
          <div
            style={{
              marginTop: '-450px',
              color: '#fff',
              lineHeight: '400px',
              textAlign: 'center',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
              fontSize: '25px',
            }}
          >
            Your well-being in our care - learn more about our safety standards
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(-180deg,transparent,rgba(0,0,0,.5)),url(/img2.webp)',
              height: '600px',
              margin: 0,
              backgroundSize: 'contain',
              color: '#ffffff',
              lineHeight: '600px',
              textAlign: 'center',
              fontSize: '40px',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
            }}
          >
            We are vaccinated
          </div>
          <div
            style={{
              marginTop: '-450px',
              color: '#fff',
              lineHeight: '400px',
              textAlign: 'center',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
              fontSize: '25px',
            }}
          >
            Our highly vaccinated workforce provides the safest possible
            environment for your next holiday.
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(-180deg,transparent,rgba(0,0,0,.5)),url(/img3.webp)',
              height: '600px',
              margin: 0,
              backgroundSize: 'contain',
              color: '#ffffff',
              lineHeight: '600px',
              textAlign: 'center',
              fontSize: '40px',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
            }}
          >
            Shangri-La Colombo
          </div>
          <div
            style={{
              marginTop: '-450px',
              color: '#fff',
              lineHeight: '400px',
              textAlign: 'center',
              fontFamily: 'PlayfairDisplay,Georgia,Times New Roman,serif',
              fontSize: '25px',
            }}
          >
            Our highly vaccinated workforce provides the safest possible
            environment for your next holiday.
          </div>
        </div>
      </Carousel>

      <div className='bookingWrapper'>
        <RangePicker
          defaultValue={[
            dayjs(dayjs(), dateFormat),
            dayjs(dayjs().add(1, 'day'), dateFormat),
          ]}
          format={dateFormat}
          separator={<span>{totalNights + 'night'}</span>}
          onChange={handleCalendar}
          style={{ padding: '09px 10px', width: '30%' }}
        />
        <div className='roomDetails' onClick={handleRoomWrapOpen}>
          {roomInfo.length +
            ' Room, ' +
            adults +
            ' Adult, ' +
            children +
            ' Children'}
        </div>

        <div>
          <Input placeholder='Special Code' size='large' />
        </div>

        <Button
          type='primary'
          style={{ background: '#876a20', borderColor: '#876a20' }}
          size={'large'}
        >
          Search
        </Button>
      </div>
      <div>
        <span></span>
        <div
          style={{ display: 'flex', flexDirection: 'row', marginLeft: '100px' }}
        >
          <p></p>
          <p></p>
        </div>
      </div>

      <div
        className={`${
          isRoomWrappervisible ? 'roomWrapper' : 'roomWrapperHidden'
        }`}
      >
        <p>Max 8 guests per room</p>
        <div
          style={{
            backgroundColor: '#f4f5f6',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <p style={{ marginLeft: '90px' }}>Adults</p>
          <p style={{ marginLeft: '70px' }}>Children (under 12)</p>
        </div>
        {roomInfo.map((room, index) => {
          console.log('index', index);
          return <RoomsComp room={room} index={index} />;
        })}

        <Divider />
        <Button
          size='large'
          style={{ width: '100%', borderColor: '#876a20', color: '#876a20' }}
          icon={<PlusOutlined style={{ color: '#876a20' }} />}
          onClick={handleRoomAdd}
        >
          Add Room
        </Button>
      </div>
    </div>
  );
}
