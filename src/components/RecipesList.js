import React from 'react';
import { connect } from 'react-redux';
import { fetchList, selectRecipe } from '../actions';

class RecipesList extends React.Component {

    handleClick = (id) => {
        this.props.selectRecipe(id);
    }

    renderList() {

        if (this.props.list.length > 0) {

            let recipesArray;

            if (this.props.list.length > 9) {
                recipesArray = this.props.list.splice(0, 10);
            } else {
                recipesArray = this.props.list.slice();
            }
            
            return recipesArray.map(recipe => {
                return (
                    <div onClick={e => this.handleClick(recipe.recipe_id)} className="item" key={recipe.recipe_id}>
                        <div className="item__avatar">
                            <img src={recipe.image_url} className="item__avatar--img" />
                        </div>
                        <div className="item__content">
                            <div className="item__description">
                                <h2 className="item__description--title">{recipe.title}</h2>
                                <p className="item__description--publisher">{recipe.publisher}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { list: state.query.list };
}

export default connect(mapStateToProps, { fetchList, selectRecipe })(RecipesList);