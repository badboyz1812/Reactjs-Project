
import React, { useState } from 'react';
import { Table, Accordion, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';


const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    
        { id: 1, category: 'Veg', name: 'Paneer Butter Masala', price: 'Rs.150' },
        { id: 2, category: 'Non-Veg', name: 'Chicken Biryani', price: 'Rs.175' },
        { id: 3, category: 'Drinks', name: 'Mojito', price: 'Rs.190' },
        { id: 4, category: 'Veg', name: 'Veg Pulao', price: 'Rs.89' },
        { id: 5, category: 'Non-Veg', name: 'Fish Fry', price: 'Rs.129' },
        { id: 6, category: 'Drinks', name: 'Lemonade', price: 'Rs.49' },
        { id: 7, category: 'Veg', name: 'Idli', price: 'Rs.15' },
        { id: 8, category: 'Non-Veg', name: 'Mutton Curry', price: 'Rs.220' },
        { id: 9, category: 'Veg', name: 'Aloo Gobi', price: 'Rs.75' },
        { id: 10, category: 'Drinks', name: 'Cold Coffee', price: 'Rs.99' },
        { id: 11, category: 'Non-Veg', name: 'Prawn Masala', price: 'Rs.250' },
        { id: 12, category: 'Veg', name: 'Dal Tadka', price: 'Rs.60' },
        { id: 13, category: 'Drinks', name: 'Masala Chai', price: 'Rs.20' },
        { id: 14, category: 'Veg', name: 'Bhindi Fry', price: 'Rs.65' },
        { id: 15, category: 'Non-Veg', name: 'Egg Curry', price: 'Rs.100' },
        { id: 16, category: 'Veg', name: 'Matar Paneer', price: 'Rs.140' },
        { id: 17, category: 'Drinks', name: 'Buttermilk', price: 'Rs.30' },
        { id: 18, category: 'Veg', name: 'Chole Bhature', price: 'Rs.110' },
        { id: 19, category: 'Non-Veg', name: 'Chicken 65', price: 'Rs.180' },
        { id: 20, category: 'Veg', name: 'Palak Paneer', price: 'Rs.160' },
        { id: 21, category: 'Drinks', name: 'Sweet Lassi', price: 'Rs.45' },
        { id: 22, category: 'Veg', name: 'Rajma Chawal', price: 'Rs.95' },
        { id: 23, category: 'Non-Veg', name: 'Mutton Biryani', price: 'Rs.230' },
        { id: 24, category: 'Veg', name: 'Gobi Manchurian', price: 'Rs.80' },
        { id: 25, category: 'Drinks', name: 'Hot Chocolate', price: 'Rs.120' },
        { id: 26, category: 'Veg', name: 'Paneer Tikka', price: 'Rs.150' },
        { id: 27, category: 'Non-Veg', name: 'Fish Curry', price: 'Rs.200' },
        { id: 28, category: 'Veg', name: 'Kadai Paneer', price: 'Rs.170' },
        { id: 29, category: 'Drinks', name: 'Iced Tea', price: 'Rs.60' },
        { id: 30, category: 'Veg', name: 'Veg Biryani', price: 'Rs.120' },
        { id: 31, category: 'Non-Veg', name: 'Chicken Tikka', price: 'Rs.190' },
        { id: 32, category: 'Veg', name: 'Baingan Bharta', price: 'Rs.70' },
        { id: 33, category: 'Drinks', name: 'Mango Shake', price: 'Rs.80' },
        { id: 34, category: 'Veg', name: 'Dum Aloo', price: 'Rs.130' },
        { id: 35, category: 'Non-Veg', name: 'Lamb Chops', price: 'Rs.300' },
        { id: 36, category: 'Veg', name: 'Mix Veg Curry', price: 'Rs.100' },
        { id: 37, category: 'Drinks', name: 'Apple Juice', price: 'Rs.70' },
        { id: 38, category: 'Veg', name: 'Aloo Paratha', price: 'Rs.40' },
        { id: 39, category: 'Non-Veg', name: 'Grilled Chicken', price: 'Rs.250' },
        { id: 40, category: 'Veg', name: 'Malai Kofta', price: 'Rs.180' },
        { id: 41, category: 'Drinks', name: 'Pineapple Juice', price: 'Rs.65' },
        { id: 42, category: 'Veg', name: 'Methi Malai Murg', price: 'Rs.150' },
        { id: 43, category: 'Non-Veg', name: 'Butter Chicken', price: 'Rs.210' },
        { id: 44, category: 'Veg', name: 'Vegetable Korma', price: 'Rs.135' },
        { id: 45, category: 'Drinks', name: 'Orange Juice', price: 'Rs.55' },
        { id: 46, category: 'Veg', name: 'Paneer Pakora', price: 'Rs.70' },
        { id: 47, category: 'Non-Veg', name: 'Keema Naan', price: 'Rs.170' },
        { id: 48, category: 'Veg', name: 'Vegetable Hakka Noodles', price: 'Rs.120' },
        { id: 49, category: 'Drinks', name: 'Mint Lemonade', price: 'Rs.50' },
        { id: 50, category: 'Veg', name: 'Mushroom Masala', price: 'Rs.140' },
        { id: 51, category: 'Non-Veg', name: 'Tandoori Chicken', price: 'Rs.260' },
        { id: 52, category: 'Veg', name: 'Paneer Bhurji', price: 'Rs.110' },
        { id: 53, category: 'Drinks', name: 'Watermelon Juice', price: 'Rs.55' },
        { id: 54, category: 'Veg', name: 'Pav Bhaji', price: 'Rs.90' },
        { id: 55, category: 'Non-Veg', name: 'Prawn Biryani', price: 'Rs.220' },
        { id: 56, category: 'Veg', name: 'Aloo Tikki', price: 'Rs.40' },
        { id: 57, category: 'Drinks', name: 'Coconut Water', price: 'Rs.35' },
        { id: 58, category: 'Veg', name: 'Kachori', price: 'Rs.20' },
        { id: 59, category: 'Non-Veg', name: 'Fried Fish', price: 'Rs.200' },
        { id: 60, category: 'Veg', name: 'Vegetable Pulao', price: 'Rs.100' }
    
    
    
  ];

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Menu-bg'>
    <div className="menu-page container mt-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Veg</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Dish Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems
                  .filter(item => item.category === 'Veg')
                  .map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Non-Veg</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Dish Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems
                  .filter(item => item.category === 'Non-Veg')
                  .map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Drinks</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Drink Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems
                  .filter(item => item.category === 'Drinks')
                  .map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </div>
  );
};

export default Menu;
