import React, { Fragment } from 'react';
import RecipesList from './RecipesList';
import Recipe from './Recipe';
import { GiKnifeFork } from 'react-icons/gi';
import { FaRegCopyright, FaRegCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { fetchList, selectRecipe } from '../actions';
import SearchForm from './SearchForm';

class App extends React.Component {

    onSubmit = (form) => {
        this.props.fetchList(form.query);
    };

   componentDidUpdate = () => {
        this.props.selectRecipe(this.props.list[0].recipe_id);
   }

    render = () => {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="wrapper__search">
                        <div className="wrapper__search--logo">
                            <GiKnifeFork />
                            <span className="wrapper__search--logo-text">Recipebook</span> 
                        </div>
                        <div className="wrapper__search--searchForm">
                            <SearchForm onSubmit={this.onSubmit} />
                        </div>
                    </div>
                    <div className="wrapper__content">
                        <div className="wrapper__content__hero" style={{display: this.props.list.length > 0 ? "none" : "block" }}>
                            <h1>WHAT DO YOU WANNA COOK TODAY?</h1>
                            <h2>DISCOVER +1000 RECIPES NOW!</h2>
                            <GiKnifeFork className="wrapper__content__hero--logo" />
                        </div>
                        <div className="wrapper__content__list">
                            <RecipesList />
                        </div>
                        <div className="wrapper__content__recipe">
                            <Recipe />
                        </div>
                    </div>
                    <div className="copyright">
                        <FaRegCopyright className="copyright--icon" /> Pablo Torres
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { list: state.query.list };
}

export default connect(mapStateToProps, { fetchList, selectRecipe })(App);