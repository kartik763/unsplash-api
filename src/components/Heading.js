import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import React ,{Component}from 'react';
import styled from 'styled-components';


const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;



// const Input = styled.input`
//   height: 2.5rem;
//   width: 20rem;
//   margin-top: 1em;
//   outline: none;
//   text-indent: 1em;
//   font-size: 1em;

//   ::placeholder {
//     font-size: .8em;
//   }
// `;

// const Button = styled.button`
//   height: 2.5rem;
//   padding: 0 1em;
//   outline: none;
//   cursor: pointer;
//   background: #222;
//   border: none;
//   color: #fff;
//   font-size: 1em;
// `;

class Heading extends Component {
  constructor(props) {
      super(props);
  
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

  render() {
      return(
          <div>
              <Navbar dark expand="md">
                  <div className="container" >
                      <NavbarToggler onClick={this.toggleNav} />
                     
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar className="justify-content-end" style={{display:"flex",
                        flexDirection:"row-reverse"}}>
                          
                          <NavItem style={{paddingRight:"70px",marginRight:"60px"}}>
                          <NavLink className="nav-link"   to='/image'> <span style={{color:"#fff",fontSize:"20px",marginLeft:"10px"}} >Image</span></NavLink>
                          </NavItem>
                          <NavItem style={{paddingRight:"60px",marginRight:"5px"}} >
                              <NavLink className="nav-link" to='/photos'><span style={{color:"white",
                             fontSize:"20px",
                              display:"flex",
                              flexDirection:"row"}}>Photos</span> </NavLink>
                          </NavItem>
                          
                          
                          </Nav>
                      </Collapse>
                  </div>
              </Navbar>
              <Jumbotron>
              <Header>
<H1>Unsplash</H1>
<p>The internet’s source of freely usable images.</p>
<p>Powered by creators everywhere.</p>
{/* <form>
  <Input type="text" placeholder="Search photos" />
  <Button>Search</Button>
</form> */}
</Header>
              </Jumbotron>
          </div>
      );
  }
}



export default Heading; 