import React from 'react';
import './Footer.css';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Input, Radio } from 'antd';

export default function Footer() {
  return (
    <footer className='root'>
      <div className='section1'>
        <div className='flexStart'>
          <h4 className='title'>About</h4>
          <a
            href='https://www.cinnamonhotels.com/about-us'
            className='subTitle'
          >
            About Cinnamon Hotels &amp; Resorts
          </a>
          <a
            href='https://www.cinnamonhotels.com/media-accolades'
            className='subTitle'
          >
            Media &amp; Accolades
          </a>
          <a href='https://www.cinnamonhotels.com/gallery' className='subTitle'>
            Gallery
          </a>
          <a
            href='https://www.cinnamonhotels.com/cinnamon-csr-sustainability'
            className='subTitle'
          >
            CSR &amp; Sustainability
          </a>
          <a
            href='https://www.keells.com/'
            className='subTitle'
            target='_blank'
            rel='noopener noreferrer'
          >
            John Keells Group
          </a>
          <a
            href='https://www.cinnamonair.com/'
            target='_blank'
            className='subTitle'
            rel='noopener noreferrer'
          >
            Cinnamon Air
          </a>
          <a
            href='https://cinnamonboxoffice.com/'
            target='_blank'
            className='subTitle'
            rel='noopener noreferrer'
          >
            Cinnamon Box Office
          </a>
          <a
            href='https://www.cinnamonhotels.com/terms-and-conditions'
            className='subTitle'
          >
            Terms &amp; Conditions
          </a>
          <a
            href='https://www.cinnamonhotels.com/privacy-statement'
            className='subTitle'
          >
            Privacy Statement
          </a>
        </div>
        <div className='flexStart'>
          <h4 className='title'>Get In Touch</h4>
          <a
            href='https://www.cinnamonhotels.com/know-sri-lanka'
            className='subTitle'
          >
            Know Sri Lanka
          </a>
          <a
            href='https://www.cinnamonhotels.com/know-maldives'
            className='subTitle'
          >
            Know Maldives
          </a>
          <a
            href='https://cinnamonhotels.freshdesk.com/support/home'
            target='_blank'
            rel='noopener noreferrer'
            className='subTitle'
          >
            Contact Us
          </a>

          <h4 className='title'>Sections</h4>
          <a href='https://www.cinnamonhotels.com/careers' className='subTitle'>
            Careers
          </a>
          <a
            className='subTitle'
            href='http://blog.cinnamonhotels.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Blog
          </a>
          <a
            className='subTitle'
            href='https://www.cinnamonhotels.com/affiliateprogramme'
          >
            Cinnamon Affiliate Programme
          </a>
        </div>
        <div className='flexStart' style={{}}>
          <h4 className='title'>Follow Us</h4>
          <div className='social'>
            <FacebookOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
            <InstagramOutlined />
            <YoutubeOutlined />
          </div>
          <h4 className='title'>Get Cinnamon in your inbox</h4>
          <Input
            placeholder='Email Address'
            size='large'
            suffix={<RightOutlined />}
          />
          <div style={{ display: 'block', marginTop: '30px' }}>
            <Radio></Radio>
            <label style={{ color: '#9a9a9a', fontSize: '13px' }}>
              By Checking this box, I consent to the processing of my Personal
              Data by Cinnamon for the purpose and within the Conditions set out
              in this form and the Cinnamon Data Protection Policy
            </label>
          </div>
        </div>
      </div>
      <div className='bg'></div>
    </footer>
  );
}
