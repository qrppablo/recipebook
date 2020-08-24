import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends React.Component {
    
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>
                    <div className="error__msg">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, meta }) => {

        return (
            <div>
                <input {...input} className="form--input" placeholder="Find a recipe" autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formVal) => {
        this.props.onSubmit(formVal);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
                <Field 
                    name="query" 
                    component={this.renderInput} 
                />
                <button className="form--btn">
                    <FaSearch />
                </button>
            </form>
        );
    }

}

const validate = (formVal) => {
    const errors = {};

    if (!formVal.query) {
        errors.query = 'Enter a recipe name to search (e.g., pizza)';
    } else if (!formVal.query.match(/^[a-zA-Z\s]+$/) ) {
        errors.query = 'Enter a valid recipe name (e.g., pizza)';
    }

    return errors;
};

export default reduxForm({ form: 'searchForm', validate })(SearchForm);