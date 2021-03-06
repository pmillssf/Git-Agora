import React from 'react';
import { shallow } from 'enzyme';
import { NewsBoard } from '../NewsBoard';
import NewsArticleEntry from '../NewsArticleEntry';
// import Votes from '../Votes';
import { receivedArticles, fetchingArticles, fetchArticles } from '../newsActions';


describe('News Actions', () => {
  it('should have RECEIVED_ARTICLES action', () => {
    const expectedAction = {
      type: 'RECEIVED_ARTICLES'
    };
    expect(receivedArticles()).toEqual(expectedAction);
  });

  it('should have FETCHING_ARTICLES action', () => {
    const expectedAction = {
      type: 'FETCHING_ARTICLES'
    };
    expect(fetchingArticles()).toEqual(expectedAction);
  });
});

describe('News Components', () => {
  describe('NewsBoard', () => {
    xit('should render Top, Trending, and New tabs', () => {
      const wrapper = shallow(<NewsBoard getArticles={fetchArticles} news={{}} />);
      expect(wrapper.find('div').length).toBe(1);
      expect(wrapper.find('div').children('ul').children('li').length).toBe(3);
      expect(wrapper.contains(<a href="#">Top</a>)).toBe(true);
      expect(wrapper.contains(<a href="#">Trending</a>)).toBe(true);
      expect(wrapper.contains(<a href="#">New</a>)).toBe(true);
    });

    xit('should render Fetching Articles', () => {
      const wrapper = shallow(<NewsBoard getArticles={fetchArticles} news={{}} />);
      expect(wrapper.contains('Fetching Articles!')).toBe(true);
    });
  });

  describe('NewsArticleEntry', () => {
    const article = {
      author: 'Sarah Perez',
      title: 'Walmart to lower prices on a million online-only items if you opt for store pickup over shipping',
      description: 'Walmart.com is preparing to launch a new feature called \'Pickup Discount\' that will lower the prices on up to one million online-only items if the customer..',
      url: 'https://techcrunch.com/2017/04/11/walmart-to-lower-prices-on-a-million-online-only-items-if-you-opt-for-store-pickup-over-shipping/',
      urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2016/01/walmart-truckclose-up-side-view_129821854433586541.jpg?w=764&h=400&crop=1',
      publishedAt: '2017-04-12T04:01:08Z',
      source: 'techcrunch',
      votes: 12
    };
    it('should render the title', () => {
      const wrapper = shallow(<NewsArticleEntry article={article} />);
      expect(wrapper.contains('Walmart to lower prices on a million online-only items if you opt for store pickup over shipping')).toBe(true);
    });
    it('should render the description', () => {
      const wrapper = shallow(<NewsArticleEntry article={article} />);
      expect(wrapper.contains('Walmart.com is preparing to launch a new feature called \'Pickup Discount\' that will lower the prices on up to one million online-only items if the customer..')).toBe(true);
    });
    it('should render the source', () => {
      const wrapper = shallow(<NewsArticleEntry article={article} />);
      expect(wrapper.contains('techcrunch')).toBe(true);
    });
    xit('should include the href', () => {
      const wrapper = shallow(<NewsArticleEntry article={article} />);
      expect(wrapper.contains(<a href="https://techcrunch.com/2017/04/11/walmart-to-lower-prices-on-a-million-online-only-items-if-you-opt-for-store-pickup-over-shipping/">
        <h4>Walmart to lower prices on a million online-only items if you opt for store pickup over shipping</h4></a>)).toBe(true);
    });
  });
  xdescribe('Votes', () => {
    it('should render 2 buttons', () => {
      const wrapper = shallow(<Votes />);
      expect(wrapper.find('button').length).toBe(2);
    });
    it('should render votes', () => {
      const wrapper = shallow(<Votes votes={12}/>);
      expect(wrapper.contains(<span>12 </span>)).toBe(true);
    });
  });
});
