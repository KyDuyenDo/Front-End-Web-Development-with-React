import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'

//import { connect } from 'react-redux';
//import { addComment } from '../redux/ActionCreators';

// const mapStateToProps = (state) => {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
// });
// use class for Main in redux core
function Main(){
    const dishes = useSelector((state) => state.dishes)
    const comments = useSelector((state) => state.comments)
    const leaders = useSelector((state)=> state.leaders)
    const promotions = useSelector((state)=> state.promotions)
    const HomePage = () => {
      return (
        <Home dish={dishes.filter((dish) => dish.featured)[0]}
          promotion={promotions.filter((promo) => promo.featured)[0]}
          leader={leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    const DishWithId = () => {
      let params = useParams();
      return (
        <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
                    comments={comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
                     />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
          <Route exact path="/aboutus" component={() => <About leaders={leaders} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
}

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default withRouter(Main);