import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions';
import { FaAngleRight } from 'react-icons/fa';

class Recipe extends React.Component {

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.id !== prevProps.id) {
            this.props.fetchRecipe(this.props.id);
        } 
    }

    renderIngredients = (ingredients) => {
        if (ingredients) {
            return ingredients.map((ingredient, i) => {
                return (
                    <li key={i}>
                        <FaAngleRight className="recipe__content--ingredients-icon"/>{ingredient}
                    </li>
                );
            });
        }
    }

    renderList() {

        if (this.props.recipe) {

            const img = {
                background: `linear-gradient(rgba(255, 68, 0, 0.281), rgba(220, 20, 60, 0.274)), url(${this.props.recipe.image_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            };           
            
            return (
                <div className="recipe" key={this.props.recipe.recipe_id}>
                    <div className="recipe__img" style={img}></div>
                    <div className="recipe__content">
                            <h2 className="recipe__content--title">{this.props.recipe.title}</h2>
                            <ul className="recipe__content--ingredients">
                                {this.renderIngredients(this.props.recipe.ingredients)}
                            </ul>
                            <div className="recipe__content__instructions">
                                <a href={this.props.recipe.source_url} className="recipe__content__instructions--btn">INSTRUCTIONS</a>
                                <p className="recipe__content__instructions--by">Recipe by <b>{this.props.recipe.publisher}</b></p>
                            </div>
                    </div>
                </div>
            );
            
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
    return { id: state.data.id, recipe: state.data.recipe  };
}

export default connect(mapStateToProps, { fetchRecipe })(Recipe);