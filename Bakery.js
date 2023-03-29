import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Bakery() {
  return (
    <div>
        <center>
            <h1><i><b>BREEZE BAKERY</b></i></h1>
            <h6>Our coffee shop is one of the biggest places in Coimbatore having the best ambience . It’s one of the best places to hangout with family and friends . It’s also a great place for you to work in peace</h6>
        </center>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">iCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Coffee" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvaya.in%2Frecipes%2Fdetails%2Fcoffee%2F&psig=AOvVaw3vK1G4BcFeXd5AN6tLDbQH&ust=1680158229300000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDW8KXDgP4CFQAAAAAdAAAAABAD">Ordinary Coffee</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgatherforbread.com%2Fdark-chocolate-mocha%2F&psig=AOvVaw2PR7f_B6vg9CGRue9LvtmA&ust=1680158272335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj0pr3DgP4CFQAAAAAdAAAAABAD">Mocha</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fsomedayilllearn.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fcup-of-black-coffee-scaled-720x540.jpeg&tbnid=gtl063St6Hlr5M&vet=12ahUKEwiYl5zOw4D-AhUZ2nMBHXjjCm0QMygFegUIARD0AQ..i&imgrefurl=https%3A%2F%2Fsomedayilllearn.com%2Fhow-to-make-black-coffee%2F&docid=3Ry0KeoDB8-F-M&w=720&h=540&q=black%20coffee&ved=2ahUKEwiYl5zOw4D-AhUZ2nMBHXjjCm0QMygFegUIARD0AQ">Black Coffee</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tea" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedicaldialogues.in%2Fphoto-stories%2F6-health-benefits-of-tea-you-should-know-151&psig=AOvVaw22COJ2rf0FcQIAiIkg7bMH&ust=1680158345116000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjG5-TDgP4CFQAAAAAdAAAAABAD">Ordinary Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://img.lovepik.com/free-template/bg/20200806/bg/97c2f036d75a7_400982.png_detail.jpg!wh650">Black Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9564c71753425.5bd01bc0dcf15.jpg">Green Tea</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pasteries" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://b.zmtcdn.com/data/menus/659/18510659/530ddd956a4081fac5213b3e28b6fb0c.jpg">Cake</NavDropdown.Item>
              <NavDropdown.Item href='https://b.zmtcdn.com/data/menus/890/20238890/4bfc72fe5d6aea99cff1a6c75973599e.jpg'>Pie</NavDropdown.Item>
              <NavDropdown.Item href="https://cdn.dribbble.comzSyFkOCwcLwFVNjktHSc4OjJP/EABgBAQEBAQEAAA/users/3268956/screenshots/6925462/menu_card01_4x.jpg">Donut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <center>
    <img src='https://w0.peakpx.com/wallpaper/696/6/HD-wallpaper-bakery-shop-building-bakery-store-shop.jpg' alt=''></img>
    </center>
    </div>
  )
}

export default Bakery