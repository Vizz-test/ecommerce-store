import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header id="home" class="welcome-hero">
			<div class="top-area">
				<div class="header-area">
					
				    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        
				        <div class="top-search">
				            <div class="container">
				                <div class="input-group">
				                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
				                    <input type="text" class="form-control" placeholder="Search"/>
				                    <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
				                </div>
				            </div>
				        </div>
				        

				        <div class="container">            
				            
				            <div class="attr-nav">
				                <ul>
				                	<li class="search">
				                		<a href="#"><span class="lnr lnr-magnifier"></span></a>
				                	</li>
				                	<li class="nav-setting">
				                		<a href="#"><span class="lnr lnr-cog"></span></a>
				                	</li>
				                    <li class="dropdown">
				                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
				                            <span class="lnr lnr-cart"></span>
											<span class="badge badge-bg-1">2</span>
				                        </a>
				                        <ul class="dropdown-menu cart-list s-cate">
				                            <li class="single-cart-list">
				                                <a href="#" class="photo"><img src="./images/collection/arrivals1.png" class="cart-thumb" alt="cart-thumb" /></a>
				                                <div class="cart-list-txt">
				                                	<h6><a href="#">arm <br/> chair</a></h6>
				                                	<p>1 x - <span class="price">$180.00</span></p>
				                                </div>
				                                <div class="cart-close">
				                                	<span class="lnr lnr-cross"></span>
				                                </div>
				                            </li>
				                            <li class="single-cart-list">
				                                <a href="#" class="photo"><img src="./images/collection/arrivals2.png" class="cart-thumb" alt="cart-thumb" /></a>
				                                <div class="cart-list-txt">
				                                	<h6><a href="#">single <br/> armchair</a></h6>
				                                	<p>1 x - <span class="price">$180.00</span></p>
				                                </div>
				                                <div class="cart-close">
				                                	<span class="lnr lnr-cross"></span>
				                                </div>
				                            </li>
				                            <li class="single-cart-list">
				                                <a href="#" class="photo"><img src="./images/collection/arrivals3.png" class="cart-thumb" alt="cart-thumb" /></a>
				                                <div class="cart-list-txt">
				                                	<h6><a href="#">wooden arn <br/> chair</a></h6>
				                                	<p>1 x - <span class="price">$180.00</span></p>
				                                </div>
				                                <div class="cart-close">
				                                	<span class="lnr lnr-cross"></span>
				                                </div>
				                            </li>
				                            <li class="total">
				                                <span>Total: $0.00</span>
				                                <button class="btn-cart pull-right" onclick="window.location.href='#'">view cart</button>
				                            </li>
				                        </ul>
				                    </li>
				                </ul>
				            </div>
				            

				            
				            <div class="navbar-header">
				                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <a class="navbar-brand" href="index.html">sine<span>mkt</span>.</a>

				            </div>
				            

				            
				            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li class=" scroll active"><Link to="/" >Home</Link></li>
				                    <li class="scroll"><Link to="/about" >About</Link></li>
				                    <li class="scroll"><a href="#new-arrivals">new arrival</a></li>
				                    <li class="scroll"><a href="#feature">features</a></li>
				                    <li class="scroll"><a href="#blog">blog</a></li>
				                    <li class="scroll"><Link to="/contact" >contact</Link></li>
				                </ul>
				            </div>
				        </div>
				    </nav>
				    
				</div>
			    <div class="clearfix"></div>

			</div>
			

		</header>
    </>
  )
}

export default Header